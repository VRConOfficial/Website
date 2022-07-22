<template>
  <div id="home-app">
    <div id="Home">
      <Hero/>
      <v-container grid-list-xs>
        <v-row v-for="(info, index) in landingInfo" :key="index">
          <v-col sm="5" :order-sm="index % 2 ? 1 : 2">
            <v-img height="300px" cover fill-width :src="require('@/assets/' + info.image)"></v-img>
          </v-col>
          <v-col sm="6" :order-sm="index % 2 ? 2 : 1">
            <v-card :class="index % 2 ? 'text-sm-right' : 'text-sm-left'" height="100%">
              <v-card-title primary-title>
                {{info.title}}
              </v-card-title>
              <v-card-text>
                <div>{{info.content}}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Hero from '../elements/Hero';

export default {
  name: 'Home',

  components: {
    Hero
  },

  data: () => ({
    landingInfo: [
      {
        image: "landing/placeholder-1.jpg",
        title: "What is VRCON?",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam reprehenderit mollitia error voluptatum, eveniet temporibus distinctio quidem ab, quasi eaque, atque repudiandae voluptatibus ducimus delectus sapiente maiores excepturi! Odit, voluptatem!"
      },
      {
        image: "landing/placeholder-2.png",
        title: "Why VRCon?",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam reprehenderit mollitia error voluptatum, eveniet temporibus distinctio quidem ab, quasi eaque, atque repudiandae voluptatibus ducimus delectus sapiente maiores excepturi! Odit, voluptatem!"
      }
    ],
  }),
}
</script>
