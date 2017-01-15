<template lang="jade">
  i(:class="iconClass", :title="title")
</template>

<script>
  export default {
    name: 'v-icon',
    props: {
      name: {
        required: true,
        type: String
      },
      title: String,
      size: String
    },
    data () {
      return {
        iconClass: String
      }
    },
    created: function () {
      this.iconClass = 'fa fa-' + this.name
      if (this.size) { this.iconClass += ' fa-' + this.size + 'x' }
    }
  }
</script>

<style lang="scss" src="../../../node_modules/font-awesome/scss/font-awesome.scss" scoped></style>
