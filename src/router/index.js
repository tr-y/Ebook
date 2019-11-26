import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import '@/assets/style/icon.css'
import '@/assets/style/global.scss'
import Ebook from '@/components/Ebook'
// import '@/assets/style/global.scss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      name: 'Ebook',
      component: Ebook
    }
  ]
})
