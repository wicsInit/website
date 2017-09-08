<template>
  <v-toolbar
    fixed
    :style="scroll < 50 ? 'background-color: rgba(20, 20, 20, 0.5)': ''"
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
        'scroll'
      ]),
      toolbarBackgroundColor () {
        console.log(this.scroll)
        return this.scroll < this.threshold ? {'background-color': 'rgba(20, 20, 20, 0.5)', color: 'white'} : {}
      },
      toolbarSideIcon () {
        return this.scroll < this.threshold ? [{dark: true}] : [{dark: false}]
      }
    }
  }
</script>

<style scoped>
  nav.toolbar {
    z-index: 900;
  }
</style>
