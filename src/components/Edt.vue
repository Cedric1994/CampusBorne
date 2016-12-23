<template>
<div>
  <h1 class="page-title">Emploi du temps</h1>
  <hr/>

  <button type="button"> << </button>
  8/11/2016
  <button type="button"> >> </button>
  <br/>

  <img src="./../../static/assets/images/Edt8.png" alt="Emploi du temps">

  <backbutton></backbutton>
  <div>
</div>
</template>

<script>
import Backbutton from './common/BackButton'

export default {
  name: 'Edt',
  components: {
    Backbutton
  }
}
</script>
