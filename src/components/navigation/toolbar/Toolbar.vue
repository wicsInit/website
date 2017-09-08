<template>
  <v-toolbar fixed style="" dense style="background-color: rgba(20,20,20, 0.8);">
    <v-toolbar-side-icon @click.stop="drawer.model = !drawer.model" light v-if="drawer.type !== 'permanent'" style=" color:white">
    </v-toolbar-side-icon>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'drawer'
      ])
    }
  }
</script>

<style scoped>
  nav.toolbar {
    z-index: 900;
  }
</style>
