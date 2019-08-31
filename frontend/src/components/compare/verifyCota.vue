<template>
  <div>
    <div class="verify-btns">
      <div v-if="flagRS" class="div-input"><label class="label-input-brl" for="br">R$</label><input class="input input__brl" v-model="dataBrl" name="br"></div>
      <!-- <div v-if="flagRS2" class="div-input"><label class="label-input" for="br"></label><input class="input input__brl" :value="dataCotaResultBrl" name="br"></div>       -->
      <div class="div-input"><label class="label-input" for="usa"></label><input class="input input__usd" :value="dataCotaResultUsd" name="usa"></div>
    </div>
  </div>
</template>
<script>
import { apiGetPrice } from '@/services'
import langEn from '@/langs/en'
import langPt from '@/langs/en'
import { parse } from 'path';
export default {
  data: () => ({
    flagRS: true,
    flagRS2: false,
    dataUsd: '',
    dataBrl: '0',
    dataCotaResultUsd: null,
    dataCotaResultBrl: null
  }),
  watch: {
    dataBrl() {
      this.getPrice()
    }
  },
  methods: {
    getPrice() {
      apiGetPrice()
        .then(res => {
          const low = res.data.USD.low.replace(/,/, '.')
          const high = res.data.USD.high.replace(/,/, '.')
          const sub = (parseFloat(high) + parseFloat(low)) / 2
          this.dataUsd = sub
        })
        .catch(err => {
          console.log(err, 'error')
        })
        .finally(() => {
          this.calcPrice()
        })
    },
    calcPrice() {
      const calc = Number(this.dataBrl) * Number(this.dataUsd)
      this.dataCotaResultBrl = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(this.dataBrl)
      this.dataCotaResultUsd = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'USD'}).format(calc)
    }
  },
  mounted () {
    this.getPrice()
    console.log('Mounted ok')
  }
}
</script>
<style lang="stylus" scoped>

.input
  text-decoration none
  border solid 3px var(--secondary)
  border-radius 22px
  padding 8px
  &__brl
    text-align right
    font-size 0.5em
  &__usd
    text-align right
    font-size 0.5em

.verify-btns
  margin-top 64px
  display flex
  justify-content center

.div-input
  margin 16px
  font-size 38px

.label-input-brl
  font-size 0.5em
  position relative
  left 15%

</style>


