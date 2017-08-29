<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon @click.stop="drawer.model = !drawer.model" light v-if="drawer.type !== 'permanent'"></v-toolbar-side-icon>
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
