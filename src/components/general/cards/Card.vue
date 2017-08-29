<template>
  <v-card :class="card.body.backgroundColor" raised :style="cardStyle">
    <slot name="media"></slot>
    <v-card-title>
      <v-container fluid style="margin: 0;">
        <v-layout row wrap>
          <slot></slot>
        </v-layout>
      </v-container>
    </v-card-title>
    <slot name="actions"></slot>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      cardStyle () {
        return this.card.actions ? {'padding-bottom': '52px'} : {}
      }
    },
    props: {
      card: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  div.card__actions {
    height: 52px;
    position: absolute; bottom: 0; width: 100%;
  }
</style>
