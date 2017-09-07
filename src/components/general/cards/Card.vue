<template>
  <v-flex :class="data.flex">
    <v-card :class="cardBackgroundColor" raised :style="cardStyle" style="background-color: rgba(20, 20, 20, 0.8);">
      <!-- Card media -->
      <v-card-media
        v-if="data.media"
        :src="data.media.src"
        height="250px"
        class="center"
        absolute
        slot="media"
      ></v-card-media>
      <!-- Media passed via slot -->
      <slot name="media"></slot>
      <!-- Card body -->
      <v-card-title v-if="data.body">
        <v-container fluid style="margin: 0;">
          <!-- Body content passed via slot -->
          <slot></slot>
        </v-container>
      </v-card-title>
      <!-- Actions passed via slot -->
      <slot name="actions"></slot>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    computed: {
      // pad the bottom of the card with card actions height (52px) if actions is passed via props
      cardStyle () {
        return this.data.actions ? {'padding-bottom': '52px'} : {}
      },
      cardBackgroundColor () {
        if (this.data.body) {
          return this.data.backgroundColor || this.data.body.backgroundColor || 'white'
        }
      }
    },
    props: {
      data: {
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
