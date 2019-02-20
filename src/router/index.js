import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import NotFound from '../components/NotFound.vue'
import ExcelTemplate from '../components/ExcelTemplate.vue'

// 미들웨어 설정
Vue.use(VueRouter)

// vue-router
const router = new VueRouter({
  mode: 'history', // not 'hashbang mode' but 'history mode'
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/export',
      component: ExcelTemplate
    },
    {
      path: '/board/:id',
      component: Board,
      children: [{
        path: 'card/:cid',
        component: Card
      }]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

export default router
