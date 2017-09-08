<template>
  <v-navigation-drawer
    persistent
    temporary
    :mini-variant="drawer.miniVariant"
    :clipped="drawer.clipped"
    v-model="drawer.model"
  >
    <v-toolbar flat class="transparent" dense>
      <v-list class="pa-0">
        <!-- WiCS logo drawer item -->
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="/static/images/wics-logo.png"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>WiCS</v-list-tile-title>
          </v-list-tile-content>-->
          <!-- Toggle mini button -->
          <v-list-tile-action>
            <v-btn icon @click.native.stop="drawer.miniVariant = !drawer.miniVariant">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list class="pa-0">
      <!-- Drawer items container -->
      <v-list-group
        v-if=""
        v-for="(item, i) in drawer.items"
        :value="item.active"
        v-bind:key="item.title"
      >
        <v-list-tile
          value="true"
          :key="i"
          :to="item.to"
          slot="item"
          @click=""
        >
          <!-- Drawer items -->
          <v-list-tile-action>
            <v-icon light>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <!-- Drawer item title -->
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <!-- Drop down icon action -->
          <v-list-tile-action v-if="item.items">
            <v-icon>keyboard_arrow_down</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <!-- Drawer Sub items -->
        <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="">
          <v-list-tile-action>
            <v-icon light>{{ subItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    //
    computed: {
      ...mapGetters([
        'drawer'
      ])
    }
  }
</script>

<style scoped>
  aside.navigation-drawer {
    z-index: 1000;
  }
</style>
