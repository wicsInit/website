<template>
  <!-- max-width: calc(100% - 27px)" -->
  <v-container style="margin: 0; padding: 5px;">
    <v-layout style="margin: auto; padding: auto;">
      <v-card
        style="margin: auto; width: 100%; padding: 10px;"
      >
          <h3 class="txt" style="width: 75%; text-align: center; margin: auto; color:#25a519">Holiday Party</h3>
          <div
            class="xs3"
            style="display: inline-block; text-align: center;"
            v-for="(time, attr, index) in countdown"
          >
            <h1 class="txt time">
              {{ time }}
              <span class="seperator" v-if="!(index === 3)"> : </span>
            </h1>
            <p class="label" style="padding: 3px; margin: auto; text-align: center; font-size: 20px;">{{ attr }}</p>
          </div>
          <h1 style="display: inline-block"> </h1>
          <h4 class="location">Location: TBA</h4>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        countdownDate: new Date('Dec 15, 2017 06:00:00').getTime(),
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
   /* background-color: #424242;*/
   /* border: 2px solid darkgray;*/
    border-radius: 8px !important;
    color: #25a519;
  }
  .application--light .card {
    padding: 1%;
    background-color: #ffffff;
    opacity: 0.7;
    border: 0;
    text-align: center !important;
  }
  .location {
    background-color: transparent;
    color: #ff1313;
    border: 0;
    margin: 1% !important;
  }
  .label {
    margin-left: 5% !important;
    margin-right: 6% !important;
    color: #25a519;
  }
  .txt {
    color: #ff1313;
  }
  .time {
    padding: 10px;
    margin: auto;
    margin-left: 3px;
    position: relative;
    text-align: center;
    letter-spacing: inherit;
  }
  .seperator {
    position: absolute;
    top: 10px;
    right: -10px;
  }

  @media only screen and (max-width: 950px){
    h1 {
      font-size: 80px;
    }
  }
  @media only screen and (max-width: 1264px) {
    h1 {
      font-size: 50px;
    }
  }
</style>

