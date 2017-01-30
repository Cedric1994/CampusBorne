<template lang="jade">
  article(@click="toggleFullScreen", :class="{ 'active': isActive }")
    img(:src="illustration", alt="Article illustration")
    .text
      h1="{{title}}"
      .description(v-for="description in descriptionList")="{{description}}"
</template>

<script>
  export default {
    name: 'v-article-card',
    data () {
      return {
        isActive: false
      }
    },
    props: {
      title: String,
      illustration: String,
      descriptionList: Array
    },
    methods: {
      toggleFullScreen: function () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="scss" scoped>

  $illustration-height: 220px;

  article {
    display: inline-block;
    width: 80%;
    height: 90%;
    margin: 0 15px 0 15px;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);
    background-color: white;

    &.active {
      position: fixed;
      z-index: 3;
      margin: 10%;
      top: 0px;
      left: 0;
      height: 85%;
      outline: 300px solid white;
    }

    &:first-child {
      margin-left: 10%;
    }

    &:last-child {
      margin-right: 10%;
    }
  }

  img {
    width: 100%;
    height: $illustration-height;
  }

  h1 {
    margin: 20px 0 20px 40px;
  }

  .text {
    padding: 0 20px;
    text-align: justify;
    user-select: none;
    white-space: normal;
    overflow: auto;
    height: calc(100% - 250px);
  }

  .description {
    margin-bottom: 10px;
  }

</style>
