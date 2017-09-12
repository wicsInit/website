<template>
  <v-app light toolbar>
    <wics-loading v-if="loading"></wics-loading>
    <wics-nav-drawer></wics-nav-drawer>
    <wics-toolbar></wics-toolbar>
    <main v-scroll.lazy="setScroll" style="padding-top: 0px;">
      <router-view></router-view>
    </main>
    <wics-footer></wics-footer>
  </v-app>
</template>

<script>
  import Loading from './components/progress/Loading.vue'
  import NavDrawer from './components/navigation/drawer/drawer.vue'
  import Toolbar from './components/navigation/toolbar/Toolbar.vue'
  import Footer from './components/navigation/footer/Footer.vue'
  import componentConfig from './data/componentConfig'
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    components: {
      [componentConfig.navDrawer]: NavDrawer,
      [componentConfig.toolbar]: Toolbar,
      [componentConfig.footer]: Footer,
      [componentConfig.loading]: Loading
    },
    computed: {
      ...mapGetters(['loading'])
    },
    methods: {
      ...mapMutations(['setScroll'])
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
