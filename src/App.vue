<script>
/* eslint-disable */
import Header from './components/elements/Header.vue'

import Home from './components/views/Home.vue'
import About from './components/views/About.vue'

const routes = {
  '/': Home,
  '/about': About
}

export default {
  components: {
    Header
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <v-app>
    <Header/>

    <v-main>
      <component :is="currentView" />
    </v-main>
  </v-app>
</template>


