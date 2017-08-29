<template>
  <v-flex xs12 :class="card.body.flex" class="mb-3">
    <wics-card :card="card">
      <!-- Card media -->
      <v-card-media
        v-if="card.media"
        :src="card.media.src"
        height="250px"
        class="center"
        absolute
        slot="media"
      ></v-card-media>
      <!-- Card body -->
      <v-flex xs12>
        <h3 class="mt-3" :class="[cardTitleColor]">{{ card.body.title }}</h3>
        <blockquote :class="card.body.color">
          {{ card.body.blockquote }}
        </blockquote>
      </v-flex>
      <!-- Card actions -->
      <v-card-actions v-if="card.actions" :class="[cardActionsBackgroundColor]" slot="actions">
        <v-spacer></v-spacer>
        <v-btn slot="actions" icon v-for="action in card.actions">
          <v-icon>{{ action.icon }}</v-icon>
        </v-btn>
      </v-card-actions>
    </wics-card>
  </v-flex>
</template>

<script>
  import Card from './Card.vue'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'page'
      ]),
      cardTitleColor () {
        return this.card.body.color || 'black--text'
      },
      cardActionsBackgroundColor () {
        return (this.card.body.backgroundColor || 'accent') + '--darken-2'
      }
    },
    props: {
      card: {
        required: true,
        type: Object
      }
    },
    components: {
      'wics-card': Card
    }
  }
</script>

<style scoped>
  blockquote.white--text {
    border-left: 5px solid white;
  }
</style>
