import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Simulador from '@/components/Simulador'
import SolicitaEmprestimo from '@/components/SolicitaEmprestimo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/simulador',
      name: 'simulador',
      component: Simulador
    },
    {
      path: '/solicita-emprestimo',
      name: 'solicita-emprestimo',
      component: SolicitaEmprestimo
    },
    { path: '*', redirect: '/' }
  ]
})
