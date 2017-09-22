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
                    <span class="subheader white--text" v-text="card.position"></span>
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
<!-- leave it out for now
will add it on tuesday morning
<style scoped>
  .fluid:hover{
    background-color: black;
    opacity: 0.8;
  }
</style>
-->
