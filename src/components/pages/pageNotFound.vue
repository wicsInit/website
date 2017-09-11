<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md7>
        <img src="/static/images/wics-logo.png" alt="wics logo" class="wics-logo">
        <h3>Error page not found!</h3>
      </v-flex>
      <v-flex xs12 md7>
        <router-link to="/">Go to home</router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script></script>

<style>
  div.layout {
    margin: auto;
  }
  div.flex {
    margin: auto;
    text-align: center;
  }
  h1, h2, h3, h4, h5, h6 {
    color: black;
  }
  img.wics-logo {
    width: 40%;
  }
</style>
