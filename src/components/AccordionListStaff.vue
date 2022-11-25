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
                  style="
                    width: 100%;
                    height: 10em;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                  "
                >
                  <div
                    style="
										display:flex
										width: 100%;
										height: 100%;
										align-content: center;
										justify-content: center;
									"
                  >
                    <p
                      style="text-align: center; margin: 0; align-self: center"
                      class="text-h4"
                    >
                      {{ item.item.title }}
                    </p>
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

                <v-col
                  cols="12"
                  v-if="item.item.teamInfo"
                  style="display: flex; justify-content: space-around"
                >
                  <p class="text-h3">The Teams</p>
                </v-col>
                <v-col
                  cols="12"
                  v-if="item.item.teamInfo"
                  style="display: flex; justify-content: space-around"
                >
                  <p class="text-h5">Director: {{ item.item.director }}</p>
                </v-col>
                <v-col
                  cols="12"
                  v-if="item.item.teamInfo"
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                  "
                >
                  <v-card-actions
                    style="width: 100%"
                    class="justify-space-around"
                  >
                    <div v-if="screenWidth > 600" style="width: 100%">
                      <v-row class="mb-1">
                        <v-col
                          cols="1"
                          style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          "
                        >
                          <v-btn
                            text
                            @click="prev(item.item.teamInfo)"
                            color="white"
                            v-if="onboarding - 1 >= 0"
                          >
                            <v-icon>mdi-chevron-left</v-icon
                            ><v-icon>mdi-chevron-left</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="10">
                          <v-item-group
                            v-model="onboarding"
                            class="text-center"
                            mandatory
                            width="100%"
                          >
                            <v-window v-model="onboarding">
                              <v-window-item
                                v-for="(team, index) in item.item.teamInfo"
                                :key="index"
                              >
                                <v-row justify="center" align="center">
                                  <v-col cols="10">
                                    <v-btn color="primary" width="100%">
                                      <v-icon>{{ team.Team }}</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-window-item>
                            </v-window>
                          </v-item-group>
                        </v-col>
                        <v-col
                          cols="1"
                          style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          "
                        >
                          <v-btn
                            text
                            @click="next(item.item.teamInfo)"
                            color="white"
                            v-if="onboarding + 1 != item.item.teamInfo.length"
                          >
                            <v-icon>mdi-chevron-right</v-icon
                            ><v-icon>mdi-chevron-right</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                    <div v-else style="max-width: 100%">
                      <v-row class="mb-1">
                        <v-col
                          cols="1"
                          style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          "
                        >
                          <v-btn
                            text
                            @click="prev(item.item.teamInfo)"
                            color="white"
                            v-if="onboarding - 1 >= 0"
                          >
                            <v-icon>mdi-chevron-left</v-icon
                            ><v-icon>mdi-chevron-left</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="10">
                          <v-item-group
                            v-model="onboarding"
                            class="text-center"
                            mandatory
                            width="100%"
                          >
                            <v-window v-model="onboarding">
                              <v-window-item
                                v-for="(team, index) in item.item.teamInfo[0]"
                                :key="index"
                              >
                                <v-row justify="center" align="center">
                                  <v-col cols="10">
                                    <v-btn color="primary" width="100%">
                                      <v-icon>{{ team.Team }}</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-window-item>
                            </v-window>
                          </v-item-group>
                        </v-col>
                        <v-col
                          cols="1"
                          style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          "
                        >
                          <div v-if="item.item.teamInfo">
                            <v-btn
                              text
                              @click="next(item.item.teamInfo)"
                              color="white"
                              v-if="onboarding + 1 != item.item.teamInfo.length"
                            >
                              <v-icon>mdi-chevron-right</v-icon
                              ><v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-actions>
                  <v-window v-model="onboarding">
                    <v-window-item
                      v-for="(team, key) in item.item.teamInfo"
                      :key="key"
                    >
                      <v-card style="width: 80%; margin: auto">
                        <v-img
                          v-if="team.Photo"
                          :src="require('@/assets/images/' + team.Photo)"
                          height="200px"
                        >
                        </v-img>
                        <v-card-title primary-title style="width: 100%" >
                          <div style="display:flex; flex-direction:row; width: 100%">
                            <v-img v-if="team.Leader.photo"
                              :src="
                                isValidHTML(team.Leader.photo)
                                  ? team.Leader.photo
                                  : team.Leader.photo == ''
                                  ? require('@/assets/images/placeholder.webp')
                                  : require('@/assets/images/Staff/' +
                                      team.Leader.photo)
                              "
                              max-width="100px"
                              max-height="100px"
                            />
                            <div>
                              <h3 class="headline mb-0">{{ team.Team }}</h3>
                              <div>{{ team.Leader.name }}</div>
                            </div>
                          </div>
                        </v-card-title>
                        <v-container grid-list-xs>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              v-for="(staff, key) in team.Staff"
                              :key="key"
                            >
                              <v-card>
                                <div style="display: flex; flex-direction: row">
                                  <div
                                    v-if="screenWidth <= 1263"
                                    :style="{
                                      'background-image':
                                        'url(' +
                                        (isValidHTML(staff.photo)
                                          ? staff.photo
                                          : staff.photo == ''
                                          ? require('@/assets/images/placeholder.webp')
                                          : require('@/assets/images/Staff/' +
                                              staff.photo)) +
                                        ')',
                                    }"
                                    style="
                                      width: 100%;
                                      height: 10em;
                                      background-size: cover;
                                      background-position: center;
                                      background-repeat: no-repeat;
                                    "
                                  >
                                    <v-card-text
                                      class="text-h6 text-truncate"
                                      style="margin-auto"
                                    >
                                      {{ staff.Name }}
                                    </v-card-text>
                                  </div>
                                  <div
                                    v-else
                                    style="display: flex; flex-direction: row"
                                  >
                                    <v-img
                                      :src="
                                        isValidHTML(staff.photo)
                                          ? staff.photo
                                          : staff.photo == ''
                                          ? require('@/assets/images/placeholder.webp')
                                          : require('@/assets/images/Staff/' +
                                              staff.photo)
                                      "
                                      width="100px"
                                      height="100px"
                                    />
                                    <v-card-text>
                                      {{ staff.Name }}
                                    </v-card-text>
                                  </div>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                    </v-window-item>
                  </v-window>

                  <!-- <div 
                    v-for="team in item.item.teamInfo"
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

                  </div> -->
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
  name: "AccordionListStaff",
  components: {},
  props: ["items", "title"],
  mounted() {
    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
    });
  },
  data: () => ({
    screenWidth: window.innerWidth,
    onboarding: 0,
  }),
  watch: {
    screenWidth: function (val, oldVal) {
      console.log("Screen Size changed from " + oldVal + " to " + val);
    },
  },
  methods: {
    parseTeamInfo(file) {
      var json = require("@/assets/Data/" + file + ".json");
      const result = JSON.stringify(json);
      var obj = JSON.parse(result);

      return obj;
    },

    getNames(arr) {
      var array = [];
      var j = 0;
      for (var i = 1; i < Object.keys(arr).length; i++) {
        var key = Object.keys(arr)[i];
        if (
          Object.values(arr)[i] != "" &&
          key != "Photo" &&
          key != "Team" &&
          key != "Leader"
        ) {
          array[j] = Object.values(arr)[i];
          j++;
        }
      }
      return array;
    },

    isValidHTML(string) {
      let url;
      console.log("trying: " + string);
      try {
        url = new URL(string);
      } catch (_) {
        console.log("url is invalid");
        return false;
      }
      console.log("url is valid");
      return url.protocol === "http:" || url.protocol === "https:";
    },

    next(arr) {
      this.onboarding =
        this.onboarding + 1 === arr.length
          ? this.onboarding
          : this.onboarding + 1;
    },

    prev(arr) {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.arr.length : this.onboarding - 1;
    },
  },
};
</script>