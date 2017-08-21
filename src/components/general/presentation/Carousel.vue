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
        transition="fade"
        reverseTransition="fade"
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
            src: '/static/images/'
          },
          {
            src: '/static/images/'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #carousel-view
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
  div.carousel__right, div.carousel__left
    div.btn__content
      background-color: rgba(20, 20, 20, 0.5)
  div.carousel
    overflow: visible
</style>
