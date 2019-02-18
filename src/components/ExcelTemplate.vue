<template>
  <div>
    <download-excel class="btn btn-success" :fetch="fetchData" :fields="json_fields" worksheet="My Worksheet" name="mypass-data.xls">
      Download Data To Excel
    </download-excel>
    <download-excel class="btn btn-success" :fetch="fetchData" :fields="json_fields" type="csv" name="mypass-data.csv">
      Download Data To CSV
    </download-excel>
    <hr/>
    <button class="btn btn-success" @click="uploadData">Upload Data From data.json</button>
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
    uploadData() {
      debugger
      stor.setBoards(this.importedJsonBoards)
      stor.setLists(this.importedJsonLists)
      stor.setCards(this.importedJsonCards)
    }
  }
};
</script>

<style>
</style>