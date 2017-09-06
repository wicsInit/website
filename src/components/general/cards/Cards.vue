<template>
  <v-flex xs12 :class="card.body.flex" class="mb-3">
    <transition>
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
          <!-- Card body title -->
          <h3 class="mt-3" :class="[cardTitleColor]">{{ card.body.title }}</h3>
          <!-- Dynamic component for card components / body -->
          <component :is="component.tag" v-for="(component, index) in card.body.components" :key="index" :data="component.data"></component>
        </v-flex>
        <!-- Card actions -->
        <v-card-actions v-if="card.actions" :class="[cardActionsBackgroundColor]" slot="actions">
          <v-spacer></v-spacer>
          <!-- Card actions buttons -->
          <v-btn slot="actions" icon v-for="action in card.actions" :key="action.icon">
            <v-icon>{{ action.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </wics-card>
    </transition>
  </v-flex>
</template>

<script>
  import Card from './Card.vue'
  import List from '../lists/List.vue'
  import Alert from '../notification/Alert.vue'
  import BlockQuote from '../text/Blockquote.vue'

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
      'wics-card': Card,
      'wics-alert': Alert,
      'wics-blockquote': BlockQuote,
      'wics-list': List
    }
  }
</script>

<style scoped>
  ul.list--group:after {
    background-color: white;
  }
</style>
