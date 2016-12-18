<template lang="jade">
div
  h1 Bureaux administratifs
  backbutton(redirection-path="FindDestination")
</template>

<script>
import Backbutton from './../common/BackButton'

export default {
  name: 'Administration',
  components: {
    Backbutton
  }
}
</script>

<style lang="scss" scoped>
</style>
