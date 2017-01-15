<template>
	<div>
		<div class="header">
			<h2 id="date">Monday, 16th of January</h2>
			<h2 id="time">08:30am</h2>
		</div>
		<hr/>
		<v-control-group></v-control-group>

		<!-- sample from : http://csscience.com/responsiveslidercss3/ -->
		<article id=slider>

			<!-- Slider Setup -->
			<input v-for="(slide, index) in slides" type="radio" name="slider" :id=slide.id :checked="index==current" v-on:click="updateCurrent"
			/>

			<!-- The Slider -->
			<v-touch id=slides @swipeleft="handleSwipeleft" @swiperight="handleSwiperight">
				<div id=overflow>
					<div class=inner>
						<article v-for="slide in slides" v-on:click="showModal = true">
							<img :src=slide.src />
						</article>
					</div>
					<!-- .inner -->
				</div>
				<!-- #overflow -->
			</v-touch>
			<!-- #slides -->
		</article>
		<!-- #slider -->

		<!-- The Modal -->
		<transition name="fade">
			<div v-if="showModal" id="myModal" class="modal">

				<!-- Modal content -->
				<div class="modal-content">
					<span class="close" v-on:click="showModal = !showModal">&times;</span>
					<img :src=slides[current].modal width=100% height=auto/>
				</div>

			</div>
		</transition>
	</div>
</template>

<script>
	import Backbutton from './common/BackButton'
	import vControlGroup from './common/vControlGroup'

	export default {
		name: 'Home',
		components: {
			Backbutton,
			vControlGroup
		},
		data() {
			return {
				showModal: false,
				current: 0,
				slides: [
					{ id: 'slide1', src: './../../static/assets/images/test.jpg', modal: './../../static/assets/images/test.png' },
					{ id: 'slide2', src: './../../static/assets/images/MountainFortByBjzaba.png', modal: './../../static/assets/images/MountainFortByBjzaba.png' },
					{ id: 'slide3', src: './../../static/assets/images/MountainOutpostByBjzaba.png', modal: './../../static/assets/images/MountainOutpostByBjzaba.png' },
					{ id: 'slide4', src: './../../static/assets/images/CliffsByBjzaba.png', modal: './../../static/assets/images/CliffsByBjzaba.png' },
					{ id: 'slide5', src: './../../static/assets/images/HillFortByBjzaba.png', modal: './../../static/assets/images/HillFortByBjzaba.png' }
				]
			}
		},
		mounted: function () {
			var localAccess = this.handleSwipeleft;
			var lock = this.isModalShow;
			window.setInterval(function () {
				if (!lock()) {
					localAccess();
				}
			}, 5000);
		},
		methods: {
			updateCurrent: function (event) {
				for (var i = 0; i < this.slides.length; i++) {
					if (this.slides[i].id == event.target.id) {
						this.current = i;
					}
				}
			},
			handleSwipeleft: function () {
				if (this.current < this.slides.length - 1) {
					this.current++;
				} else {
					this.current = 0;
				}
			},
			handleSwiperight: function () {
				if (this.current > 0) {
					this.current--;
				} else {
					this.current = this.slides.length - 1;
				}
			},
			clickControl: function (event) {
				if (event.target.tagName !== 'LABEL') {
					this.showModal = true;
				}
			},
			isModalShow: function () {
				return this.showModal;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  padding-left: 5%;
  padding-right: 5%;
  height: 6em;
  line-height: 6em;
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

/*********/
/* MODAL */
/*********/

 /* The Modal (background) */
.modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

/* modal transition animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}


/**********/
/* SLIDER */
/**********/

label {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }

#slider {
  text-align: center;
  position: absolute;
  bottom: 0;
  max-height: 50%;
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
	/*display: block;
	max-width: 100%;
	max-height: 50%;*/
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

#slides {
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	box-shadow: 1px 1px 4px #666;
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

@media screen and (min-aspect-ratio: 1/1) {
	#slider {
  text-align: center;
  position: absolute;
  bottom: 0;
  max-height: 25%;
}
}
</style>
