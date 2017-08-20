<template>
  <span>
    <v-card>
      <v-card-media
        src="/static/images/header.jpg"
        height="250px"
      >
        <v-card-media
          src="/static/images/logo.jpg"
          height="150px"
          contain
          absolute
          class="wics-logo"
        ></v-card-media>
      </v-card-media>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
          </v-flex>
          <v-flex xs12>
            <v-card-title>
              <h2>Home</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque tortor turpis, sollicitudin at tristique vel,
                rhoncus at libero. Nam vehicula sem vel placerat egestas.
                In hac habitasse platea dictumst. Pellentesque tincidunt
                dui eget tellus vulputate scelerisque. Suspendisse malesuada
                consequat urna at laoreet. Vestibulum et risus semper, aliquet
                diam eget, efficitur turpis. Duis lacus turpis, aliquet scelerisque
                mauris sit amet, tristique efficitur enim. In hac habitasse platea
                dictumst. Praesent tristique libero in mi pretium, non imperdiet leo
                aliquet. In eget felis tellus. Mauris sagittis augue non mauris
                ullamcorper,
              </blockquote>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </span>
</template>

<script>
  import Carousel from '../general/presentation/Carousel.vue'
  export default {
    components: {
      'wics-carousel': Carousel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wics-logo {
    position: absolute;
    display: block;
    width: 100px;
    height: 100px;
    bottom: 10px;
    left: 10px;
  }
</style>
