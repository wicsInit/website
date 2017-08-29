<template>
  <v-footer :fixed="footer.fixed">
    <span>{{ page.name }} 2017</span>
  </v-footer>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'page',
        'footer'
      ])
    }
  }
</script>
