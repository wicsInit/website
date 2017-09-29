<!--<template>
  <v-layout column>
    <v-flex xs12 sm10 offset-sm1>
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card.title"
          >
            <v-card>
              <v-card-media
                :src="card.src"
                height="500px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.name"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { name: '2017-2018 WiCS Team', src: '/static/images/team/2017/team.jpg', flex: 12 },
        { name: 'Prabhleen Kamboj', src: '/static/images/team/2017/Prabhleen.jpg', flex: 6 },
        { name: 'Deborah Mepaiyeda', src: '/static/images/team/2017/deborah.jpg', flex: 6 },
        { name: 'Rojin Shahba', src: '/static/images/team/2017/rojin.jpg', flex: 6 },
        { name: 'Alize De Matas', src: '/static/images/team/2017/dsc_0651.jpg', flex: 6 },
        { name: 'Hema Chudasama', src: '/static/images/team/2017/hema.jpg', flex: 6 },
        { name: 'Lisa Wong', src: '/static/images/team/2017/lisa.jpg', flex: 6 },
        { name: 'Paurali Rahevar', src: '/static/images/team/2017/paurali.jpg', flex: 6 },
        { name: 'Chloe Lerulla', src: '/static/images/team/2017/chloe.jpg', flex: 6 },
        { name: 'Bhoomi Patel', src: '/static/images/team/2017/bhoomi.jpg', flex: 6 },
        { name: 'Santhoshi(Shay) Shankar ', src: '/static/images/team/2017/shay.jpg', flex: 6 }
      ]
    })
  }
</script>
-->
<template>
  <div>
    <v-container fluid grid-list-md class="grey lighten-4">
      <v-layout row wrap>
        <v-flex
          v-for="card in page.cards"
          v-bind="{ [`xs${card.flex}`]: true }"
          :key="card.title"
          >
          <v-card>
            <v-card-media
              :src="card.src"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text" v-text="card.title"></span>
                   <!-- <span class="subheader white--text" v-text="card.position"></span> -->
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['page'])
    }
  }
</script>
<style>
  div.card__media__background[data-v-2a9b787a]{
    opacity: 0.3;
  }
</style>
<!--leave it out for now
will add it on tuesday morning -->

<!--
<style>
 template{
   margin-left: 1%;
   margin-right: 1%;
 }
</style>
-->
