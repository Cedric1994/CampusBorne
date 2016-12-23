<template>
  <!--div 
    div(class="header")-->
    <h2 id="date" v-el:date>test</h2>
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
    },
    created() {
      var time = this.$els.date;
      time.textContent = "9h48";
    }
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


<!-- Style applied to all the application -->
<!--<style lang="scss">

$button-background-color: #0d5287;
$button-background-color-hover: #0585e8;

/* General style */
/* -------------- */

html {
  font-family: Verdana, Geneva, sans-serif;
  line-height: 1.5;
}

.page-title{
	text-align: center;
}

/* Button style */
/* -------------- */

.button{
  text-decoration: none;
  color: white;
  text-align: center;
	display: block;
	font-size: 32px;
	width: 90%;
	margin: 70px auto;
	padding: 40px;
  background: $button-background-color;
}
</style>-->
