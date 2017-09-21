<template>
  <v-container style="margin: 0; padding: 5px;">
    <v-layout style="margin: auto; padding: auto;">
      <v-card style="margin: auto; width: 100%; padding: 10px;">
        <p style="padding: 10px; margin: 0; display: inline; text-align: center;" v-for="(attr, i, z) in countdown">{{ attr }} {{ i }}</p>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        countdownDate: new Date('Jan 5, 2018 15:37:25').getTime(),
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
    text-align: center;
    font-size: 24px;
  }
</style>

