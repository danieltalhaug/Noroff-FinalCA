import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import ContactPage from './components/ContactPage.vue'
import AboutPage from './components/AboutPage.vue'
// Vue.use(VueRouter)

Vue.config.productionTip = false

// const router = new VueRouter({
//    routes: [
//      {
//        path: '/',
//        name: 'Home',
//        component: HomePage
//      },
//      {
//        path: '/Contact',
//        name: 'Contact',
//        component: ContactPage
//      },
//      {
//        path: '/About',
//        name: 'About',
//        component: AboutPage
//      }
//    ]
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
