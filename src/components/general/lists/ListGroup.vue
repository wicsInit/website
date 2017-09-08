<!-- Currently unused component -->
<template>
  <v-list-group
    v-if="tile"
    :value="tile.active"
    class="mb-2"
  >
    <wics-list-tile :tile="tile" slot="item"></wics-list-tile>
    <!-- Drawer Sub items -->
    <blockquote class="my-2">
      <h6 class="black--text">{{ tile.time }}</h6>
      <p>{{ tile.description }}</p>
    </blockquote>
  </v-list-group>
</template>

<script>
  import ListTile from './ListTile.vue'
  import componentConfig from '../../../data/componentConfig'

  export default {
    props: {
      tile: {
        type: [Object]
      }
    },
    computed: {
      expandable () {
        console.log((this.tile.items || this.tile.expandable))
        return (this.tile.items || this.tile.expandable)
      }
    },
    components: {
      [componentConfig.listTile]: ListTile
    }
  }
</script>
