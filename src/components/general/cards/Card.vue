<template>
  <v-card :class="card.body.backgroundColor" raised :style="cardStyle">
    <!-- Media passed via slot -->
    <slot name="media"></slot>
    <!-- Card body -->
    <v-card-title v-if="card.body">
      <v-container fluid style="margin: 0;">
        <!-- Body content passed via slot -->
        <slot></slot>
      </v-container>
    </v-card-title>
    <!-- Actions passed via slot -->
    <slot name="actions"></slot>
  </v-card>
</template>

<script>
  export default {
    computed: {
      // pad the bottom of the card with card actions height (52px) if actions is passed via props
      cardStyle () {
        return this.card.actions ? {'padding-bottom': '52px'} : {}
      }
    },
    props: {
      card: {
        type: Object,
        default: () => {
          return {}
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
