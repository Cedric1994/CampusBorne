<template lang="jade">
  transition(name="fade", mode="out-in", appear)
    slot
</template>

<script>
  export default {
    name: 'fade'
  }
</script>

<style lang="scss">
  .fade-enter-active {
    transition: opacity ease-out 0.2s;
  }

  .fade-leave-active {
    transition: opacity ease-in 0.1s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
