<template lang="jade">
div
  h1.page-title Bureaux administratifs
  hr
  .page-content
    a.button(v-for="administration in administrationList")
      {{ administration.function }}
      br
      {{ administration.office }}
  backbutton(redirection-path="FindDestination")
</template>

<script>
import Backbutton from './../common/BackButton'

export default {
  name: 'Administration',
  components: {
    Backbutton
  },
  data () {
    return {
      administrationList: [
        {function:'Bureau de la vie scolaire',office:'E+107'},
        {function:'Bureau des relations internationals',office:'E+108'},
        {function:'Bureau des étudients',office:'E+109'},
        {function:'Bureau instription administrative',office:'E+110'},
        {function:'Accueil étudient étranger',office:'E+111'},
        {function:'Bureaux des objets trouvés', office:'E+112'},
        {function:'Bureau des étudients',office:'E+211'},
        {function:'Bureaux des jeux',office:'E+212'},
        {function:'Bureaux de la musique',office:'E+212'}]
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
