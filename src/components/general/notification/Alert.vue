<template>
  <v-alert
    v-bind="alertType"
    value="true"
  >
    {{ alertText }}
    <slot></slot>
  </v-alert>
</template>

<script>
  export default {
    props: {
      data: {
        type: [Object]
      }
    },
    computed: {
      alertType () {
        var base = {info: true}
        if (this.data) {
          return this.data.type ? {[this.data.type]: true} : base
        } else {
          return base
        }
      },
      alertText () {
        return this.data ? this.data.alert : ''
      }
    }
  }
</script>

<style scoped>
  div.alert {
    transition: background-color 1s ease-in;
  }
</style>
