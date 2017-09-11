<template>
  <v-list-tile :to="tile.to" :href="tile.href" ripple>
    <!-- Drawer tile icon -->
    <v-list-tile-action v-if="tile.icon">
      <v-icon light>{{ tile.icon }}</v-icon>
    </v-list-tile-action>
    <!-- Drawer tile content / body -->
    <v-list-tile-content>
      <v-list-tile-title style="overflow-y: hidden">
        <h5 style="margin-bottom: 0;">{{ tile.title }}</h5>
      </v-list-tile-title>
    </v-list-tile-content>
    <!-- Drop down icon action / expand -->
    <v-list-tile-action v-if="tile.items || tile.expand">
      <v-icon>keyboard_arrow_down</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  export default {
    props: {
      tile: {
        type: [Object]
      }
    },
    computed: {
      // header color can be set via props or defaults to black
      tileColor () {
        return this.tile.color ? {
          color: this.tile.color
        } : { color: 'black' }
      }
    }
  }
</script>
