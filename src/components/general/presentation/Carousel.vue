<template>
  <div
    style="position: absolute; top: 0; left: 4px; right: 4px; bottom: 0; height: 100%;"
  >
    <v-carousel
      icon="stop"
      cycle
      :interval="5000"
      dark
      style="height: 100%;"
    >
      <slot></slot>
      <v-carousel-item
        v-for="(item,i) in items"
        v-bind:key="i"
        v-bind:src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/static/images/events/cnc.png'
          },
          {
            src: '/static/images/events/img1.jpg'
          },
          {
            src: '/static/images/events/event2.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  div.carousel
    div.carousel__right, div.carousel__left
      button
        div..btn__content
          background-color: rgba(20, 20, 20, 0.5)
  .carousel__left, .carousel__right
    background-color rgba(20,20,20,0.5)
  div.carousel
    background-color rgba(20,20,20,0.5)
    overflow visible
  div.carousel__controls
    height: 53px
</style>
