<template>
<div id="simulador" class="jumbotron">
    <h2>Simulador</h2>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <form class="needs-validation" @submit.prevent="validaForm" novalidate>
                    <div class="form-group">
                        <label for="valor">Qual o valor desejado para o empréstimo?*</label>
                        <input type="text" v-validate="'required|max_value:100000'" :class="{'form-control': true, 'is-invalid': errors.has('valor')}" id="valor" name="valor" v-mask="'money'">
                        <small id="valorEmprestimo" class="form-text text-muted">Digite um valor entre R$ 0 e R$ 100.000,00</small>
                        <small v-show="errors.has('valor')" class="text-danger">
                            {{ errors.first('valor') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="meses">Qual a quantidade de meses para o pagamento?*</label>
                        <select class="form-control" id="meses">
                            <option value="3">3 meses</option>
                            <option value="4">4 meses</option>
                            <option value="5">5 meses</option>
                            <option value="6">6 meses</option>
                            <option value="7">7 meses</option>
                            <option value="8">8 meses</option>
                            <option value="9">9 meses</option>
                            <option value="10">10 meses</option>
                            <option value="11">11 meses</option>
                            <option value="12">12 meses</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="juros">Qual a taxa de juros (% ao mês)?*</label>
                        <input type="text" name="juros" v-validate="'required|decimal:2|min_value:3|max_value:8'" :class="{'form-control': true, 'is-invalid': errors.has('juros')}" id="juros">
                        <small id="valorEmprestimo" class="form-text text-muted">Digite um valor entre 3% e 8%</small>
                        <small v-show="errors.has('juros')" class="text-danger">
                            {{ errors.first('juros') }}
                        </small>
                    </div>

                    <button type="submit" class="btn btn-info">SOLICITAR PROPOSTA DE EMPRÉSTIMO</button>
                </form>
            </div>
        </div>
    </div>
    <div class="card">
        <pre>
            {{errors.items}}
        </pre>
    </div>
</div>
</template>

<script>
import AwesomeMask from 'awesome-mask'

export default {
  name: 'Simulador',
  data () {
    return {}
  },
  directives: {
    'mask': AwesomeMask
  },
  methods: {
    validaForm () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          return
        }
        this.simular()
      })
    },
    simular () {
      console.log('Enviado')
    }
  }
}
</script>

<style scoped>

</style>
