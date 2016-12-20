<template lang="jade">
div
  h1.page-title Salle de cours
  hr
  .page-content
    a.button(v-for="classRoom in classRoomList") {{ classRoom }}
  backbutton(redirection-path="FindDestination")
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
      classRoomList: ['E+107', 'E+108', 'E+109', 'E+110', 'E+111', 'E+112', 'E+211', 'E+213',
                      'O+132', 'O+133', 'O+134', 'O+232', 'O+233', 'O+240', 'O+243', 'O+246']
      }
  }
}
</script>

<style lang="scss" scoped>
</style>
