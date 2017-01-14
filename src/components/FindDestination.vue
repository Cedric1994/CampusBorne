<template lang="jade">
  .page-wrapper
    h1.page-title Trouver ma destination
    hr
    .page-content
      router-link.button(to="Teacher" append) Bureaux des professeurs
        v-icon(name="home", size="2")
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
  .page-wrapper{
    height: 100%;
    background-image: url("./../../static/assets/images/lost.png");
    background-repeat: no-repeat;
    background-position: right bottom;
  }
</style>
