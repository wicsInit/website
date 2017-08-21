<template>
  <span>
    <v-card>
      <v-card-media
        src="/static/images/events/laptop.jpg"
        height="100%"
        class="landing"
      >
        <v-container >
          <v-layout >
            <v-flex xs12 md6>
              <wics-carousel class="mt-3">
                <div class="wics-logo">
                  <v-card-media
                    src="/static/images/favicon.jpg"
                    height="40px"
                    contain
                    absolute
                  ></v-card-media>
                </div>
              </wics-carousel>
            </v-flex>
          </v-layout>
        </v-container>
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
    /* min-height: 100vh; */
  }
  blockquote.dark {
    border-left: 5px solid white;
  }
</style>
