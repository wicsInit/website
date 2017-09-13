<template>
  <v-toolbar
    fixed
    :style="[toolbarBackgroundColor]"
  >
    <v-toolbar-side-icon
      light
      @click.stop="toggleNavDrawer"
      v-if="showToolbarSideIcon"
      v-bind="toolbarSideIconColor"
    ></v-toolbar-side-icon>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        threshold: 100
      }
    },
    computed: {
      ...mapGetters([
        'drawer',
        'scroll'
      ]),
      toolbarBackgroundColor () {
        return this.scroll < this.threshold ? {'background-color': 'rgba(20, 20, 20, 0.5)', color: 'white'} : {}
      },
      toolbarSideIconColor () {
        return this.scroll < this.threshold ? [{dark: true}] : [{dark: false}]
      },
      showToolbarSideIcon () {
        return this.drawer.type !== 'permanent'
      }
    },
    methods: {
      toggleNavDrawer () {
        if (this.drawer) {
          this.drawer.model = !this.drawer.model
        } else {
          // error drawer prop was not provided
          alert('Application error drawer data not provided! Try reloading the page.')
        }
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
