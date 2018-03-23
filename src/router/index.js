import Vue from 'vue'
import Router from 'vue-router'
import Simulador from '@/components/Simulador'
import SolicitaEmprestimo from '@/components/SolicitaEmprestimo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {name: 'simulador'}
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
