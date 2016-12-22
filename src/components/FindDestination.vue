<template lang="jade">
div
  h1.page-title Trouver ma destination
  hr
  .container-btn
    router-link.button(to="Teacher" append) Bureaux des professeurs
    router-link.button(to="Administration" append) Bureaux administratifs
    router-link.button(to="Class" append) Salles de cours
  backbutton
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
