<template>

  <v-card>
    <div class="landing card__media">
      <!-- Home background -->
      <div
        class="card__media__background"
        :style="backgroundStyle"
      >
      </div>
      <template>
        <v-tabs dark fixed centered style="margin-top: 70px;">
          <v-tabs-bar slot="activators" class="cyan lighten-2">
            <v-tabs-slider class="yellow"></v-tabs-slider>
            <v-tabs-item
              v-for="i in items"
              :key="i"
              :href="'#tab-' + i"
            >
              {{ i }}
            </v-tabs-item>
          </v-tabs-bar>
          <v-tabs-content
            :id="'tab-' + 'Upcoming Events'"
          >
            <v-card-text>
              <v-layout column>
                <v-flex xs12 sm6 offset-sm3>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card7" :key="card.title">
                        <v-card>
                          <v-card-media :src="card.src" @click.native.stop="dialog2=true" height="200px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <!--<v-dialog width="1000px" v-model="dialog2" lazy absolute>-->
                                    <!--<v-card>-->
                                      <!--<v-carousel @click.native.stop="dialog2=true">-->
                                        <!--<v-carousel-item v-for="(item2,i) in items2" v-bind:src="item2.src" @click.native.stop="dialog2=true" :key="i"></v-carousel-item>-->
                                      <!--</v-carousel>-->
                                    <!--</v-card>-->
                                  <!--</v-dialog>-->
                                  <!--<span class="headline white--text" v-text="card.title"></span>-->
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                          <v-card-title>
                            <div>
                              <span>Holiday Party</span><br>
                              <span>Date: <span class="grey--text">Decemeber 15th</span></span><br>
                              <span>Location: <span class="grey--text">TBA</span></span><br>
                              <!--<span>Description: <span class="grey&#45;&#45;text">Midterms Can be stressful, let's be stressed together. Join WiCS for a cookies and cram session. Enjoy some comfort food while cramming for those dreadful midterms.</span></span><br>-->
                            </div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                      <!--<v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card6" :key="card.title">-->
                        <!--<v-card>-->
                          <!--<v-card-media :src="card.src" @click.native.stop="dialog2=true" height="200px">-->
                            <!--<v-container fill-height fluid>-->
                              <!--<v-layout fill-height>-->
                                <!--<v-flex xs12 align-end flexbox>-->
                                  <!--<v-dialog width="1000px" v-model="dialog2" lazy absolute>-->
                                    <!--<v-card>-->
                                      <!--<v-carousel @click.native.stop="dialog2=true">-->
                                        <!--<v-carousel-item v-for="(item2,i) in items2" v-bind:src="item2.src" @click.native.stop="dialog2=true" :key="i"></v-carousel-item>-->
                                      <!--</v-carousel>-->
                                    <!--</v-card>-->
                                  <!--</v-dialog>-->
                                  <!--&lt;!&ndash;<span class="headline white&#45;&#45;text" v-text="card.title"></span>&ndash;&gt;-->
                                <!--</v-flex>-->
                              <!--</v-layout>-->
                            <!--</v-container>-->
                          <!--</v-card-media>-->
                          <!--<v-card-title>-->
                            <!--<div>-->
                              <!--<span>Cookies And Cram</span><br>-->
                              <!--<span>Date: <span class="grey&#45;&#45;text">October 25th</span></span><br>-->
                              <!--<span>Location: <span class="grey&#45;&#45;text">TBA</span></span><br>-->
                              <!--<span>Description: <span class="grey&#45;&#45;text">Midterms Can be stressful, let's be stressed together. Join WiCS for a cookies and cram session. Enjoy some comfort food while cramming for those dreadful midterms.</span></span><br>-->
                            <!--</div>-->
                          <!--</v-card-title>-->
                        <!--</v-card>-->
                      <!--</v-flex>-->
                      <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card3" :key="card.title">
                        <v-card>
                          <v-card-media :src="card.src" @click.native.stop="dialog3=true" height="200px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <v-dialog width="1000px" v-model="dialog3" lazy absolute>
                                    <v-card>
                                      <v-carousel @click.native.stop="dialog3=true">
                                        <v-carousel-item v-for="(item3,i) in items3" v-bind:src="item3.src" @click.native.stop="dialog3=true" :key="i"></v-carousel-item>
                                      </v-carousel>
                                    </v-card>
                                  </v-dialog>
                                  <!--<span class="headline white--text" v-text="card.title"></span>-->
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                          <v-card-title>
                            <div>
                              <span>CAN-WICS Conference 2017</span><br>
                              <span>Date: <span class="grey--text">TBA</span></span><br>
                              <span>Location: <span class="grey--text">TBA</span></span><br>
                              <span>Description: <span class="grey--text">Meet up at the CAN-WICS conference 2017</span></span><br>
                            </div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                      <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
                        <v-card>
                          <v-card-media :src="card.src" height="200px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <!--<v-dialog width="1000px" v-model="dialog3" lazy absolute>-->
                                  <!--<v-card>-->
                                  <!--<v-carousel @click.native.stop="dialog3=true">-->
                                  <!--<v-carousel-item v-for="(item3,i) in items3" v-bind:src="item3.src" @click.native.stop="dialog3=true" :key="i"></v-carousel-item>-->
                                  <!--</v-carousel>-->
                                  <!--</v-card>-->
                                  <!--</v-dialog>-->
                                  <!--<span class="headline white--text" v-text="card.title"></span>-->
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                          <v-card-title>
                            <div>
                              <span>Women in STEM Panel</span><br>
                              <span>Date: <span class="grey--text">January 24th</span></span><br>
                              <span>Location: <span class="grey--text">TBA</span></span><br>
                              <!--<span>Description: <span class="grey--text"></span></span><br>-->
                            </div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                      <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
                        <v-card>
                          <v-card-media :src="card.src" height="200px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <!--<v-dialog width="1000px" v-model="dialog3" lazy absolute>-->
                                  <!--<v-card>-->
                                  <!--<v-carousel @click.native.stop="dialog3=true">-->
                                  <!--<v-carousel-item v-for="(item3,i) in items3" v-bind:src="item3.src" @click.native.stop="dialog3=true" :key="i"></v-carousel-item>-->
                                  <!--</v-carousel>-->
                                  <!--</v-card>-->
                                  <!--</v-dialog>-->
                                  <!--<span class="headline white--text" v-text="card.title"></span>-->
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                          <v-card-title>
                            <div>
                              <span>Industry Night</span><br>
                              <span>Date: <span class="grey--text">January 23th</span></span><br>
                              <span>Location: <span class="grey--text">TBA</span></span><br>
                              <!--<span>Description: <span class="grey--text"></span></span><br>-->
                            </div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                      <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
                        <v-card>
                          <v-card-media :src="card.src"height="200px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <!--<v-dialog width="1000px" v-model="dialog3" lazy absolute>-->
                                  <!--<v-card>-->
                                  <!--<v-carousel @click.native.stop="dialog3=true">-->
                                  <!--<v-carousel-item v-for="(item3,i) in items3" v-bind:src="item3.src" @click.native.stop="dialog3=true" :key="i"></v-carousel-item>-->
                                  <!--</v-carousel>-->
                                  <!--</v-card>-->
                                  <!--</v-dialog>-->
                                  <!--<span class="headline white--text" v-text="card.title"></span>-->
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                          <v-card-title>
                            <div>
                              <span>Let’s Talk Science</span><br>
                              <span>Date: <span class="grey--text">TBA</span></span><br>
                              <span>Location: <span class="grey--text">TBA</span></span><br>
                              <!--<span>Description: <span class="grey--text"></span></span><br>-->
                            </div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                      <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
                        <v-card>
                          <v-card-media :src="card.src"height="200px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <!--<v-dialog width="1000px" v-model="dialog3" lazy absolute>-->
                                  <!--<v-card>-->
                                  <!--<v-carousel @click.native.stop="dialog3=true">-->
                                  <!--<v-carousel-item v-for="(item3,i) in items3" v-bind:src="item3.src" @click.native.stop="dialog3=true" :key="i"></v-carousel-item>-->
                                  <!--</v-carousel>-->
                                  <!--</v-card>-->
                                  <!--</v-dialog>-->
                                  <!--<span class="headline white--text" v-text="card.title"></span>-->
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                          <v-card-title>
                            <div>
                              <span>SciXChange</span><br>
                              <span>Date: <span class="grey--text">TBA</span></span><br>
                              <span>Location: <span class="grey--text">TBA</span></span><br>
                              <!--<span>Description: <span class="grey--text"></span></span><br>-->
                            </div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-tabs-content>
          <v-tabs-content
            :id="'tab-' + 'Past Events'"
          >
              <v-card-text>
                <v-layout column>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card1" :key="card.title">
                          <v-card>
                            <v-card-media :src="card.src" @click.native.stop="dialog1=true" height="200px">
                              <v-container fill-height fluid>
                                <v-layout fill-height>
                                  <v-flex xs12 align-end flexbox>
                                    <v-dialog width="1000px" v-model="dialog1" lazy absolute>
                                      <v-card>
                                        <v-carousel @click.native.stop="dialog2=true">
                                          <v-carousel-item v-for="(item1,i) in items1" v-bind:src="item1.src" @click.native.stop="dialog1=true" :key="i"></v-carousel-item>
                                        </v-carousel>
                                      </v-card>
                                    </v-dialog>
                                    <!--<span class="headline white--text" v-text="card.title"></span>-->
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-card-media>
                            <v-card-title>
                              <div>
                                <span>WICS Picnic</span><br>
                                <span>Date: <span class="grey--text">High Park</span></span><br>
                                <span>Location: <span class="grey--text">August 19th</span></span><br>
                                <span>Description: <span class="grey--text">Meeting up and getting to know the WICS team.</span></span><br>
                              </div>
                            </v-card-title>
                          </v-card>
                        </v-flex>
                        <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card0" :key="card.title">
                          <v-card>
                            <v-card-media :src="card.src" @click.native.stop="dialog0=true" height="200px">
                              <v-container fill-height fluid>
                                <v-layout fill-height>
                                  <v-flex xs12 align-end flexbox>
                                    <v-dialog width="1000px" v-model="dialog0" lazy absolute>
                                      <v-card>
                                        <v-carousel @click.native.stop="dialog0=true">
                                          <v-carousel-item v-for="(item1,i) in items0" v-bind:src="item1.src" @click.native.stop="dialog0=true" :key="i"></v-carousel-item>
                                        </v-carousel>
                                      </v-card>
                                    </v-dialog>
                                    <!--<span class="headline white--text" v-text="card.title"></span>-->
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-card-media>
                            <v-card-title>
                              <div>
                                <span>Club Fair Day</span><br>
                                <span>Date: <span class="grey--text">Sept 8th</span></span><br>
                                <span>Location: <span class="grey--text">Outside of Ker hall</span></span><br>
                                <span>Description: <span class="grey--text">Join WICS by passing by our event!</span></span><br>
                              </div>
                            </v-card-title>
                          </v-card>
                        </v-flex>
                        <v-flex style="padding: 7px;" v-bind="{ [`xs${card.blex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card5" :key="card.title">
                          <v-card>
                            <v-card-media :src="card.src" height="200px">
                              <v-container fill-height fluid>
                                <v-layout fill-height>
                                  <v-flex xs12 align-end flexbox>
                                    <!--<v-dialog width="1000px" v-model="dialog3" lazy absolute>-->
                                    <!--<v-card>-->
                                    <!--<v-carousel @click.native.stop="dialog3=true">-->
                                    <!--<v-carousel-item v-for="(item3,i) in items3" v-bind:src="item3.src" @click.native.stop="dialog3=true" :key="i"></v-carousel-item>-->
                                    <!--</v-carousel>-->
                                    <!--</v-card>-->
                                    <!--</v-dialog>-->
                                    <!--<span class="headline white--text" v-text="card.title"></span>-->
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-card-media>
                            <v-card-title>
                              <div>
                                <span>Meet And Greet</span><br>
                                <span>Date: <span class="grey--text">October 2nd</span></span><br>
                                <span>Location: <span class="grey--text">Science Discovery Zone at Ryerson University</span></span><br>
                                <span>Description: <span class="grey--text">Get the opportunity to meet and interact with the WiCS team, and learn all about our plans for the school year. Come by for a chance to network and socialize with fellow Computer Science students, and also participate in a fun evening with games and food (Free pizza and snacks).</span></span><br>
                              </div>
                            </v-card-title>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-card-text>
          </v-tabs-content>
        </v-tabs>
      </template>
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
        items: ['Upcoming Events', 'Past Events'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        placeholder: '',
        dialog0: false,
        dialog1: false,
        dialog2: false,
        dialog3: false,
        test: true,
        picker: null,
        backgroundSrc: '/static/images/slc-large-min-bright.jpg',
        card0: [
          { title: 'Pre-fab homes', src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/21314808_1105195769611900_4846533824274533926_n.jpg?oh=4153d46938cf9c76a33a346ecd4b2add&oe=5A4F3CD2', flex: 6, blex: 12 }
        ],
        card2: [
          { title: 'Pre-fab homes', src: 'https://cdn.pixabay.com/photo/2015/11/19/20/17/christmas-cookies-1051884_1280.jpg', flex: 6, blex: 12 }
        ],
        card1: [
          { title: 'Pre-fab homes', src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/20935032_1096518180479659_8921060951711275484_o.jpg?oh=7c98cc844fd6a8821e485673f0d2f3f5&oe=5A4BEFDC', flex: 6, blex: 12 }
        ],
        card3: [
          { title: 'Pre-fab homes', src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/12646860_754879011310246_532438302748825512_o.jpg?oh=0747f19383216203a9240c0d69f1f451&oe=5A1B258E', flex: 6, blex: 12 }
        ],
        card4: [
          { title: 'Pre-fab homes', src: 'static/images/events/coming-soon-2550190_1280.jpg', flex: 6, blex: 12 }
        ],
        card5: [
          { title: 'Pre-fab homes', src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/21752312_10214077990800717_621207139871473369_n.jpg?oh=846e53ed0a41cdb2ede7ca8086236ddf&oe=5A48BE3C' }
        ],
        card6: [
          { title: 'Pre-fab homes', src: 'static/images/events/books-2164387_1920.jpg' }
        ],
        card7: [
          { title: 'Pre-fab homes', src: 'static/images/events/winter.jpg' }
        ],
        items0: [
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/21314808_1105195769611900_4846533824274533926_n.jpg?oh=4153d46938cf9c76a33a346ecd4b2add&oe=5A4F3CD2'
          }
        ],
        items2: [
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/12747294_767555376709276_1194434740618397001_o.jpg?oh=8f5fada031922de90c07ddf0ae02268d&oe=5A59448E'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/1209000_767555380042609_8595703335116831533_n.jpg?oh=ce9df45bf211087d79559d542e2b0e59&oe=5A193E59'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/12742766_767555373375943_2529797825056062339_n.jpg?oh=791bc3144cef9b0b1f2c6f714ee67050&oe=5A5D2FF8'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/12743587_767555620042585_6479606168194833386_n.jpg?oh=5bf37700a4e3a3da0ddf4dbaeb928b67&oe=5A587778'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/11052416_767555596709254_6755732293918363502_n.jpg?oh=1ba665dbae2b2e04cede3b13cf04b9dc&oe=5A5AA510'
          }
        ],
        items1: [
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/20935032_1096518180479659_8921060951711275484_o.jpg?oh=7c98cc844fd6a8821e485673f0d2f3f5&oe=5A4BEFDC'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/20989279_1096518173812993_3121001108933460025_o.jpg?oh=30f7f70d405708f1a077b78759558b79&oe=5A607426'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/21015788_1096518177146326_6750609327794488334_o.jpg?oh=8ec8d92acf69b1558a668b375c223839&oe=5A52B01E'
          }
        ],
        items3: [
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/12646860_754879011310246_532438302748825512_o.jpg?oh=0747f19383216203a9240c0d69f1f451&oe=5A1B258E'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/12615610_754879021310245_1941948640476872440_o.jpg?oh=3b9fded556e8da2592f9997440970355&oe=5A6033B9'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/12622258_754879681310179_5067014940057543625_o.jpg?oh=cf60b39eeef680cb676c6fea5af9b136&oe=5A5DEA6B'
          },
          {
            src: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/12615730_754879017976912_1153957455442037232_o.jpg?oh=eb68f602b01a787cb8fd8a93df71ae74&oe=5A50BF8C'
          }
        ],
        show: false
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
  div.landing.card__media > div.card__media__background { margin: auto; opacity: 0.3; }

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
