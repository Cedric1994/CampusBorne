<template lang="jade">
div
  h1.page-title Class rooms
  hr
  .page-content
    router-link.button(v-for="classRoom in classRoomList", :to="'/Room/' + classRoom") {{ classRoom }}
  backbutton
</template>

<script>
import Backbutton from './../common/BackButton'

export default {
  name: 'Class',
  components: {
    Backbutton
  },
  data () {
    return {
      classRoomList: ['O+132', 'O+133', 'O+134', 'O+232', 'O+233', 'O+240', 'O+307', 'O+308', 'E+107', 'E+108', 'E+109', 'E+110', 'E+111', 'E+112', 'E+211', 'E+213']
      }
  }
}
</script>

<style lang="scss" scoped>
</style>
