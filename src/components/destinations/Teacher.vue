<template lang="jade">
div
  h1 Bureaux des professeurs
  backbutton(redirection-path="FindDestination")
</template>

<script>
import Backbutton from './../common/BackButton'

export default {
  name: 'Teacher',
  components: {
    Backbutton
  }
}
</script>

<style lang="scss" scoped>
</style>
