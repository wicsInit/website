<template>
  <div class="text-xs-center">

    <!-- header img -->
    <div class="crop">
      <img src="/static/images/slc-large-banner.jpg"/>
      <div class="title">
        <h1>Contact</h1>
      </div>
    </div>


    <!-- header Text -->

    <v-layout justify-space-around>
      <span class="group pa-2">
        <a href="https://www.facebook.com/ryersonwics?fref=ts"><v-icon x-large>fa-facebook</v-icon></a>
        <v-icon x-large>fa-twitter</v-icon>
        <v-icon x-large>fa-instagram</v-icon>
        <v-icon x-large>fa-envelope</v-icon>
        <v-icon x-large>fa-linkedin</v-icon>
      </span>
    </v-layout>

  </div>
</template>

<style>
  img{
    width:100%;
    height: 100%;
  }
  .crop{
    width: 100%;
    height: 200px;
  }
  .title{
    position: absolute;
    top: 5%;
    text-align: center;
  }

  .fa-envelope:before{
    font-size: 500%;
    color: black;
    position: absolute;
    left: 70%;
    top: 40%;
    right:30%;
    bottom: 60%;

  }
  .fa-facebook:before{
    font-size: 700%;
    color: darkblue;
    position: absolute;
    left: 50%;
    top: 50%;
    right:50%;
    bottom: 50%;
  }
  .fa-twitter:before{
    font-size: 400%;
    color: deepskyblue;
    position: absolute;
    left: 40%;
    top: 45%;
    right:60%;
    bottom: 60%;
  }
  .fa-linkedin:before{
    font-size: 300%;
    color: royalblue;
    position: absolute;
    left: 65%;
    top: 67%;
    right:25%;
    bottom: 37%;
  }
  .fa-instagram:before{
    font-size: 600%;
    color: rebeccapurple;
    position: absolute;
    left: 30%;
    top: 67%;
    right:70%;
    bottom: 33%;
  }
</style>

