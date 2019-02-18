<template>
  <Modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">Card Info</div>
      <a class="modal-close-btn" href="" @click.prevent="onClickClose">&times;</a>
    </div>

    <div slot="body">
      <h4>Key</h4>
      <input class="form-control" type="text" :value="card.key" ref="inputKey">
      <h4>Value</h4>
      <input class="form-control" type="text" :value="card.value" ref="inputValue">
      <!-- <h4>Key</h4>
      <input class="form-control" type="text" :value="card.key" :readonly="!toggleKey" 
      @click.prevent="toggleKey=!toggleKey" @blur="onBlurInputKey" ref="inputKey">
      <h4>Value</h4>
      <input class="form-control" type="text" :value="card.value" :readonly="!toggleValue" 
      @click.prevent="toggleValue=!toggleValue" @blur="onBlurInputValue" ref="inputValue"> -->
      <!-- <textarea class="form-control" cols="30" rows="3" placeholder="Add a more detailed description..."
      :readonly="!toggleDesc" @click.prevent="toggleDesc=!toggleDesc" @blur="onBlurInputDesc"
      v-model="card.description" ref="inputDesc"></textarea> -->
    </div>
    <div slot="footer">
      <a class="btn btn-success" @click.prevent="onClickSubmitCard">submit</a>
    </div>
  </Modal>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Modal from './Modal.vue'
import {card} from '../api'

export default {
  components: { Modal },
  props: ['boardId'],
  data() {
    return {
      // toggleKey: false,
      // toggleValue: false
    };
  },
  computed: {
    ...mapState({
      card: 'card'
    })
  },
  created() {
    this.FETCH_CARD(this.$route.params.cid)
  },
  methods: {
    ...mapMutations([
      'SET_CARD'
    ]),
    ...mapActions([
      'FETCH_CARD',
      'UPDATE_CARD'
    ]),
    onClickClose() {
      this.$router.push(`/board/${this.boardId}`)
    },
    onClickSubmitCard() {
      const key = this.$refs.inputKey.value.trim()
      if (!key) return
      const value = this.$refs.inputValue.value.trim()
      if (!value) return
      this.UPDATE_CARD({ id: this.card.id, key, value })
        .then(_ => this.$router.push(`/board/${this.boardId}`))
    },
    onBlurInputKey() {
      this.toggleKey = !this.toggleKey
      const key = this.$refs.inputKey.value.trim()
      if (!key) return
    },
    onBlurInputValue() {
      this.toggleValue = !this.toggleValue
      const value = this.$refs.inputValue.value.trim()
      if (!value) return
    }
  }
}
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>