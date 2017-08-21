<template>
  <v-card :class="color" class="mb-3" :style="cardHeight" style="">
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
    <v-card-actions :class="color+'--darken-2'" style="">
      <slot name="actions"></slot>
    </v-card-actions>
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
        default: 'accent'
      },
      width: {
        type: String,
        default: 'xs12'
      }
    },
    computed: {
      cardHeight () {
        return {
          'min-height': this.width === 'xs12' ? 'auto' : '500px',
          'max-height': this.width === 'xs12' ? 'auto' : '500px'
        }
      }
    }
  }
</script>

<style scoped>
  div.card {
    padding-bottom: 52px;
  }
  div.card__actions {
    height: 52px;
    position: absolute; bottom: 0; width: 100%;
  }
</style>
