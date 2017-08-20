<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon @click.stop="drawer.model = !drawer.model" light v-if="drawer.type !== 'permanent'"></v-toolbar-side-icon>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    computed: {
      drawer () {
        return this.$store.getters.drawer
      }
    }
  }
</script>

<style scoped>
</style>
