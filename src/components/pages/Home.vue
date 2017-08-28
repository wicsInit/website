<template>
  <span>
    <v-card>
      <div data-v-325040ba="" class="landing card__media">
        <div
          class="card__media__background"
          style="background-image: url(/static/images/events/laptop.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat no-repeat;"
        >
        </div>
        <div class="card__media__content">
          <v-container class="mt-3" style="padding: 10px;">
            <v-layout row wrap style="margin: 0 auto; max-width: 900px;">
              <v-flex xs12 md6 class="mb-3" style="position: relative; min-height: 250px;">
                <wics-carousel>
                  <div class="wics-logo">
                    <v-card-media
                      src="/static/images/favicon.jpg"
                      height="40px"
                      class="center"
                      contain
                      absolute
                    ></v-card-media>
                  </div>
                </wics-carousel>
              </v-flex>
              <v-flex xs12 md6 class="mb-3">
                <wics-card width="md-6">
                  <v-flex xs12>
                    <h3 class="black--text mt-3">RYERSON WOMEN IN COMPUTER SCIENCE</h3>
                    <blockquote>
                      WiCS is a student group run by undergraduate
                      Computer Science students at Ryerson University.
                    </blockquote>
                  </v-flex>
                  <v-spacer slot="actions"></v-spacer>
                  <v-btn slot="actions" icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon slot="actions">
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon slot="actions">
                    <v-icon>share</v-icon>
                  </v-btn>
                </wics-card>
              </v-flex>
              <v-flex xs12 class="mb-3">
                <wics-card color="primary">
                  <v-flex xs12>
                    <h4 class="white--text">Who are we?</h4>
                    <blockquote class="dark mb-2">
                      Women in Computer Science (WiCS) is run by undergraduate students in the Computer Science program at Ryerson University. We want to provide a safe space and support for groups that are traditionally marginalized in the field of computer science.
                    </blockquote>
                  </v-flex>
                  <v-flex xs12>
                    <h4 class="white--text">Our goals</h4>
                    <blockquote class="dark">Our goal is to encourage current students to continue learning computer science with confidence; foster retention of women and marginalized individuals through mentoring. We want to bring students together allowing them to network and socialize through events and provide opportunities for students to network with women professionals in the industry. Recruiting is also a priority to get prospective students interested in going to the STEM field. </blockquote>
                  </v-flex>
                </wics-card>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
    </v-card>
  </span>
</template>

<script>
  import Card from '../general/cards/Card.vue'
  import Carousel from '../general/presentation/Carousel.vue'
  export default {
    components: {
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
  blockquote.dark {
    border-left: 5px solid white;
  }
  .center {
    margin: auto;
  }
  div.landing.card__media > div.card__media__background { margin: auto; }
</style>
