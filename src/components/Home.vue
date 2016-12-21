<template>
<div>
  <header class="navbar navbar-static-top">
    <div class="container">
      <nav style="padding:20px" class="collapse navbar-collapse">
        <h2 class="nav navbar-nav" id="date">Mardi 8 Novembre 2016</h2>
        <h2 class="nav navbar-nav navbar-right" id="time">10:30</h2>
      </nav>
    </div>
    <hr style="margin-top:0px"/>
  </header>

  Page d'acceuil de la borne :)

  <button class="btn btn-primary" type="button" onclick="myFunction()">Hello</button>
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog" style="width:100%; height:100%; margin:0%;">
        <!-- Modal content-->
        <div class="modal-content" style="width:100%; height:100%;" data-dismiss="modal">
          <!--<div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>-->
        <img src="./../assets/idle1.jpg"/>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
