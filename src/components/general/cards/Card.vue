<template>
  <v-card :class="color" class="">
    <slot name="media"></slot>
    <v-card-title>
      <v-container fluid style="margin: 0;">
        <v-layout row wrap>
          <slot></slot>
        </v-layout>
      </v-container>
    </v-card-title>
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
