<template>
<div id="solicita-emprestimo">
    <div class="container">
        <h2>Solicitação de Empréstimo</h2>
        <h4>Favor informe seus dados de email e CNPJ para finalizar a solicitação de empréstimo.</h4>
        <div class="row" v-if="mensagem">
            <div class="col-12 col-lg-6 mensagem">
                <div class="alert" :class="'alert-' + mensagem.tipo">
                    {{mensagem.descricao}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
              <form @submit.prevent="enviaSolicitacao()">
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input type="email" name="email" id="email" class="form-control" />
                        <small v-show="errors.has('email')" class="text-danger">
                            {{ errors.first('email') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="cnpj">CNPJ*</label>
                        <input type="text" name="cnpj" id="cnpj" class="form-control">
                        <small v-show="errors.has('cnpj')" class="text-danger">
                            {{ errors.first('cnpj') }}
                        </small>
                    </div>

                    <div class="form-group">
                      <button class="btn btn-primary" type="submit">
                        Enviar
                      </button>
                    </div>
              </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import router from '../router'
export default {
  name: 'SolicitaEmprestimo',
  data () {
    return {
      mensagem: ''
    }
  },
  methods: {
    enviaSolicitacao () {
      return router.push({name: 'home'})
    }
  }
}
</script>

<style scoped>
h4 {
  font-size: 0.7rem;
  padding: 0.5rem 0 1.5rem 0;
}
</style>
