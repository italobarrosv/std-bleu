import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'Buy',
      component: Home
    },
    {
      path: '/compare',
      name: 'Compare',
      component: Home
    },
    {
      path: '/',
      name: 'Remittance',
      component: Home
    },
    {
      path: '/',
      name: 'Exchanges',
      component: Home
    },
    {
      path: '/',
      name: 'ExchangesFees',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})