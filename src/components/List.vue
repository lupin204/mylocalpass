<template>
  <div class="list" :data-list-id="list.id" :data-list-pos="list.pos">
    <div class="list-header">
      <input v-if="isEditTitle" class="form-control input-title" type="text"
      ref="inputTitle" v-model="inputTitle" @blur="onSubmitTitle" @keyup.enter="onSubmitTitle">
      <div v-else class="list-header-title" v-on:click="onClickTitle">{{list.title}}</div>
      <a class="delete-list-btn" href="" v-on:click.prevent="onDeleteList">&times;</a>
    </div>
    <div class="card-list" :data-list-id="list.id">
      <div v-show="!list.cards.length" class="empty-card-item"></div>
      <card-item v-for="card in list.cards" :key="`${list.id}-${card.pos}`" :card="card" :boardId="list.boardId" :listId="list.id" />
    </div>
    <a class="add-card-btn" href="" @click.prevent="onClickCreateCard" :data-list-id="list.id">&plus; Add a card..</a>
    <AddCard v-if="isAddCard" :boardId="list.boardId" :listId="list.id" :pos="lastCardPos" @close="onClickCloseCard" />
    <!-- <div v-if="isAddCard">
      <add-card :listId="list.id" :pos="lastCardPos" @close="isAddCard=false" />
    </div>
    <a v-else class="add-card-btn" href="" @click.prevent="isAddCard=true">
      &plus; Add a card..
    </a> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import AddCard from './AddCard.vue'
import CardItem from './CardItem.vue'
import { card } from '../api'

export default {
  components: { AddCard, CardItem },
  props: ['list'],
  data() {
    return {
      isEditTitle: false,
      inputTitle: '',
      isAddCard: false
    }
  },
  created() {
    this.inputTitle = this.list.title
  },
  computed: {
    // ...mapState({
    //   isAddCard: 'isAddCard'
    // }),
    lastCardPos() {
      const lastCard = this.list.cards[this.list.cards.length - 1]
      let pos = 65535
      if (lastCard) pos = lastCard.pos + pos
      return pos
    }
  },
  methods: {
    // ...mapMutations([
    //   'SET_IS_ADD_CARD'
    // ]),
    ...mapActions([
      'UPDATE_LIST',
      'DELETE_LIST'
    ]),
    onClickTitle() {
      this.isEditTitle = true
      this.$nextTick(_ => {
        this.$refs.inputTitle.focus()
      })
    },
    onSubmitTitle() {
      this.inputTitle = this.inputTitle.trim()
      if (!this.inputTitle) return 
      const id = this.list.id
      const title = this.inputTitle

      if (title === this.list.title) return this.isEditTitle = false

      this.UPDATE_LIST({ id, title })
        .then(_=> (this.isEditTitle = false))
    },
    onDeleteList() {
      if (!window.confirm(`Delete ${this.list.title} list?`)) return
      this.DELETE_LIST({ id: this.list.id })
    },
    onClickCreateCard() {
      this.isAddCard=true
    },
    onClickCloseCard() {
      this.isAddCard=false
    }
  }
}
</script>

<style>
.list {
  background-color: #e2e4e6;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  width: 100%;
  max-height: 100%;
}
.list-header {
  flex: 0 0 auto;
  height: 30px;
  padding: 10px 8px 8px;
  position: relative;
}
.list-header-title {
  font-size: 16px;
  font-weight: 700;
  padding-left: 8px;
  line-height: 30px;
}
.input-title {
  width: 90%;
}
.delete-list-btn {
  position: absolute;
  right: 10px;
  top: 8px;
  text-decoration: none;
  color: #aaa;
  font-size: 24px;
}
.card-list {
  flex: 1 1 auto;
  overflow-y: scroll;
}
.empty-card-item   {
  height: 10px;
  width: 100%;
  background-color: rgba(0,0,0, 0);
}
.add-card-btn {
  flex: 0 0 auto;
  display: block;
  padding: 8px 10px;
  color: #8c8c8c;
  text-decoration: none;
}
.add-card-btn:focus,
.add-card-btn:hover {
  background-color: rgba(0,0,0, .1);
}
</style>
