<template lang="jade">
div
  h1.page-title Bureaux des professeurs
  hr
  .page-content
    a.button(v-for="office in offices") {{ office.teacher + ' / ' + office.office }}

  backbutton(redirection-path="FindDestination")
</template>

<script>
import Backbutton from './../common/BackButton'

export default {
  name: 'Teacher',
  components: {
    Backbutton
  },
  data () {
    return {
      offices: [
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'}]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
