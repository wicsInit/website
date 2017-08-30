<template>
  <v-navigation-drawer
    persistent
    temporary
    :mini-variant="drawer.miniVariant"
    :clipped="drawer.clipped"
    v-model="drawer.model"
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in drawer.items"
        :key="i"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon light v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
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
