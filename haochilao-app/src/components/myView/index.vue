<template>
  <transition name="page-move">
    <router-view class="my_view"></router-view>
  </transition>
</template>

<script type="text/ecmascript-6"> 
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .page-move-enter, .page-move-leave-active
    transform: translate(100%, 0)
  .page-move-enter-active, .page-move-leave-active
    transition: transform .3s
</style>
