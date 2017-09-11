<template>
  <v-toolbar
    fixed
    :style="scroll < 50 ? 'background-color: rgba(20, 20, 20, 0.5)' || 'white': ''"
  >
    <v-toolbar-side-icon
      @click.stop="drawer.model = !drawer.model"
      light
      v-if="drawer.type !== 'permanent'"
      v-bind="toolbarSideIcon"
    ></v-toolbar-side-icon>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        threshold: 80
      }
    },
    computed: {
      ...mapGetters([
        'drawer',
        'scroll',
        'page'
      ]),
      toolbarBackgroundColor () {
        console.log(this.scroll)
        return this.scroll < this.threshold ? {'background-color': 'rgba(20, 20, 20, 0.5)', color: 'white'} : {}
      },
      toolbarSideIcon () {
        if (this.page.toolbarBackgroundColor) {
          return this.scroll < this.threshold ? [{dark: true}] : [{dark: false}]
        } else {
          console.log('no toolbar color')
          return {dark: true}
        }
      }
    },
    created () {
      if (!this.page) {
        this.page = {}
      }
    }
  }
</script>

<style scoped>
  nav.toolbar {
    -webkit-transition: color 1s, background-color 1s;
    transition: color 1s, background-color 1s;
  }
</style>
