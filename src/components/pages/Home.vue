<template>
  <v-card>
    <div class="landing card__media">
      <!-- Home background -->
      <div
        class="card__media__background"
        :style="backgroundStyle"
      >
      </div>
      <!-- Home container -->
      <div class="card__media__content" style="padding-top: 28px;">
        <v-container class="mt-5" style="padding: 4px;">
          <v-layout row wrap style="margin: 0 auto; max-width: 1000px;">
            <wics-date-countdown></wics-date-countdown>
            <!-- App banner -->
            <v-flex xs12 class="mb-3">
              <img
                slot="media"
                src="/static/images/team/2017/banner-small.jpg"
              >
            </v-flex>
            <!-- Home carousel -->
            <v-flex xs12 md6 class="carousel-container mb-2">
              <wics-carousel></wics-carousel>
            </v-flex>
            <!-- Home cards -->
            <wics-cards v-for="card in page.cards" :card="card" :key="card.body.title"></wics-cards>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-card>
</template>

<script>
  import Card from '../general/cards/Card.vue'
  import Cards from '../general/cards/Cards.vue'
  import Carousel from '../general/presentation/Carousel.vue'
  import DateCountdown from '../progress/DateCountdown.vue'
  import { mapGetters } from 'vuex'
  import componentConfig from '../../data/componentConfig'

  export default {
    data () {
      return {
        picker: null,
        backgroundSrc: '/static/images/slc-large-min-bright.jpg'
      }
    },
    computed: {
      ...mapGetters([
        'page'
      ]),
      backgroundStyle () {
        return {
          'background-image': 'url("' + this.backgroundSrc + '")',
          'background-size': 'cover',
          'background-position': 'center center',
          'background-repeat': 'no-repeat no-repeat'
        }
      }
    },
    components: {
      [componentConfig.cards]: Cards,
      [componentConfig.card]: Card,
      [componentConfig.carousel]: Carousel,
      [componentConfig.dateCountdown]: DateCountdown
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.card__media__background[data-v-2a9b787a]{
    opacity: 0.3;
  }
  .wics-logo-container {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    top: -20px;
    overflow: visible;
    left: 8px;
background-color: rgba(20, 20, 20, 0.5);
}
.card__media {
overflow: visible;
}
.landing {
min-height: 100vh;
}
.flex {
margin: 0;
}
.center {
margin: auto;
}
div.carousel-container {
position: relative;
min-height: 250px;
}
div.landing.card__media > div.card__media__background { margin: auto; }
</style>
