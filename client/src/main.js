import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

import Login from './components/Login.vue'
import Register from './components/Register.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
