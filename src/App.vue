<template lang="jade">
  #app
    // fade
    router-view
</template>

<script>
  import Fade from './transitions/Fade'

  export default {
    name: 'app',
    components: {
      Fade
    }
  }
</script>

<style lang="scss" src="./styles/main.scss"></style>
