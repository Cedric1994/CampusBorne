<template>
  <!--div
    div(class="header")-->
    <!-- <h2 id="date" v-el:date>test</h2> -->
      <!--h2(id="date") Mardi 8 Novembre
      h2(id="time") 10h30
    hr-->
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return{

      }
    }
    // created() {
    //   var time = this.$els.date;
    //   time.textContent = "9h48";
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background-color: yellow;
  height: 4em;
  line-height: 4em;
  white-space: nowrap;
}

#date{
  float: left;
  margin: 0;
  background: red;
}

#time{
  float: right;
  margin: 0;
  background: blue;
}
</style>
