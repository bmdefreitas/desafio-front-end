import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Simulador from '@/components/Simulador'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/simulador',
      name: 'Simulador',
      component: Simulador
    }
  ]
})
