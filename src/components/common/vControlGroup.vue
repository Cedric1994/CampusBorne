<template lang="jade">
  .wrapper
    .btn-group.home(v-show="displayHome")
      a.destination(@click="switchView")
        v-icon(name="location-arrow", size="4")
        .title="Find destination"
      router-link.room(to="FreeClassRoom")
        v-icon(name="book", size="4")
        .title="Free class room"
      router-link.schedule(to="Edt")
        v-icon(name="table", size="4")
        .title="My schedule"
    .destination-group(v-show="!displayHome")
      a.back-button(@click="switchView")=" < Back"
      .btn-group
        router-link.teacher(to="FindDestination/Teacher")
          v-icon(name="graduation-cap", size="4")
          .title="Teacher office"
        router-link.administrative(to="FindDestination/Administration")
          v-icon(name="envelope-open", size="4")
          .title="Administrative office"
        router-link.class-room(to="FindDestination/Class")
          v-icon(name="pencil", size="4")
          .title="Class room"
</template>

<script>
  export default {
    name: 'v-control-group',
    data () {
      return {
        displayHome: true
      }
    },
    methods: {
      switchView: function () {
        this.displayHome = !this.displayHome
      }
    }
  }
</script>

<style lang="scss" src="../../styles/transition.scss"></style>
<style lang="scss" scoped>

  $margin-top: 20px;
  $back-button-height: 40px;

  .wrapper {
    margin-top: $margin-top;
  }

  .btn-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  }

  .title {
    color: black;
  }

  .destination i { background-color: #ea6363; }
  .room i { background-color: #97ec86; }
  .schedule i { background-color: #af88f1; }
  .teacher i { background-color: #a92b2b; }
  .administrative i { background-color: #733137; }
  .class-room i { background-color: #e88611; }

  i {
    position: relative;
    height: 160px;
    width: 160px;
    color: white;

    &:before {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }

  .home {
    padding-top: $back-button-height;
  }

  .back-button{
      display: inline-block;
      font-size: 25px;
      color: lighten(black, 20%);
      width: 100%;
      height: $back-button-height;
      margin-left: 20px;
  }
</style>
