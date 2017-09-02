<template>
  <v-card :class="card.body.backgroundColor" raised :style="cardStyle">
    <slot name="media"></slot>
    <v-card-title>
      <v-container fluid style="margin: 0;">
        <slot></slot>
      </v-container>
    </v-card-title>
    <slot name="actions"></slot>
  </v-card>
</template>

<script>
  export default {
    computed: {
      cardStyle () {
        return this.card.actions ? {'padding-bottom': '52px'} : {}
      }
    },
    props: {
      card: {
        type: Object,
        default: () => {
          return { body: { backgroundColor: 'accent' } }
        }
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
