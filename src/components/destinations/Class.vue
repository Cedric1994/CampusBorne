<template lang="jade">
div
  h1 Salle de cours
  backbutton(redirection-path="FindDestination")
</template>

<script>
import Backbutton from './../common/BackButton'

export default {
  name: 'Class',
  components: {
    Backbutton
  }
}
</script>

<style lang="scss" scoped>
</style>
