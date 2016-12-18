<template>
<div>
  <h1 class="page-title">Salles Disponibles </h1>
  <hr/>

  <div class="container-btn">
    <a class="button">O+301</a>
    <a class="button">E+135</a>
    <a class="button">E+141</a>
  </div>

  <backbutton redirection-path=""></backbutton>
</div>
</template>

<script>
import Backbutton from './common/BackButton'

export default {
  name: 'FreeClassRoom',
  components: {
    Backbutton
  }
}
</script>

<style scoped>
	time {
		font-family: serif;
		font-size: 25px;
	}

	.center {
		text-align: center;
	}

	.title {
		font-family: serif;
	}

	.window {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
		margin-bottom: 20px;
		width: 80%;

	}
</style>
