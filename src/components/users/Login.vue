<template>
  <v-container>
    <form @submit.prevent="signAdminIn">
      <v-layout row wrap>
        <v-flex xs12>
          <h3 class="black--text">Admin Login</h3>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            name="email"
            label="Email"
            type="email"
            v-model="userData.email"
            single-line>
          </v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            name="password"
            label="Password"
            type="password"
            v-model="userData.password"
            single-line>
          </v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-btn class="secondary" type="submit">Log in</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        userData: {
          email: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters(['admin'])
    },
    watch: {
      admin (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/admin/console')
        }
      }
    },
    methods: {
      signAdminIn () {
        this.$store.dispatch('signAdminIn', this.userData)
      }
    }
  }
</script>
