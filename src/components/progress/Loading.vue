<template>
  <v-progress-linear primary :indeterminate="true" style="position: fixed; margin: 0; z-index: 9000;"></v-progress-linear>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['loading'])
    }
  }
</script>

<style scoped>
</style>
