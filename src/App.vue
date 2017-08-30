<template>
  <v-app dark>
    <wics-nav-drawer></wics-nav-drawer>
    <main>
      <router-view></router-view>
    </main>
    <wics-footer></wics-footer>
  </v-app>
</template>

<style lang="stylus">
  @import './stylus/main'
</style>
