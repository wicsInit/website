<template>
  <v-alert :class="data.type" value="true">{{ data.alert }}</v-alert>
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
