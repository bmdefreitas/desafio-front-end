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
                        <input type="email" name="email" id="email" :class="{'form-control': true, 'is-invalid': errors.has('email')}"
                        @input="empresa.email = $event.target.value" v-validate="'required|email'" />
                        <small v-show="errors.has('email')" class="text-danger">
                            {{ errors.first('email') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="cnpj">CNPJ*</label>
                        <input type="text" name="cnpj" id="cnpj" :class="{'form-control': true, 'is-invalid': errors.has('cnpj')}"
                        @input="empresa.cnpj = $event.target.value" v-mask="'99.999.999/9999-99'" v-validate="'required'"/>
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
import AwesomeMask from 'awesome-mask'
import router from '../router'

export default {
  name: 'SolicitaEmprestimo',
  data () {
    return {
      mensagem: '',
      empresa: {
        email: '1223',
        cnpj: ''
      }
    }
  },
  // components: {TheMask},
  directives: {
    'mask': AwesomeMask
  },
  methods: {
    enviaSolicitacao () {
      this.resource = this.$resource('post')
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.resource.save(this.empresa).then(
            success => {
              this.mensagem = { tipo: 'success', descricao: 'Solicitação enviada com sucesso!' }
              setTimeout(() => {
                router.push({name: 'home'})
              }, 2000)
              return success
            },
            error => {
              this.mensagem = { tipo: 'danger', descricao: 'Houve um erro ao realizar sua solicitação. Entre em contato com nossa central de atendimento. Obrigado!' }
              return console.log(error)
            }
          )
          return
        }
        this.mensagem = { tipo: 'danger', descricao: 'Favor preencher o formulário corretamente.' }
      })
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
