// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'

import routes from './routes'
import App from './App'
import vIcon from './components/common/vIcon'

Vue.use(VueRouter)
Vue.use(VueTouch)


Vue.component('v-icon', vIcon)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
