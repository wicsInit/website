<template>
  <span>
    <v-card>
      <v-card-media
        src="/static/images/header.jpg"
        height="250px"
      >
        <div class="wics-logo">

          <v-card-media
            src="/static/images/logo.jpg"
            height="100px"
            class="logo-icon"
            contain
            absolute
          ></v-card-media>
        </div>
        <v-card-media
          src="/static/images/favicon.jpg"
          height="100px"
          contain
          absolute
          class="wics-logo"
        ></v-card-media>

      </v-card-media>
      <v-card-title>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <h3 class="black--text mt-3">RYERSON WOMEN IN COMPUTER SCIENCE</h3>
              <blockquote>
                WiCS is a student group run by undergraduate
Computer Science students at Ryerson University.
              </blockquote>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
    </v-card>
    <v-card class="primary white--text" dark>
      <v-card-title>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <h3 class="white--text">Who are we?</h3>
              <blockquote class="dark mb-2">
                Women in Computer Science (WiCS) is run by undergraduate students in the Computer Science program at Ryerson University. We want to provide a safe space and support for groups that are traditionally marginalized in the field of computer science.
              </blockquote>
            </v-flex>
            <v-flex xs12 md6>
              <h3 class="white--text">Our goals</h3>
              <blockquote class="dark">Our goal is to encourage current students to continue learning computer science with confidence; foster retention of women and marginalized individuals through mentoring. We want to bring students together allowing them to network and socialize through events and provide opportunities for students to network with women professionals in the industry. Recruiting is also a priority to get prospective students interested in going to the STEM field. </blockquote>
            </v-flex>
          </v-layout>
          <p class="text-xs-center mt-4">Joining is easy! Membership is free and the benefits are priceless! Send an email to wics@ryerson.ca and take advantage of the opportunities to come!</p>
        </v-container>
      </v-card-title>
    </v-card>
    <v-card class="amber --darken-1 white--text" dark>
      <v-card-title>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <h3 class="white--text">Events</h3>
            </v-flex>
            <v-flex xs12>
              <wics-carousel></wics-carousel>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
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
    bottom: -45px;
    overflow: visible;
    left: calc(50% - 50px);
  }
  .card__media {
    overflow: visible;
  }
  blockquote.dark {
    border-left: 5px solid white;
  }
</style>
