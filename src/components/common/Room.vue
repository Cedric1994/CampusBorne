<template lang="jade">
div
  h1.page-title Emplacement {{ name }}
  hr
  .page-content
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
</style>
