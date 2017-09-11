<template>
  <v-flex :class="data.flex">
    <v-card
      :class="cardBackgroundColor"
      raised :style="cardStyle"
      style="background-color: rgba(20, 20, 20, 0.8);"
      class="mb-2"
      :flat="data.flat"
    >
      <!-- Card media -->
      <wics-card-media :media="data.media"></wics-card-media>
      <!-- Media passed via slot -->
      <slot name="media"></slot>
      <!-- Card body -->
      <v-card-title v-if="data.body" :style="[cardBodyPadding]">
        <v-container fluid :style="[cardContainerPadding]">
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
  import componentConfig from '../../../data/componentConfig'
  import CardMedia from './CardMedia.vue'

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
      },
      cardBodyPadding () {
        return this.data.paddingBody ? {padding: this.data.paddingBody} : {}
      },
      cardContainerPadding () {
        return this.data.paddingContainer ? {padding: this.data.paddingContainer} : {}
      }
    },
    components: {
      [componentConfig.cardMedia]: CardMedia
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
  div.container {
    margin: 0;
  }
</style>
