<template lang="jade">
div
  h1.page-title Bureaux administratifs
  hr
  .page-content
    router-link.button(v-for="administration in administrationList", :to="'/Room/' + administration.office")
      {{ administration.function }}
  backbutton
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
        {function:'Bureau des relations internationales',office:'E+108'},
        {function:'Bureau des étudiants',office:'E+109'},
        {function:'Bureau inscriptions administratives',office:'E+110'},
        {function:'Accueil étudiants étrangers',office:'E+111'},
        {function:'Bureau des objets trouvés', office:'E+112'},
        {function:'Bureau des sports',office:'E+211'},
        {function:'Bureaux des jeux',office:'E+212'},
        {function:'Bureaux de la musique',office:'E+212'}]
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
