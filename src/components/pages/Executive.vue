<template>
  <div>
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
  export default {
    data: () => ({
      cards: [
        {
          title: 'WiCS Team 2017 - 2018',
          position: 'Women in Computer Science',
          src: '/static/images/team/DSC_0163.jpg',
          flex: 12
        },
        {
          title: 'Deborah Mepaiyeda',
          src: '/static/images/team/DSC_0010.jpg',
          icon: 'fa-envelope',
          email: 'dmepaiyeda@ryerson.ca',
          position: 'Co-President',
          description: 'I am a third year Computer Science student.I am passionate about Technology and how it is changing our world. Artificial Intelligence excites me and I hope to be make a positive difference in the World through it in the future.',
          funFact: 'I love all things Korean - Korean Pop, Korean Dramas, Korean Culture. Presently, I am learning to speak and write in it. I aspire to be fluent in Korean and travel there in the future.',
          flex: 'xs12 sm6 md4 lg3'
        },
        {
          title: 'Rojin Shahba',
          src: '/static/images/team/DSC_0026.jpg',
          icon: 'fa-envelope',
          email: 'rshahba@ryerson.ca',
          position: 'VP of Communications & Corporate Relations',
          description: "The most interesting thing about computer science to me is that we won't graduate as developers, programmers, computer scientists, etc. We learn that our education journey doesn’t have a period, title nor a destination, but rather a satisfaction level. And that to me is freedom. Limitless!",
          funFact: '',
          flex: 'xs12 sm6 md4 lg3'
        },
        {
          title: 'Hema Chudasama',
          src: '/static/images/team/DSC_0063.jpg',
          icon: 'fa-envelope',
          email: 'hema.chudasama@ryerson.ca',
          position: 'VP Marketing',
          description: "I'm Hema, a student who entered this program with zero experience in coding, and is now grateful for the useful programming skills that have been built along this journey. I'm grateful for being apart of a group of women who help break stereotypes that have been established within the field of technology",
          funFact: 'I love all things Korean - Korean Pop, Korean Dramas, Korean Culture. Presently, I am learning to speak and write in it. I aspire to be fluent in Korean and travel there in the future.',
          flex: 'xs12 sm6 md4 lg3'
        },
        {
          title: 'Alize De Matas',
          src: '/static/images/team/DSC_0163.jpg',
          icon: 'fa-envelope',
          email: 'adematas@ryerson.ca',
          position: 'Marketing Associate',
          description: 'Hi!!I am a second year Computer Science student. I have a passion for designing and creating any ideas I come up with. I hope to expand my creativity and imagination in the technical world of Computer Science.',
          funFact: '',
          flex: 'xs12 sm6 md4 lg3'
        },
        {
          title: 'Lisa Wong',
          src: '/static/images/team/DSC_0101.jpg',
          icon: 'fa-envelope',
          email: 'lisa.c.wong@ryerson.ca',
          position: 'VP Academics',
          description: "Hey, my name is Lisa and I'm a 3rd year Computer Science student. I chose to do this program because there was nothing else I could imagine myself doing. Here I am, still interested in this field and I hope to be able to share my experiences and inspire others just as the many individuals in STEM have inspired me. ",
          funFact: 'I love eating and experiencing food from around the world. I also love to hike, run and travel.',
          flex: 'xs12 sm6 md4 lg3'
        },
        {
          title: 'Paurali Rahevar',
          src: '/static/images/team/DSC_0042.jpg',
          icon: 'fa-envelope',
          email: 'paurali.rahevar@ryerson.ca',
          position: 'VP Outreach',
          description: "I am a fourth year Computer Science student and I live by the quote 'Time never comes and goes, we come and we go'. I aim to pursue a career in Artificial and Business Intelligence to make my time count!",
          funFact: 'I love eating and experiencing food from around the world. I also love to hike, run and travel.',
          flex: 'xs12 sm6 md4 lg3'
        }
      ]
    })
  }
</script>
<!-- leave it out for now
will add it on tuesday morning
<style>
  .fluid:hover{
    background-color: black;
    opacity: 0.8;
  }
</style>
-->
