<template>
  <div>
    <div class="title">
      {{ lang.title }}
    </div>
    <div>
      small text 
      <button>click on the exchange row</button>
      small text
    </div>
    <div class="btns__price">
      <button>prices</button>
    </div>
  </div>
</template>
<script>
import langEn from '@/langs/en'
import langPt from '@/langs/en'
export default {
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
</style>


