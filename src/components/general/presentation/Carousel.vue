<template>
  <div
    style="position: absolute; top: 0; left: 4px; right: 4px; bottom: 0; height: 100%;"
  >
    <v-carousel
      icon="stop"
      cycle
      :interval="interval"
      dark
      :style="carouselStyle"
    >
      <slot></slot>
      <v-carousel-item
        transition="fade"
        reverseTransition="fade"
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
        interval: 5000,
        items: [
          {
            src: '/static/images/events/event1.jpg'
          },
          {
            src: '/static/images/events/img2.jpg'
          },
          {
            src: '/static/images/events/cnc.png'
          },
          {
            src: '/static/images/events/img3.jpg'
          },
          {
            src: '/static/images/events/img1.jpg'
          }
        ]
      }
    },
    computed: {
      carouselStyle () {
        return {
          height: 100 + '%'
        }
      }
    }
  }
</script>

<style lang="stylus">
  div.carousel
    div.carousel__right, div.carousel__left
      button
        div.btn__content
          background-color: rgba(20, 20, 20, 0.5)
  div.carousel
    background-color rgba(20,20,20,0.5)
    overflow visible
  div.carousel__controls
    height: 53px
  .fade
    &-enter-active, &-leave-active, &-leave-to
      transition: .3s ease-out
      position: absolute
      top: 0
      left: 0

    &-enter, &-leave, &-leave-to
      opacity: 0
</style>
