<template>
  <v-footer :fixed="footer.fixed">
    <span>{{ name }} 2017</span>
  </v-footer>
</template>

<script>
  export default {
    computed: {
      name () {
        return this.$store.getters.name
      },
      footer () {
        return this.$store.getters.footer
      }
    }
  }
</script>
