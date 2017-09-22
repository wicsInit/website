<template>
  <v-container style="margin: 0; padding: 5px;">
    <v-layout style="margin: auto; padding: auto;">
      <v-card style="margin: auto; width: 100%; padding: 10px;">
        <h3>Meet N Greet in</h3>
        <p style="padding: 10px; margin: 0; display: inline; text-align: center;" v-for="(attr, i, z) in countdown">{{ attr }} {{ i }}</p>
        <p class="location">Location: SDZ</p>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        countdownDate: new Date('Oct 4, 2017 06:00:00').getTime(),
        countdown: {
        }
      }
    },
    mounted () {
      setInterval(() => {
        var currentDate = new Date().getTime()
        var countdown = this.countdownDate - currentDate
        var days = Math.floor(countdown / (1000 * 60 * 60 * 24))
        var hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((countdown % (1000 * 60)) / 1000)
        if (countdown < 0) {
          this.countdown = 'Expired!'
        } else {
          this.countdown = {
            days,
            hours,
            minutes,
            seconds
          }
        }
      }, 1000)
    }
  }
</script>

<style scoped>
  p {
    text-align: center !important;
    font-size: 24px;
    background-color: #424242;
    color: white;
    margin: 1% !important;
    border: 2px solid darkgray;
    border-radius: 8px !important;
  }
  .application--light .card {
    padding: 1%;
    background-color: transparent;
    border: 0;
    text-align: center !important;
  }
  .location{
    background-color: transparent;
    color: #616161;
    border: 0;
    margin: 1% !important;

  }
</style>

