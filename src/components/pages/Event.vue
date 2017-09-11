<template>

  <v-card>
    <div class="landing card__media">
      <!-- Home background -->
      <div
        class="card__media__background"
        :style="backgroundStyle"
      >
      </div>
        <v-layout column>
          <v-flex xs12 sm6 offset-sm3>
            <!--<v-system-bar status class="indigo darken-2" dark>-->
            <!--<v-spacer></v-spacer>-->
            <!--<v-icon>network_wifi</v-icon>-->
            <!--<v-icon>signal_cellular_null</v-icon>-->
            <!--<v-icon>battery_full</v-icon>-->
            <!--<span>12:30</span>-->
            <!--</v-system-bar>-->
            <!--<v-toolbar class="indigo" dark>-->
            <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
            <!--<v-toolbar-title>Discover</v-toolbar-title>-->
            <!--<v-spacer></v-spacer>-->
            <!--<v-btn icon>-->
            <!--<v-icon>search</v-icon>-->
            <!--</v-btn>-->
            <!--</v-toolbar>-->
            <v-container style="margin-top: 100px;" fluid grid-list-md>
              <v-layout row wrap>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card0" :key="card.title">
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
                        <span class="grey--text">Day of meet and greet to learn more about WICS</span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card1" :key="card.title">
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
                        <span class="grey--text">PMeeting up and getting to know the WICS team</span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card2" :key="card.title">
                  <v-card>
                    <v-card-media :src="card.src" @click.native.stop="dialog2=true" height="200px">
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <v-dialog width="1000px" v-model="dialog2" lazy absolute>
                              <v-card>
                                <v-carousel @click.native.stop="dialog2=true">
                                  <v-carousel-item v-for="(item2,i) in items2" v-bind:src="item2.src" @click.native.stop="dialog2=true" :key="i"></v-carousel-item>
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
                        <span>Cookies And Cram</span><br>
                        <span class="grey--text">Midterms Can be stressful, let's be stressed together. Join WiCS in SLC514 on October 25th for a cookies and cram session. Enjoy some comfort food while cramming for those dreadful midterms.</span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card3" :key="card.title">
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
                        <span>CAN-WICS Conference 2016</span><br>
                        <span class="grey--text">Meet up at the CAN-WICS conference 2016</span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
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
                        <span class="grey--text"></span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
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
                        <span class="grey--text"></span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
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
                        <span>Meet and Greet</span><br>
                        <span class="grey--text"></span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
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
                        <span class="grey--text"></span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex style="padding: 7px;" v-bind="{ [`xs${card.lex}`]: true, [`sm${card.flex}`]: true }" v-for="card in card4" :key="card.title">
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
                        <span class="grey--text"></span><br>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
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
          { title: 'Pre-fab homes', src: 'https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg', flex: 6, blex: 12 }
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
  div.landing.card__media > div.card__media__background { margin: auto; }
</style>
