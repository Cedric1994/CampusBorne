<template lang="jade">
	.page
		.header
			h2#date="{{date}}"
			h2#time="{{time}}"
		hr
		v-control-group
		.news
			v-article-card(v-for="article in articles", :title="article.title", :illustration="article.illustration", :descriptionList="article.descriptionList")
</template>

<script>
	import Backbutton from './common/BackButton'
	import vControlGroup from './common/vControlGroup'
	import vArticleCard from './common/vArticleCard'

	export default {
		name: 'Home',
		components: {
			Backbutton,
			vControlGroup,
			vArticleCard
		},
		data() {
			return {
				oDate: Object,
				articles: [{
							title: 'Polytech ouvre ses portes !',
 							illustration: './../../static/assets/images/jpo.png',
							descriptionList: ['- 9h30 : Présentation de l’école, Cycle Initiale Polytechnique et du concours Geipi-Polytech Par Anne VIGOUROUX, Directrice du Cycle Initiale Polytech (Amphi 1) durée 1h',
											'- 9h45 : Qu’est ce que le métier de l’Ingénieur et du scientifique Par L\'Union Régionale des Ingénieurs et Scientifiques de la Côte d\'Azur (Amphi 2) durée 1h',
										 	'- 11h00 : Présentation de l’école, Cycle Initiale Polytechnique et du concours Geipi-Polytech Par Anne VIGOUROUX, Directrice du Cycle Initiale Polytech (Amphi 1) durée 1h',
											'- 11h15 : Qu’est ce que le métier de l’Ingénieur et du scientifique Par L\'Union Régionale des Ingénieurs et Scientifiques de la Côte d\'Azur (Amphi 2) durée 1h ',
											'- 13h30 : Présentation de l’école, Cycle Initiale Polytechnique et du concours Geipi-Polytech Par Anne VIGOUROUX, Directrice du Cycle Initiale Polytech (Amphi 1) durée 1h',
											'- 13h45 : Qu’est ce que le métier de l’Ingénieur et du scientifique Par L\'Union Régionale des Ingénieurs et Scientifiques de la Côte d\'Azur (Amphi 2) durée 1h',
											'- 15h00 : Présentation de l’école, Cycle Initiale Polytechnique et du concours Geipi-Polytech Par Anne VIGOUROUX, Directrice du Cycle Initiale Polytech (Amphi 1) durée 1h',
											'- 15h15 : Qu’est ce que le métier de l’Ingénieur et du scientifique Par L\'Union Régionale des Ingénieurs et Scientifiques de la Côte d\'Azur (Amphi 2) durée 1h',
											'- 9h à 17h : Découverte des spécialités (Toute la journée dans les salles de l’école)',
											'- 17h : Clôture']},
						{
							title: 'Retard pour les trains régionaux',
							illustration: './../../static/assets/images/Train.PNG',
							descriptionList: ['Un arbre est tombé sur une installation électrique entre Carnoules et Les Arcs dans le Var. La circulation a dû être interrompue pendant trois heures ce mercredi dans le sens Toulon - Nice. A 18h30, le trafic reprenait. 8 trains ont été retardés et 5 supprimés.']},
						{
							title: 'Fromule malin à 2€',
							illustration: './../../static/assets/images/ru.PNG',
							descriptionList: ['Les pâtes mal cuites. Les pâtes ont du mal à passer car leur cuisson s\'avère mal maîtrisée. Elles cuisent par quantité de 40 kg dans une marmite, la cuisson s\'achevant dans une armoire dont la température s\'élève à 70°. Difficile dans ces conditions d\'obtenir des tortellini al dente. Toutefois, « on va essayer de trouver une solution ».',
																'Trop d\'étudiants ignorent que les RU préparent des produits frais. Ils pensent qu\'ils mangent du surgelé. Or le « fait maison » concerne 90 % des plats réalisés. Le signaler s\'avère indispensable. La communication va s\'en charger. Les informations sur la composition des plats (présence d\'allergène, de porc…) se révèlent également insuffisantes. « Il faut que nous informatisions ces données. C\'est une priorité. La loi l\'exige. » ']
						}
				]
			}
		},
		computed: {
			time: function () {
				return this.oDate.getHours() + ':' + ('0' + this.oDate.getMinutes()).slice(-2)
			},
			date: function () {
				return this.oDate.getDate() + 'th of ' + this.oDate.toLocaleString("en-us", { month: "long" }) + ' ' + this.oDate.getFullYear()
			}
		},
		created: function () {
			this.oDate = new Date();
		},
		methods: {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.page {
		position: relative;
		height: 100%;
		width: 100%;
	}
	.header {
	  padding-left: 5%;
	  padding-right: 5%;
	  height: 6em;
	  line-height: 6em;
	  white-space: nowrap;
		background-color: white;
	}

	#date {
	  float: left;
	  margin: 0;
	}

	#time {
	  float: right;
	  margin: 0;
	}

	.news {
		position: absolute;
		bottom: 0;
		height: 60%;
		width: 100%;
		white-space: nowrap;
		overflow-y: auto;
	}
</style>
