<template>
  <v-app light toolbar>
    <wics-loading v-if="loading"></wics-loading>
    <wics-nav-drawer></wics-nav-drawer>
    <wics-toolbar></wics-toolbar>
    <main v-scroll.lazy="setScroll" style="padding-top: 0px;">
      <wics-alert
        v-if="currentEvents.model"
        style="
         position: fixed;
         top: 84px;
         left: 20px;
         right: 20px;
         z-index: 1000;
        "
      >
        {{ currentEvents.alert }}
      </wics-alert>
      <router-view></router-view>
    </main>
    <wics-footer></wics-footer>
  </v-app>
</template>

<script>
  import Alert from './components/general/notification/Alert.vue'
  import Loading from './components/progress/Loading.vue'
  import NavDrawer from './components/navigation/drawer/drawer.vue'
  import Toolbar from './components/navigation/toolbar/Toolbar.vue'
  import Footer from './components/navigation/footer/Footer.vue'
  import componentConfig from './data/componentConfig'
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    components: {
      [componentConfig.alert]: Alert,
      [componentConfig.navDrawer]: NavDrawer,
      [componentConfig.toolbar]: Toolbar,
      [componentConfig.footer]: Footer,
      [componentConfig.loading]: Loading
    },
    computed: {
      ...mapGetters(['loading', 'currentEvents'])
    },
    methods: {
      ...mapMutations(['setScroll'])
    },
    mounted () {
      setTimeout(() => {
        this.currentEvents.model = false
      }, 5000)
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
