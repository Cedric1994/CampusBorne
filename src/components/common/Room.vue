<template lang="jade">
div
  h1.page-title Emplacement {{ roomType}} {{ roomName }}
  hr
  .page-content

  backbutton(redirection-path="{{ previousPagev }}")
</template>

<script>
export default {
  name: 'Room',
  props: ['roomName', 'roomType' 'previousPage']
}
</script>

<style lang="scss" scoped>
</style>
