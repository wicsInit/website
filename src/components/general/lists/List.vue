<template>
  <v-list v-if="data">
    <!-- Loop through tiles in list -->
    <!-- Expansion tile, prop must have items or expand property must be true -->
    <v-list-group
      v-for="(tile, i) in data"
      :key="i"
      :value="tile.active"
      :tile="tile"
      v-if="tile.items || tile.expand"
    >
      <wics-list-tile :tile="tile" slot="item"></wics-list-tile>
      <!-- Drawer Sub items -->
      <blockquote class="my-2">
        <h6 class="black--text">{{ tile.time }}</h6>
        <p>{{ tile.description }}</p>
      </blockquote>
    </v-list-group>
    <!-- Regular list tile if not expansion tile -->
    <wics-list-tile
      v-for="(tile, i) in data"
      :tile="tile"
      :key="i"
      v-if="!(tile.items || tile.expand)"
    ></wics-list-tile>
  </v-list>
</template>

<script>
  import ListGroup from './ListGroup.vue'
  import ListTile from './ListTile.vue'
  import componentConfig from '../../../data/componentConfig'

  export default {
    props: {
      data: {
        type: [Array]
      }
    },
    components: {
      [componentConfig.listGroup]: ListGroup,
      [componentConfig.listTile]: ListTile
    }
  }
</script>
