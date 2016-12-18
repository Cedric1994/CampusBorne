// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

// Import components
import Home from './components/Home'
import FindDestination from './components/FindDestination'
import Teacher from './components/destinations/Teacher'
import Class from './components/destinations/Class'
import Administration from './components/destinations/Administration'
import NotFound from './components/NotFound'
import FreeClassRoom from './components/FreeClassRoom'
import Edt from './components/Edt'

const routes = {
  '/': Home,
  '/FindDestination' : FindDestination,
  '/FindDestination/Teacher' : Teacher,
  '/FindDestination/Class' : Class,
  '/FindDestination/Administration' : Administration,
  '/FreeClassRoom' : FreeClassRoom,
  '/Edt' : Edt
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
