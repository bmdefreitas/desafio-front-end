// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ptBr from 'vee-validate/dist/locale/pt_BR'
import VeeValidate, { Validator } from 'vee-validate'

Validator.localize('pt_BR', ptBr)

Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
