<template>

  <v-card>
    <div data-v-325040ba="" class="landing card__media">
      <!-- Home background -->
      <div
        class="card__media__background"
        :style="backgroundStyle"
      >
      </div>
      <div class="card__media__content">
        <v-container class="mt-3" style="padding: 10px;">
          <v-layout row wrap style="margin: 0 auto; max-width: 850px;">
            <!-- Home carousel -->
            <v-flex xs12 md6 class="mb-3" style="position: relative; min-height: 250px;">
              <wics-carousel>
                <div class="wics-logo">
                  <v-card-media
                    src="/static/images/logo-white.png"
                    height="40"
                    class="center"
                    contain
                    absolute
                  ></v-card-media>
                </div>
              </wics-carousel>
            </v-flex>
            <!-- Home cards -->
            <wics-cards v-for="card in page.cards" :card="card"></wics-cards>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Card from '../general/cards/Card.vue'
  import Cards from '../general/cards/Cards.vue'
  import Carousel from '../general/presentation/Carousel.vue'

  export default {
    data () {
      return {
        backgroundSrc: '/static/images/slc-large-min.jpg'
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
      'wics-cards': Cards,
      'wics-card': Card,
      'wics-carousel': Carousel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wics-logo {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    top: -20px;
    overflow: visible;
    left: 8px;
    z-index: 10;
  }
  .card__media {
    overflow: visible;
  }
  .landing {
    min-height: 100vh;
  }
  .center {
    margin: auto;
  }
  div.landing.card__media > div.card__media__background { margin: auto; }
</style>
