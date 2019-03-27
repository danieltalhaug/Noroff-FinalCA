import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import ContactPage from './components/ContactPage.vue'
import AboutPage from './components/AboutPage.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
