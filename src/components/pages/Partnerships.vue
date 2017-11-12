<template>

  <v-card>
    <div class="landing card__media" style>
      <!-- Home background -->
      <div
        class="card__media__background"
        :style="backgroundStyle"
      >
        <template>
          <v-layout style="margin-top: 170px;">
            <v-flex v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" offset-sm3>
              <v-card>
                <v-card-media :src="card.src" alt="Studypool" height="200px" contain>
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ card.title }}</h3>
                    <div><a v-bind:href="url">Studypool</a> is an online marketplace that connects students with questions with tutors who can answer them. Using <a v-bind:href="url">Studypool</a> gives you access to thousands of verified tutors to help you with any question at any time.</div>
                  </div>
                </v-card-title>
                <!--<v-card-actions>-->
                  <!--<v-btn flat class="orange&#45;&#45;text">Share</v-btn>-->
                  <!--<v-btn flat class="orange&#45;&#45;text">Explore</v-btn>-->
                <!--</v-card-actions>-->
              </v-card>
            </v-flex>
          </v-layout>
        </template>
      </div>
    </div>
  </v-card>
</template>

<script>
  import Card from '../general/cards/Card.vue'
  import Cards from '../general/cards/Cards.vue'
  import Carousel from '../general/presentation/Carousel.vue'
  import { mapGetters } from 'vuex'
  import componentConfig from '../../data/componentConfig'
  export default {
    data () {
      return {
        url: 'https://www.studypool.com',
        card: { title: 'Sponsorships', src: 'static/images/Studypool.png', flex: 6, blex: 12 },
        backgroundSrc: '/static/images/slc-large-min-bright.jpg',
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    },
    methods: {
    },
    computed: {
      ...mapGetters([
        'page'
      ]),
      backgroundStyle () {
        return {
          'background-image': 'url("' + this.backgroundSrc + '")',
          'background-size': 'cover',
          'background-position': 'center unset',
          'background-repeat': 'no-repeat no-repeat'
        }
      }
    },
    components: {
      [componentConfig.cards]: Cards,
      [componentConfig.card]: Card,
      [componentConfig.carousel]: Carousel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

  .title{
    font-size: 50px;
    color: white;
  }

  .back{
    background-color: #00BFFF;
    background: #3e6989;
    text-align: center;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    border-radius: 5px;
    color: #ffffff;
    margin-bottom: 5px;
    opacity: 0.5;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
