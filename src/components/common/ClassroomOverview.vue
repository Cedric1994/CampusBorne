<template>
  <router-link :id="classroom" class="button" :to="'Room/'+classroom">
    <span id="classroom_name" class="classroom-info tab">{{ classroom_name }}</span>
    <img id="classroom_people_icon" class="classroom-icon tab" src="./../../images/people.png"/>
    <span id="classroom_people_number" class="classroom-info">{{ nb_students_inside }}</span>
    <img id="classroom_charger_icon" class="classroom-icon tab" v-show="show_charger" src="./../../images/charger.png" />
    <img id="classroom_projector_icon" class="classroom-icon tab" v-show="show_projector" src="./../../images/projector.png" />

  </router-link>
</template>

<script>

  export default {
    name: 'ClassroomOverview',
    props: ['classroom_name','nb_students_inside','charger','projector'],
    mounted: function(){
      this.initCSS();

    },
    methods: {
      initCSS: function() {
        if (this.nb_students_inside == 0) {
          document.getElementById(this.classroom_name).setAttribute('class', 'button free');
        }
        else {
          document.getElementById(this.classroom_name).setAttribute('class', 'button occupied');
        }

      }
    },
    data: function() {
      return { classroom: this.classroom_name, show_charger: this.charger , show_projector: this.projector }
    }

  }

</script>

<style lang="scss" scoped>

  .button {
    text-align: left;
  }
  .tab {
    margin-left: 10%;
  }
  .free {
    background-color: green;
  }
  .occupied {
    background-color: orange;
  }
  .classroom-icon {
    display: inline-block;
    width: 10%;
  }
  .classroom-info {
    vertical-align: 50%;
    color: black;
  }

</style>
