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

    <article id=slider>

      <!-- Slider Setup -->
      <input checked type=radio name=slider id=slide1 />
      <input type=radio name=slider id=slide2 />
      <input type=radio name=slider id=slide3 />
      <input type=radio name=slider id=slide4 />
      <input type=radio name=slider id=slide5 />

      <!-- The Slider -->
      <div id=slides>
        <div id=overflow>
          <div class=inner>
            <article>
              <img src=./../../static/assets/images/CouldDragonByBjzaba.png />
            </article>
            <article>
              <img src=./../../static/assets/images/MountainFortByBjzaba.png />
            </article>
            <article>
              <img src=./../../static/assets/images/MountainOutpostByBjzaba.png />
            </article>
            <article>
              <img src=./../../static/assets/images/CliffsByBjzaba.png />
            </article>
            <article>
              <img src=./../../static/assets/images/HillFortByBjzaba.png />
            </article>
          </div>
          <!-- .inner -->
        </div>
        <!-- #overflow -->
      </div>
      <!-- #slides -->

      <!-- Controls and Active Slide Display -->
      <div id=controls>
        <label for=slide1></label>
        <label for=slide2></label>
        <label for=slide3></label>
        <label for=slide4></label>
        <label for=slide5></label>
      </div>
      <!-- #controls -->
    </article>
    <!-- #slider -->
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


label {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }

#slider {
	text-align: center;
  padding-top: 2%;
  padding-left:10%;
  padding-right:10%;
}

label {
	color: teal;
	cursor: pointer;
	text-decoration: none;
}

label:hover{
	color: #000 !important;
}

#slider {
	margin: 0 auto;
}


/* NEW EXPERIMENT */
/* Slider Setup */
input {
	display: none;
}

#slide1:checked ~ #slides .inner { margin-left:0; }
#slide2:checked ~ #slides .inner { margin-left:-100%; }
#slide3:checked ~ #slides .inner { margin-left:-200%; }
#slide4:checked ~ #slides .inner { margin-left:-300%; }
#slide5:checked ~ #slides .inner { margin-left:-400%; }


#overflow {
	width: 100%;
	overflow: hidden;
}

article img {
	width: 100%;
}

#slides .inner {
	width: 500%;
	line-height: 0;
}

#slides article {
	width: 20%;
	float: left;
}

/* Slider Styling */

/* Control Setup */

#controls {
	margin: -25% 0 0 0;
	width: 100%;
	height: 50px;
}

#controls label { 
	display: none;
	width: 50px;
	height: 50px;
	opacity: 0.3;
}

#active {
	margin: 23% 0 0;
	text-align: center;
}

#active label {
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	display: inline-block;
	width: 10px;
	height: 10px;
	background: #bbb;
}

#active label:hover {
	background: #ccc;
	border-color: #777 !important;
}

#controls label:hover {
	opacity: 0.8;
}

#slide1:checked ~ #controls label:nth-child(2), 
#slide2:checked ~ #controls label:nth-child(3), 
#slide3:checked ~ #controls label:nth-child(4), 
#slide4:checked ~ #controls label:nth-child(5), 
#slide5:checked ~ #controls label:nth-child(1) {
	background: url('../../static/assets/images/next.png') no-repeat;
	float: right;
	margin: 0 -70px 0 0;
	display: block;
}


#slide1:checked ~ #controls label:nth-child(5),
#slide2:checked ~ #controls label:nth-child(1),
#slide3:checked ~ #controls label:nth-child(2),
#slide4:checked ~ #controls label:nth-child(3),
#slide5:checked ~ #controls label:nth-child(4) {
	background: url('../../static/assets/images/prev.png') no-repeat;
	float: left;
	margin: 0 0 0 -70px;
	display: block;
}

#slide1:checked ~ #active label:nth-child(1),
#slide2:checked ~ #active label:nth-child(2),
#slide3:checked ~ #active label:nth-child(3),
#slide4:checked ~ #active label:nth-child(4),
#slide5:checked ~ #active label:nth-child(5) {
	background: #333;
	border-color: #333 !important;
}

/* Info Box */

.info {
	line-height: 20px;
	margin: 0 0 -150%;
	position: absolute;
	font-style: italic;
	padding: 30px 30px;
	opacity: 0;
	color: #000;
	text-align: left;
}

.info h3 {
	color: #333;
	margin: 0 0 5px;
	font-weight: normal;
	font-size: 22px;
	font-style: normal;
}

/* Slider Styling */

#slides {
	margin: 45px 0 0;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	box-shadow: 1px 1px 4px #666;
	padding: 1%;
	background: #fff;
	background: rgb(252,255,244); /* Old browsers */
	background: -moz-linear-gradient(top,  rgba(252,255,244,1) 0%, rgba(219,218,201,1) 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(252,255,244,1)), color-stop(100%,rgba(219,218,201,1))); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  rgba(252,255,244,1) 0%,rgba(219,218,201,1) 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  rgba(252,255,244,1) 0%,rgba(219,218,201,1) 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  rgba(252,255,244,1) 0%,rgba(219,218,201,1) 100%); /* IE10+ */
	background: linear-gradient(top,  rgba(252,255,244,1) 0%,rgba(219,218,201,1) 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcfff4', endColorstr='#dbdac9',GradientType=0 ); /* IE6-9 */
}


/* Animation */

#slides .inner {
	-webkit-transform: translateZ(0);
	-webkit-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000); 
	-moz-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000); 
    -ms-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000); 
     -o-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000); 
        transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000); /* easeInOutQuart */

	-webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000); 
	-moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000); 
    -ms-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000); 
     -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000); 
        transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000); /* easeInOutQuart */
}

#slider {
	-webkit-transform: translateZ(0);
	-webkit-transition: all 0.5s ease-out;
	-moz-transition: all 0.5s ease-out;
	-o-transition: all 0.5s ease-out;
	transition: all 0.5s ease-out;
}

#controls label{
	-webkit-transform: translateZ(0);
	-webkit-transition: opacity 0.2s ease-out;
	-moz-transition: opacity 0.2s ease-out;
	-o-transition: opacity 0.2s ease-out;
	transition: opacity 0.2s ease-out;
}

#slide1:checked ~ #slides article:nth-child(1) .info,
#slide2:checked ~ #slides article:nth-child(2) .info,
#slide3:checked ~ #slides article:nth-child(3) .info,
#slide4:checked ~ #slides article:nth-child(4) .info,
#slide5:checked ~ #slides article:nth-child(5) .info {
	opacity: 1;
	-webkit-transition: all 1s ease-out 0.6s;
	-moz-transition: all 1s ease-out 0.6s;
	-o-transition: all 1s ease-out 0.6s;
	transition: all 1s ease-out 0.6s;
}

.info, #controls, #slides, #active, #active label, .info h3, .desktop, .tablet, .mobile {
	-webkit-transform: translateZ(0);
	-webkit-transition: all 0.5s ease-out;
	-moz-transition: all 0.5s ease-out;
	-o-transition: all 0.5s ease-out;
	transition: all 0.5s ease-out;
}

/* Responsive Styling */
@media only screen and (max-width: 850px) and (min-width: 450px) {

	#slider #controls {
		margin: -25% 0 0 15%;
		width: 70%;
		height: 50px;
	}

	#slider #controls label {
		-moz-transform: scale(0.8);
		-webkit-transform: scale(0.8);
		-o-transform: scale(0.8);
		-ms-transform: scale(0.8);
		transform: scale(0.8);
	}

	#slider #slides {
		padding: 1% 0;
		-webkit-border-radius: 0px;
		-moz-border-radius: 0px;
		border-radius: 0px;
	}

	#slider #active {
		margin: 22% 0 0;
	}

}
</style>