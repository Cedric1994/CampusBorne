<template>
  <div>
    <h1 class="page-title">Salle de cours</h1>
    <hr />
    <div class="page-content">
      <classroom-overview classroom_name="E+130" :nb_students_inside="4" :charger="true" :projector="true"></classroom-overview>
      <classroom-overview classroom_name="E+131" :nb_students_inside="0" :charger="true" :projector="false"></classroom-overview>
      <classroom-overview classroom_name="O+302" :nb_students_inside="9" :charger="true" :projector="false"></classroom-overview>
    </div>
    <backbutton></backbutton>
  </div>

</template>

<script>
  import Backbutton from './common/BackButton'
  import ClassroomOverview from './common/ClassroomOverview'

  export default {
    name: 'FreeClassRoom',
    components: {
      Backbutton,
      ClassroomOverview
    }
  }
</script>

<style lang="scss" scoped>
</style>
