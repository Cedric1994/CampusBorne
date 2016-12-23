<template>
  <div>
    <div class="header">
      <h2 id="date">Mardi 8 Novembre</h2>
      <h2 id="time">10h30</h2>
    </div>
    <hr/>
    <router-link to="FindDestination" class="button">Trouver ma destination</router-link>
    <router-link to="FreeClassRoom" class="button">Trouver un salle libre</router-link>
    <router-link to="Edt" class="button">Consulter mon emploi du temps</router-link>
  </div>
</template>

<script>
  import Backbutton from './common/BackButton'
  export default {
    name: 'Home',
    components: {
      Backbutton
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  padding-left: 5%;
  padding-right: 5%;
  height: 4em;
  line-height: 4em;
  white-space: nowrap;
}

#date{
  float: left;
  margin: 0;
}

#time{
  float: right;
  margin: 0;
}
</style>