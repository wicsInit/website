<template>
  <v-flex :class="data.flex">
    <v-card :class="cardBackgroundColor" raised :style="cardStyle" style="background-color: rgba(20, 20, 20, 0.8);" class="mb-2">
      <!-- Card media -->
      <v-card-media
        v-if="data.media"
        :src="data.media.src"
        height="250px"
        class="center"
        absolute
        slot="media"
        @mouseover="data.media.hoverOver()"
        @mouseleave="data.media.model = false"
      >
        <div
          style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(20, 20, 20, 0.7); text-align: center;"
          v-if="data.media.model"
        >
          <v-container>
            <h5
              v-if="data.media.content && data.media.content.title"
              class="white--text"
              style="margin: auto 0;"
            >{{ data.media.content.title }}</h5>
            <p
              v-if="data.media.content && data.media.content.p"
              class="white--text"
              style="margin: auto 0;"
            >{{ data.media.content.p }}</p>
          </v-container>
        </div>
      </v-card-media>
      <!-- Media passed via slot -->
      <slot name="media"></slot>
      <!-- Card body -->
      <v-card-title v-if="data.body">
        <v-container fluid style="margin: 0;" :style="[cardBodyPadding]">
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
      },
      cardBodyPadding () {
        return this.data.padding ? {padding: this.data.padding} : {}
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
