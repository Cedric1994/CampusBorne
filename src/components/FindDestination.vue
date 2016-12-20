<template lang="jade">
div
  h1.page-title Trouver ma destination
  hr
  .container-btn
    a.button(href="/FindDestination/Teacher") Bureaux des professeurs
    a.button(href="FindDestination/Administration") Bureaux administratifs
    a.button(href="FindDestination/Class") Salles de cours
  backbutton(redirection-path="")
</template>

<script>
import Backbutton from './common/BackButton'

export default {
  name: 'FindDestination',
  components: {
    Backbutton
  }
}
</script>

<style lang="scss" scoped>
.container-btn{
	margin-top: 130px;
}
</style>
