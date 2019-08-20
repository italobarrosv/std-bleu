<template>
  <div>
    <div class="verify-btns">
      <div class="div-input"><label class="label-input" for="br">BR</label><input name="br"></div>
      <div class="div-input"><label class="label-input" for="usa">USD</label><input name="usa"></div>
    </div>
  </div>
</template>
<script>
import langEn from '@/langs/en'
import langPt from '@/langs/en'
export default {
}
</script>
<style lang="stylus" scoped>

.verify-btns
  margin-top 64px
  display flex
  justify-content center

.div-input
  margin 16px
  font-size 38px

.label-input
  margin-left 16px

</style>


