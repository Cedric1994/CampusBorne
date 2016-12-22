<template lang="jade">
div
  h1.page-title Bureaux des professeurs
  hr
  .page-content
    router-link.button(v-for="office in officeList", :to="'/Room/' + office.office") {{ office.teacher + ' / ' + office.office }}

  backbutton
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
      officeList: [
        {teacher:'Mr Litovsky',office:'E+107'},
        {teacher:'Mr Litovsky',office:'E+108'},
        {teacher:'Mr Litovsky',office:'E+109'},
        {teacher:'Mr Litovsky',office:'E+110'},
        {teacher:'Mr Litovsky',office:'E+111'},
        {teacher:'Mr Litovsky',office:'E+112'},
        {teacher:'Mr Litovsky',office:'E+211'},
        {teacher:'Mr Litovsky',office:'E+212'},
        {teacher:'Mr Litovsky',office:'E+213'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+432'},
        {teacher:'Mr Litovsky',office:'O+321'},
        {teacher:'Mr Litovsky',office:'O+345'},
        {teacher:'Mr Litovsky',office:'O+375'},
        {teacher:'Mr Litovsky',office:'O+367'},
        {teacher:'Mr Litovsky',office:'O+386'}]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
