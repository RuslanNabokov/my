<template>
  <div id="app">
    <component  :is="layout" >
    </component>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import Empty from '@/layouts/Empty'
import Main from '@/layouts/Main'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'Main')
    }
  },
  components: {
    Empty,
    Main
  }
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/my.css";
</style>
