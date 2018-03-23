<template>
<div id="simulador">
    <div class="container">
        <h2>Simulador</h2>
        <div class="row" v-if="mensagem">
            <div class="col-12 col-lg-6 mensagem">
                <div class="alert" :class="'alert-' + mensagem.tipo">
                    {{mensagem.descricao}}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
                    <div class="form-group">
                        <label for="valor">Qual o valor desejado para o empréstimo?*</label>
                        <vue-numeric currency="R$" separator="." id="valor" name="valor" value=""
                            :class="{'form-control': true, 'is-invalid': errors.has('valor')}"
                            v-validate="'required|decimal:2|min_value:0|max_value:100000'"
                            v-model="proposta.valor" :minus="false" :min="0" :max="100000" :precision="2" :empty-value="0">
                        </vue-numeric>
                        <small class="form-text text-muted">Digite um valor entre R$ 0 e R$ 100.000,00</small>
                        <small v-show="errors.has('valor')" class="text-danger">
                            {{ errors.first('valor') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="prazo">Qual a quantidade de meses para o pagamento?*</label>
                        <vue-numeric id="prazo" name="prazo" value=""
                            :class="{'form-control': true, 'is-invalid': errors.has('prazo')}"
                            v-validate="'required|min_value:3|max_value:12'"
                            v-model="proposta.prazo" :minus="false" :min="3" :max="12" :empty-value="3">
                        </vue-numeric>
                        <small class="form-text text-muted">Digite um prazo entre 3 e 12 meses</small>
                        <small v-show="errors.has('prazo')" class="text-danger">
                            {{ errors.first('prazo') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="juros">Qual a taxa de juros (% ao mês)?*</label>
                        <vue-numeric :precision="2" :min="3" :max="8" :empty-value="3" separator="."
                            :class="{'form-control': true, 'is-invalid': errors.has('juros')}" name="juros" id="juros" value=""
                            v-model="proposta.juros" v-validate="'required|decimal:2|min_value:3|max_value:8'">
                        </vue-numeric>
                        <small class="form-text text-muted">Digite um valor entre 3% e 8%</small>
                        <small v-show="errors.has('juros')" class="text-danger">
                            {{ errors.first('juros') }}
                        </small>
                    </div>

                    <div class="form-group" v-if="prestacao">
                        <div class="alert alert-info">
                            Prestação: {{proposta.prazo}}x iguais de <strong>{{prestacao | currency}}</strong>.
                        </div>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
                <button type="submit" class="btn btn-primary" @click="solicitaEmprestimo()">
                    SOLICITAR EMPRÉSTIMO
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'Simulador',

  data () {
    return {
      proposta: {
        valor: 0,
        prazo: 0,
        juros: 0
      },
      mensagem: ''
    }
  },
  computed: {
    prestacao: function () {
      return this.calculoPrestacao(this.proposta.valor, this.proposta.juros, this.proposta.prazo)
    }
  },
  methods: {
    solicitaEmprestimo () {
      if (!this.proposta.valor > 0) {
        this.mensagem = { tipo: 'danger', descricao: 'O valor do empréstimo tem que ser maior que 0.' }
        return
      }
      this.$validator.validateAll().then((result) => {
        if (result) {
          localStorage.setItem('proposta', JSON.stringify(this.proposta))
          router.push({ name: 'solicita-emprestimo' })
          return
        }
        this.mensagem = { tipo: 'danger', descricao: 'Favor preencher o formulário corretamente.' }
      })
    },
    calculoPrestacao (valor, juros, prazo) {
      return Number((valor * (juros / 100)) / (1 - (1 / (Math.pow((1 + (juros / 100)), prazo))))).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.prestacao{
    margin-top: 30px;
}
</style>
