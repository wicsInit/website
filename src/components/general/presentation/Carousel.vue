<template>
  <div>
    <v-carousel
      icon="stop"
      cycle
      :interval="5000"
      dark
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
          },
          {
            src: '/static/images/events/'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  div.carousel
    div.carousel__right
      button
        div..btn__content
          background-color: rgba(20, 20, 20, 0.5)
  .carousel__left
    background-color rgba(20,20,20,0.5)
  div.carousel
    background-color rgba(20,20,20,0.5)
    overflow visible
</style>
