<template>
  <v-app dark>
    <wics-nav-drawer></wics-nav-drawer>
    <main>
      <router-view></router-view>
    </main>
    <wics-footer></wics-footer>
  </v-app>
</template>

<script>
  export default {
    components: {
      VToolbar,
      'wics-nav-drawer': NavDrawer,
      'wics-toolbar': Toolbar,
      'wics-footer': Footer
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
