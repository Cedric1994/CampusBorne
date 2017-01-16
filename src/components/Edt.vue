<template lang="jade">
div
  h1.page-title Schedule
  hr
  .date {{ dates[displayedEdt] }}
  .page-content
    v-touch(tag="img", :src="plannings[displayedEdt]", @dragstart="false" @swipeleft="handleSwipeleft", @swiperight="handleSwiperight", alt="Emploi du temps")

  backbutton
</template>

<script>
import Backbutton from './common/BackButton'

export default {
  name: 'Edt',
  components: {
    Backbutton
  },
  data() {
    return {
      displayedEdt: 1,
      dates: [
        "15th of January 2017",
        "16th of January 2017",
        "17th of January 2017"
      ],
      plannings: [
        "./../../static/assets/images/Edt7.png",
        "./../../static/assets/images/Edt8.png",
        "./../../static/assets/images/Edt9.png"
      ]
    }
  },
  methods: {
    handleSwipeleft: function(){
      if (this.displayedEdt < this.plannings.length -1)
        this.displayedEdt++;
    },

    handleSwiperight: function(){
      if (this.displayedEdt > 0)
        this.displayedEdt--;
    }

  }
}
</script>

<style lang="scss" scoped>
  .date{
    width:  100%;
    text-align: center;
    font-size: 25px;
    padding-bottom: 10px;
  }

  .page-content{
    text-align: center;

    & img{
      height: 100%;
    }
  }
</style>
  