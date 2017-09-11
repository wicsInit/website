<template>
  <v-card>
    <div class="text-xs-center landing card__media">
      <div
        class="card__media__background"
        :style="backgroundStyle"
      >
      </div>
      <div class="card__media__content" style="padding-top: 28px;">
        <v-container class="mt-5" style="padding: 4px;">
          <div>
            <h1> Contact</h1>
          </div>
          <v-layout justify-space-around>
          <span class="group pa-2">
            <a href="https://www.facebook.com/ryersonwics?fref=ts"><v-icon x-large>fa-facebook</v-icon></a>
            <v-icon x-large>fa-twitter</v-icon>
            <v-icon x-large>fa-instagram</v-icon>
            <v-icon x-large>fa-envelope</v-icon>
            <a href="https://ca.linkedin.com/company/ryersonwics"><v-icon x-large>fa-linkedin</v-icon></a>
          </span>
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
  import { mapGetters } from 'vuex'
  import componentConfig from '../../data/componentConfig'

  export default {
    mounted () {
      var elements = document.getElementsByTagName('main')
      elements[0].style['padding-top'] = '0px'
    },
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


<style scoped>
  .landing {
    min-height: 100vh;
  }

  .title{
    position: absolute;
    top: 5%;
    text-align: center;
  }

  .fa-envelope:before{
    font-size: 400%;
    color: black;
    margin: 2%;
  }
  .fa-facebook:before{
    font-size: 400%;
    color: darkblue;
    margin: 2%;
  }
  .fa-twitter:before{
    font-size: 400%;
    color: deepskyblue;
    margin: 2%;
  }
  .fa-linkedin:before{
    font-size: 400%;
    color: royalblue;
    margin: 2%;
  }
  .fa-instagram:before{
    font-size: 400%;
    color: rebeccapurple;
    margin: 2%;
  }
</style>
