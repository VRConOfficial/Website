import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: 'about', component: About},
  { path: '*', component: Home},
]

const router = new VueRouter ({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
