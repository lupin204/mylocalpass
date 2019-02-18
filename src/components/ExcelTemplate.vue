<template>
  <div>
    <download-excel class="btn btn-success" :fetch="fetchData" :fields="json_fields" worksheet="My Worksheet" name="mypass-data.xls">
      Download Data To Excel
    </download-excel>
    <download-excel class="btn btn-success" :fetch="fetchData" :fields="json_fields" type="csv" name="mypass-data.csv">
      Download Data To CSV
    </download-excel>
    <hr/>
    <button class="btn btn-success" @click="uploadDataFromJson">Upload Data From Json</button>
    <hr/>
    <button class="btn btn-success" @click="downloadDataToJson">Download Data To Json</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import JsonExcel from 'vue-json-excel'
import { stor } from '../api/model.js'
import { board, list, card } from '../api'

import jsonBoards from '../assets/data/boards.json'
import jsonLists from '../assets/data/lists.json'
import jsonCards from '../assets/data/cards.json'

export default {
  components: {
    'downloadExcel': JsonExcel
  },
  data() {
    return {
      importedJsonBoards: jsonBoards,
      importedJsonLists: jsonLists,
      importedJsonCards: jsonCards,
      json_fields: {
        'Board Id': 'boardId',
        'Board': 'board',
        'List Id': 'listId',
        'List': 'list',
        'Card Id': 'id',
        'Card Key' : 'key',
        'Card Value': 'value'
      },
      // json_fields: {
      //       'Complete name': 'name',
      //       'City': 'city',
      //       'Telephone': 'phone.mobile',
      //       'Telephone 2' : {
      //           field: 'phone.landline',
      //           callback: (value) => {
      //               return `Landline Phone - ${value}`;
      //           }
      //       },
      //   },
        json_data: [],
        // json_data: [
        //     {
        //         'name': 'Tony Peña',
        //         'city': 'New York',
        //         'country': 'United States',
        //         'birthdate': '1978-03-15',
        //         'phone': {
        //             'mobile': '1-541-754-3010',
        //             'landline': '(541) 754-3010'
        //         }
        //     },
        //     {
        //         'name': 'Thessaloniki',
        //         'city': 'Athens',
        //         'country': 'Greece',
        //         'birthdate': '1987-11-23',
        //         'phone': {
        //             'mobile': '+1 855 275 5071',
        //             'landline': '(2741) 2621-244'
        //         }
        //     }
        // ],
        json_meta: [
            [
                {
                    'key': 'charset',
                    'value': 'utf-8'
                }
            ]
        ]
    }
  },
  created() {
    this.json_data = this.fetchData()
  },
  computed: {
    ...mapState({
      // test: 'test'
    }),
    ...mapGetters([
      // 'TEST'
    ]),
  },
  methods: {
    ...mapMutations([
      // 'SET_TEST'
    ]),
    ...mapActions([
      // 'FETCH_TEST'
    ]),
    fetchData() {
      let cards = []
      stor.getBoards().forEach((board) => {
        const item = stor.getBoard(board.id)
        item.lists.forEach(list => {
          list.cards.forEach(card => {
            card.boardId = board.id
            card.board = board.title
            card.listId = list.id
            card.list = list.title
            cards.push(card)
          })
        })
      })
      return cards
    },
    uploadDataFromJson() {
      stor.setBoards(this.importedJsonBoards)
      stor.setLists(this.importedJsonLists)
      stor.setCards(this.importedJsonCards)
    },
    downloadDataToJson() {
      const boards = localStorage.getItem('boards')
      const blob1 = new Blob([boards], { type: 'text/plain' })
      const e1 = document.createEvent('MouseEvents')
      let a1 = document.createElement('a')
      a1.download = 'boards.json'
      a1.href = window.URL.createObjectURL(blob1)
      a1.dataset.downloadurl = ['text/json', a1.download, a1.href].join(':')
      e1.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a1.dispatchEvent(e1)

      const lists = localStorage.getItem('lists')
      const blob2 = new Blob([lists], { type: 'text/plain' })
      const e2 = document.createEvent('MouseEvents')
      let a2 = document.createElement('a')
      a2.download = 'lists.json'
      a2.href = window.URL.createObjectURL(blob2)
      a2.dataset.downloadurl = ['text/json', a2.download, a2.href].join(':')
      e2.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a2.dispatchEvent(e2)

      const cards = localStorage.getItem('cards')
      const blob3 = new Blob([cards], { type: 'text/plain' })
      const e3 = document.createEvent('MouseEvents')
      let a3 = document.createElement('a')
      a3.download = 'cards.json'
      a3.href = window.URL.createObjectURL(blob3)
      a3.dataset.downloadurl = ['text/json', a3.download, a3.href].join(':')
      e3.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a3.dispatchEvent(e3)
    }
  }
};
</script>

<style>
</style>