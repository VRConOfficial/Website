<template>

  <div class="hero" style="
      height: calc(100vh - 64px);
    ">
    <v-container fluid v-for="align in alignments" :key="align" class="ma-0 pa-0" style="
        height: 100%;
        position: relative;
      ">
      <div class="hero-video" style="
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
      ">
        <video class="bg-video" src="../../assets/BGVideo.mp4" muted autoplay loop style="
          height: 100%;
          width: 100%;
          object-fit: cover;
        "/>
      </div>
      <v-row :align="align" no-gutters style="
          position:absolute;
          top: 50%;
          transform: translateY(-50%);
          height: fit-content;
          width:100%;
          padding: auto;
        ">
        <v-col>
          <v-card style="
              background: transparent;
            " elevation="0">
          </v-card>
        </v-col>
        <v-col>
          <v-card style="
              background: transparent;
            " elevation="0">
            <v-img width="25vw" style="
                margin:0 auto;
              " src="../../assets/Logo.png" transition="scale-transition" />
          </v-card>
        </v-col>
        <v-col>
          <v-card style="
              background: transparent;
            " elevation="0">
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!--
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../assets/Logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to your community
        </h1>
      </v-col>
    </v-row>
  </v-container>
  -->
</template>

<style>
.hero-video::after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 90%;
  position: absolute;
  top:0;
  left: 0;
}
</style>
<script>

export default {
  /* eslint-disable */
  name: 'Hero',

  data: () => ({
    alignments: [
      'center',
    ],
  }),

  methods: {
  }
};


</script>