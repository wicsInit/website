<template>
  <v-container>
    <wics-card>
      <router-view></router-view>
    </wics-card>
  </v-container>
</template>

<script>
  import * as firebase from 'firebase'
  import Card from '../general/cards/Card.vue'
  import componentConfig from '../../data/componentConfig'

  export default {
    created () {
      // Initialize Firebase
      var config = {
        apiKey: 'AIzaSyCgwPBfUqZtsKrP9e52_rJ425e6dazhnsY',
        authDomain: 'wics-website.firebaseapp.com',
        databaseURL: 'https://wics-website.firebaseio.com',
        projectId: 'wics-website',
        storageBucket: 'wics-website.appspot.com',
        messagingSenderId: '291852517834'
      }
      firebase.initializeApp(config)
    },
    components: {
      [componentConfig.card]: Card
    }
  }
</script>
