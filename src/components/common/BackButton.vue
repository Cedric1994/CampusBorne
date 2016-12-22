<template lang="jade">
div
  .return-button-div
    button.return-button(v-on:click="goBack") Retour
</template>

<script>
export default {
  name: 'Backbutton',
  methods: {
    goBack: function() {
      window.history.back();
    }
  }
}
</script>

<style lang="scss" scoped>

$button-background-color: #0d5287;
$button-background-color-hover: #0585e8;

.return-button-div{
  position: absolute;
	bottom: 90px;
  left: 80px;
}

.return-button {
	position: relative;
  text-decoration: none;
  background: $button-background-color;
  color: white;
  font-size: 24px;
  padding: 18.8px 29px 25px 25px;
	margin: 0;

  &:hover {
    background: $button-background-color-hover;
  }

  &::after {
    position: absolute;
    border-color: transparent $button-background-color transparent transparent;
    content: '';
    top: 0;
    width: 0;
    height: 0;
    left: -74px;
    border-width: 37px;
    border-style: solid;
  }

  &:hover::after {
    border-right-color: $button-background-color-hover;
  }
}
</style>
