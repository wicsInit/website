<template>
  <v-carousel
    icon="stop"
    cycle
    interval="5000"
    dark
  >
    <v-carousel-item
      v-for="(item,i) in items"
      v-bind:key="i"
      v-bind:src="item.src"
      transition="fade"
      reverseTransition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/static/images/events/img1.jpg',
            height: '100px',
            width: '200px'
          },
          {
            src: '/static/images/events/img2.jpg',
            height: '100px',
            width: '200px'
          },
          {
            src: '/static/images/events/img3.jpg',
            height: '100px',
            width: '200px'
          },
          {
            src: '/static/images/events/img4.jpg',
            height: '100px',
            width: '200px'
          },
          {
            src: '/static/images/events/event1.jpg',
            height: '100px',
            width: '200px'
          },
          {
            src: '/static/images/events/event2.jpg',
            height: '100px',
            width: '200px'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  #carousel-view
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0px
        left: 0px

      &-enter, &-leave, &-leave-to
        opacity: 0
  div.carousel__right, div.carousel__left
    div.btn__content
      background-color: rgba(20, 20, 20, 0.5)
</style>
