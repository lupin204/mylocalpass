<template>
  <div class="card-item" :data-card-id="card.id" :data-card-pos="card.pos">
    <router-link :to="`/board/${boardId}/card/${card.id}`">
      <div class="">{{card.key}}</div>
      <div class="">{{card.value}}</div>
      <div v-if="card.description" class="card-item-meta" >&equiv;</div>
    </router-link>
    <a class="delete-card-btn" href="" @click.prevent="onClickDelete">&times;</a>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  props: [
    'card',
    'boardId',
    'listId'
  ],
  methods: {
    ...mapActions([
      'DELETE_CARD'
    ]),
    onClickDelete() {
      if (!window.confirm('Delete this card?')) return
      this.DELETE_CARD(this.card.id)
    }
  }
}
</script>

<style>
.card-item {
  background-color: #fff;
  border-radius: 3px;
  margin: 8px;
  padding: 6px 20px 2px 8px;
  box-shadow: 0 1px 0 #ccc;
  position: relative;
}
.card-item a {
  text-decoration: none;
  color: #444;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
  display: block;
}
.card-item:hover,
.card-item:focus {
  background-color: rgba(0,0,0, .1);
  cursor: pointer;
}
.card-item-meta {
  font-size: 26px;
  padding: 5px 0 0 3px;
  color: #8c8c8c;
}
.delete-card-btn {
  position: absolute;
  right: 10px;
  top: 4px;
  text-decoration: none;
  font-size: 18px;
  color: #aaa;
}
</style>