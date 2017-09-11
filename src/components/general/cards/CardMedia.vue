<template>
  <v-card-media
    v-if="media"
    :src="media.src"
    height="250px"
    class="center"
    absolute
    slot="media"
    @mouseover="media.hoverOver()"
    @mouseleave="media.model = false"
  >
    <div
      style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(20, 20, 20, 0.7); text-align: center;"
      v-if="media.model"
    >
      <v-container>
        <h5
          v-if="media.content && media.content.title"
          class="white--text"
          style="margin: auto 0;"
        >{{ media.content.title }}</h5>
        <p
          v-if="media.content && media.content.p"
          class="white--text"
          style="margin: auto 0;"
        >{{ media.content.p }}</p>
      </v-container>
    </div>
  </v-card-media>
</template>

<script>
  export default {
    props: {
      media: {
        type: [Object]
      }
    }
  }
</script>
