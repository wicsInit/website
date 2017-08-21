<template>
  <v-card :class="color" class="mb-3" :style="cardHeight">
    <slot name="media"></slot>
    <v-container fluid>
      <v-layout row wrap>
        <v-card-title>
          <v-container fluid>
            <v-layout row wrap>
              <slot></slot>
            </v-layout>
          </v-container>
        </v-card-title>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      color: {
        type: String,
        default: 'white'
      },
      width: {
        type: String,
        default: 'xs12'
      }
    },
    computed: {
      cardHeight () {
        return {
          'min-height': this.width === 'xs12' ? 'auto' : '500px'
        }
      }
    }
  }
</script>

<style>

</style>
