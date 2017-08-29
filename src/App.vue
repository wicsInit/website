<template>
  <v-app light>
    <wics-nav-drawer></wics-nav-drawer>
    <wics-toolbar></wics-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <wics-footer></wics-footer>
  </v-app>
</template>

<script>
  import NavDrawer from './components/navigation/drawer/drawer.vue'
  import Toolbar from './components/navigation/toolbar/Toolbar.vue'
  import Footer from './components/navigation/footer/Footer.vue'

  export default {
    components: {
      'wics-nav-drawer': NavDrawer,
      'wics-toolbar': Toolbar,
      'wics-footer': Footer
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
