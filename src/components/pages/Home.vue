<template>
  <v-container fluid>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-media
              src="/static/v.png"
              height="150px"
              contain
            ></v-card-media>
          </v-flex>
          <v-flex xs12>
            <v-card-title>
              <h2>Home</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque tortor turpis, sollicitudin at tristique vel,
                rhoncus at libero. Nam vehicula sem vel placerat egestas.
                In hac habitasse platea dictumst. Pellentesque tincidunt
                dui eget tellus vulputate scelerisque. Suspendisse malesuada
                consequat urna at laoreet. Vestibulum et risus semper, aliquet
                diam eget, efficitur turpis. Duis lacus turpis, aliquet scelerisque
                mauris sit amet, tristique efficitur enim. In hac habitasse platea
                dictumst. Praesent tristique libero in mi pretium, non imperdiet leo
                aliquet. In eget felis tellus. Mauris sagittis augue non mauris
                ullamcorper,
              </blockquote>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
