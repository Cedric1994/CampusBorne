<template lang="jade">
div
  h1.page-title Emplacement {{ name }}
  hr
  .page-content
    img.plan(src="./../../../static/assets/images/roomMap.jpg" alt="Plan d'accès à la salle")
  backbutton
</template>

<script>
import Router from 'vue-router'
import Backbutton from './BackButton'

export default {
  name: 'Room',
  data () {
    return {
    name: 0
    }
  },
  created () {
    this.name = this.$route.params.name
  },
  components: {
    Backbutton
  }
}
</script>

<style lang="scss" scoped>
  .plan{
    position: relative;
    margin: auto;
    display: block;
    width: 90%;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
