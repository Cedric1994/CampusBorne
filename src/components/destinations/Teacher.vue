<template lang="jade">
div
  h1.page-title Teachers office
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
        {teacher:'M. Grady Litovsky',office:'E+107'},
        {teacher:'M. Marco Giboin',office:'E+108'},
        {teacher:'Mme. Michelle Karima',office:'E+109'},
        {teacher:'M. Estelle Rodriquez',office:'E+110'},
        {teacher:'Mne. Anette Joseph',office:'E+111'},
        {teacher:'M. Marc Joseph',office:'E+112'},
        {teacher:'Mme. Astrid Morris',office:'E+211'},
        {teacher:'Mme. Julie Zimmerman',office:'E+212'},
        {teacher:'Mme. Annie Stewart',office:'E+213'},
        {teacher:'Mme. Marianne Reed',office:'O+227'},
        {teacher:'M. Henry Lawrence',office:'O+432'},
        {teacher:'Mme. Camille Spencer',office:'O+321'},
        {teacher:'M. André Roberson',office:'O+345'},
        {teacher:'M. Thomas Campbell',office:'O+375'},
        {teacher:'M. Micheal Gray',office:'O+367'},
        {teacher:'M. George Pena',office:'O+386'}]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
