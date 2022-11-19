<template>
  <v-card class="mx-auto accordion" color="transparent" dark>
    <v-toolbar v-if="title" color="primary">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-list color="transparent">
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item class="accordion">
          <v-list-item-content class="ma-md-6 ma-sm-0">
            <v-container>
              <v-row justify="center" align="center">
                <div
                  v-if="item.item.image2"
                  :style="{
                    'background-image':
                      'url(' +
                      require('@/assets/images/tiles/' + item.item.image2) +
                      ')',
                  }"
									style=
										" width: 100%;
											height: 10em;
											object-fit: cover;
											background-position: center;
											background-repeat: no-repeat
										"
								>
									<div 
									style=
									"
										display:flex
										width: 100%;
										height: 100%;
										align-content: center;
										justify-content: center;
									"
									>
										<p 
										style="
										text-align: center; margin: 0; align-self: center" 
										class="text-h4">{{ item.item.title }}</p>
									</div>
                </div>

                <v-col cols="12" sm="4" md="4" lg="4" v-if="item.item.image">
                  <v-img
                    :src="require('@/assets/images/tiles/' + item.item.image)"
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="8"
                  md="7"
                  lg="6"
                  v-if="item.item.title && item.item.image"
                >
                  <p class="text-h4">{{ item.item.title }}</p>
                </v-col>
                <v-col cols="12" v-if="item.item.content">
                  <p class="py-sm-4" style="white-space: pre-wrap">
                    {{ item.item.content }}
                  </p>
                </v-col>
                
                <v-col cols="12" v-if="item.item.teamInfo" style = "display: flex; justify-Content: space-around">
                  <p class="text-h3">The Teams</p>
                </v-col>
                <v-col cols="12" v-if="item.item.teamInfo" style = "display: flex; justify-Content: space-around">
                  <p class="text-h5">Director: {{item.item.director}}</p>
                </v-col>
                <v-col cols="12" v-if="item.item.teamInfo" 
                style = "display: flex; justify-Content: space-around"
                >
                  <div 
                    v-for="team in parseTeamInfo(item.item.teamInfo)"
                    :key="team.message"
                    style="display:block;"
                  >
                    <p class="text-h4" style="font-weight: bolder; text-align: center"> {{team.Team}} </p>
                    <div
                      v-for="(name, index) in getNames(team)"
                      :key="name.message"
                    >
                      <p
                        v-if="index == 0"
                        class="text-h6"
                        style="font-weight: bold; text-align: center"
                      >
                        {{name}}
                      </p>
                      <p
                        v-if="index != 0"
                        class="text-p"
                        style="font-weight: normal; text-align: center"
                      >
                        {{name}}
                      </p>
                    </div>

                  </div>
                  
                </v-col>
              </v-row>
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<style scoped>
.accordion {
  backdrop-filter: brightness(80%) saturate(120%);
}
</style>

<script>
export default {
  name: "AccordionList",
  components: {},
  props: ["items", "title"],
  data: () => ({}),
  methods: {

    parseTeamInfo(file) {
      var json = require('@/assets/Data/' + file + '.json');
      const result = JSON.stringify(json);
      var obj = JSON.parse(result);

      return obj;
    },

    getNames (arr) {
      var array = []
      var j = 0;
      for (var i = 1; i < Object.keys(arr).length; i++)
      {
        if (Object.values(arr)[i] != "") {
          array[j] = Object.values(arr)[i]
          j++
        }
      }
      return array;
    }

  },
};
</script>