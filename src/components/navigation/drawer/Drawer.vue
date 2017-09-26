<template>
  <v-navigation-drawer
    v-bind="drawerType"
    :mini-variant="drawer.mini"
    :clipped="drawer.clipped"
    v-model="drawer.model"
  >
    <!-- Toolbar wrapper for company drawer tile -->
    <v-toolbar flat class="transparent">
      <v-list class="pa-0" dense>
        <!-- WiCS logo drawer item -->
        <v-list-tile avatar @click.stop="toggleMiniDrawer">
          <v-list-tile-avatar>
            <img src="/static/images/logo-black.png"/>
          </v-list-tile-avatar>
          <!-- WiCS drawer tile title -->
          <v-list-tile-content>
            <v-list-tile-title>WiCS</v-list-tile-title>
          </v-list-tile-content>
          <!-- Toggle mini button -->
          <v-list-tile-action>
            <v-btn icon>
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <!-- Navigation drawer routes -->
    <v-divider></v-divider>
    <wics-list :data="drawer.items" class="pa-0" value="true"></wics-list>
  </v-navigation-drawer>
</template>

<script>
  import List from '../../general/lists/List.vue'
  import { mapGetters } from 'vuex'
  import componentConfig from '../../../data/componentConfig'

  export default {
    computed: {
      ...mapGetters([
        'drawer'
      ]),
      drawerType () {
        return [{[this.drawer.type]: true}]
      }
    },
    methods: {
      toggleMiniDrawer () {
        if (this.drawer) {
          this.drawer.mini = !this.drawer.mini
        } else {
          alert('Drawer data not found! Try reloading the page.')
        }
      }
    },
    components: {
      [componentConfig.list]: List
    }
  }
</script>
