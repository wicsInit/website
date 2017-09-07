<template>
  <v-footer :fixed="footer.fixed" class="py-0 px-4">
    <v-container style="margin: 0; max-width: none" class="pa-3">
      <v-layout row wrap class="py-2">
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <a
                v-for="site in socialMedia"
                :href="site.href"
                v-tooltip:top="{ html: site.tooltip }"
                class="pr-2"
              >
                <v-icon class="icon--large">{{ site.icon }}</v-icon>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-spacer></v-spacer>
          <span>{{ page.title }} &copy; 2017</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  import socialMedia from '../../../data/socialMedia'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        socialMedia: socialMedia
      }
    },
    computed: {
      ...mapGetters([
        'page',
        'footer'
      ])
    }
  }
</script>

<style scoped>
  footer.footer {
    height: auto;
    min-height: 36px;
  }
</style>
