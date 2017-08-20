<template>
  <span>
    <v-card
      flat
    >
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
              <h3>RYERSON WOMEN IN COMPUTER SCIENCE</h3>
              <blockquote>
                WiCS is a student group run by undergraduate
Computer Science students at Ryerson University.
              </blockquote>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card class="info white--text" dark>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>
              <h3 class="white--text">Who are we?</h3>
              <blockquote class="dark mb-2">
                Women in Computer Science (WiCS) is run by undergraduate students in the Computer Science program at Ryerson University. We want to provide a safe space and support for groups that are traditionally marginalized in the field of computer science.
              </blockquote>
              <h3 class="white--text">Our goals</h3>
              <blockquote class="dark">Our goal is to encourage current students to continue learning computer science with confidence; foster retention of women and marginalized individuals through mentoring. We want to bring students together allowing them to network and socialize through events and provide opportunities for students to network with women professionals in the industry. Recruiting is also a priority to get prospective students interested in going to the STEM field. </blockquote>
            </v-card-title>
            <p class="text-xs-center">Joining is easy! Membership is free and the benefits are priceless! Send an email to wics@ryerson.ca and take advantage of the opportunities to come!</p>
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
  blockquote.dark {
    border-left: 5px solid white;
  }
</style>
