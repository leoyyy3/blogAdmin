
import Vue from 'vue'
import Router from 'vue-router'
import {config} from './routeConfig'


Vue.use(Router)

let router = new Router({
  routes: config,
  mode:"history"
})

window.$router = router

export default router