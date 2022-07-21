<script>
/* eslint-disable */
import Header from './components/elements/Header.vue'
export default {
  components: {
    Header
  },
}
</script>

<template>
  <v-app>
    <Header/>

    <v-main>
      <transition name="slide-left">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>


