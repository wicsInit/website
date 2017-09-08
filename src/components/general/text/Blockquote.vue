<template>
  <blockquote :class="data.color" v-if="data">
    {{ data.text }}
  </blockquote>
</template>

<script>
  export default {
    props: {
      data: {
        type: [Object]
      }
    }
  }
</script>

<style scoped>
  blockquote.white--text {
    border-left: 5px solid white;
  }
</style>
