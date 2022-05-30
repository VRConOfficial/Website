<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img alt="VRCon Logo" class="shrink ml-5 mr-5 mt-16" contain src="../../assets/Logo.png" transition="scale-transition" width="100" />

      <v-div class="shrink mt-1 hidden-sm-and-down">
        <h1>VRCon</h1>
      </v-div>
    </div>

    <v-spacer></v-spacer>
    <v-div class="shrink mt-auto mb-auto pt-3">
      <v-switch v-model="switch1" :label="``" @click="toggleTheme(switch1)" color="primary" class="mt-auto h-100"></v-switch>
    </v-div>

  </v-app-bar>
</template>

<script>

export default {
  /* eslint-disable */
  name: 'header',

  data() {
    return {
      switch1: false,
    }
  },

  methods: {
    toggleTheme(bool) {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};


</script>