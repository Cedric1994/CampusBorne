<template lang="jade">
  #app
    transition(name="slide" mode="out-in")
      router-view
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss" src="./styles/main.scss"></style>
<style lang="scss" src="./styles/transition.scss"></style>
