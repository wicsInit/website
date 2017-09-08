<template>
  <v-alert
    v-if="data"
    v-bind="alertType"
    value="true"
  >{{ data.alert }}</v-alert>
</template>

<script>
  export default {
    props: {
      data: {
        type: [Object],
        required: true
      }
    },
    computed: {
      alertType () {
        return this.data.type ? {[this.data.type]: true} : {info: true}
      }
    }
  }
</script>
