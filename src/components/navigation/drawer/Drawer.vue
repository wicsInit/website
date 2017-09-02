<template>
  <v-card class="grey lighten-5" flat>
    <!-- add the banner for the header -->
    <v-toolbar dark class="primary elevation-0" extended>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>
  <!-- wics team pic in the bg but for now use the SLC pic in black and white-->
    <v-layout row>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar">
          <v-toolbar card class="white" prominent>
            <v-toolbar-title class="body-2 grey--text">WiCS</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <!-- images of the lastest events -->
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
          </v-carousel>

          <v-divider></v-divider>
          <v-card-text style="height: 200px;">RYERSON WOMEN IN COMPUTER SCIENCE
            WiCS is a student group run by undergraduate Computer Science students at Ryerson University.</v-card-text>
          <v-divider></v-divider>
          <v-card-text style="height: 200px;">Who we are
            Women in Computer Science (WiCS) is run by undergraduate students in the Computer Science program at Ryerson University. We want to provide a safe space and support for groups that are traditionally marginalized in the field of computer science.cience students at Ryerson University.</v-card-text>
          <v-divider></v-divider>
          <v-card-text style="height: 200px;">Our goals
            Our goal is to encourage current students to continue learning computer science with confidence; foster retention of women and marginalized individuals through mentoring. We want to bring students together allowing them to network and socialize through events and provide opportunities for students to network with women professionals in the industry. Recruiting is also a priority to get prospective students interested in going to the STEM field.</v-card-text>
          <v-divider></v-divider>
          <v-card-text style="height: 200px;">updates </v-card-text>


        </v-card>

      </v-flex>

    </v-layout>



  </v-card>
</template>


<style>
  .card--flex-toolbar {
    margin-top: -64px;
  }

</style>

<script>
  export default {
    data () {
      return {
        interval: 5000,
        items: [
          {
            src: '/static/images/events/cnc.png'
          },
          {
            src: '/static/images/events/img1.jpg'
          },
          {
            src: '/static/images/events/event2.jpg'
          }
        ]
      }
    }
  }
</script>




