// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ptBr from 'vee-validate/dist/locale/pt_BR'
import VeeValidate, { Validator } from 'vee-validate'
import VueCurrencyFilter from 'vue-currency-filter'
import VueNumeric from 'vue-numeric'

Vue.use(VueNumeric)

Validator.localize('pt_BR', ptBr)

Vue.use(VeeValidate)

Vue.use(VueCurrencyFilter,
  {
    symbol: 'R$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
