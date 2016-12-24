<template lang="jade">
div
  h1.page-title Emploi du temps
  hr
  .page-content
    button(type="button") previous
    span 8/11/2016
    button(type="button") next
    br
    img(v-touch:swipe="test" src="./../../static/assets/images/Edt8.png" alt="Emploi du temps")

  backbutton
</template>

<script>
import Backbutton from './common/BackButton'

export default {
  name: 'Edt',
  components: {
    Backbutton
  },
  methods: {
    test: function(){
      console.log("swiped");
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content{
  text-align: center;

  & img{
    height: 100%;
  }
}
</style>
