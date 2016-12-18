<template lang="jade">
div
  h1.page-title Trouver une destination
  hr
  .container-btn
    a.button(href="/FindDestination/Teacher") Bureaux des professeurs
    a.button(href="FindDestination/Administration") Bureaux administratifs
    a.button(href="FindDestination/Class") Salles de cours
  .return-button-div
    a.return-button.prev(href="/") Retour
</template>

<script>
export default {
  name: 'FindDestination',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container-btn{
	margin-top: 130px;
}
</style>
