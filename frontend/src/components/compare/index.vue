<template>
  <div>
    <div class="title">
      {{ lang.title }}
    </div>
    <div>
      <p>{{ lang.textCenterInit}}</p>
      <button>{{ lang.buttonExchange }} </button>
      <p> {{ lang.textCenterEnd }} </p>
    </div>
    <div class="btns__price">
      <verify-cota/>
    </div>
  </div>
</template>
<script>
import langEn from '@/langs/en'
import langPt from '@/langs/pt'
export default {
  components: {
    verifyCota: () => import('@/components/compare/verifyCota')
  },
  computed: {
    lang() {
      if (this.$store.state.lang === 1) {
        return langEn.components.compare
      } else {
        return langPt.components.compare
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

.title
  color var(--secondary)
  font-size 2.3em
  margin 16px

</style>


