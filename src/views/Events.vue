<template>
  <div>
    <FullBack>
      <ColumnLayout class="py-16">
        <div class="white--text">
          <SectionBanner text="Events" />
        </div>
      </ColumnLayout>
    </FullBack>
    <ColumnLayout class="py-8">
      <div class="white--text">
        <div class="py-8">
          <v-card flat tile color="transparent">
            <v-card-actions class="justify-space-between">
              <v-btn text @click="prev" color="white">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-item-group
                v-model="onboarding"
                class="text-center"
                mandatory
                style="width: 100%"
              >
                <v-window v-model="onboarding">
                  <v-window-item
                    v-for="(day, index) in uniqueTimestamps[0]"
                    :key="index"
                  >
                    <v-row justify="center" align="center">
                      <v-col cols="10">
                        <v-btn color="primary" class="ma-4" width="100%">
                          <v-icon>{{ day }}</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-item-group>
              <v-btn text @click="next" color="white">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
            <v-window v-model="onboarding">
              <v-window-item v-for="(day, index) in days" :key="index">
                <EventAccordionList :items="day" />
              </v-window-item>
            </v-window>
          </v-card>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          minus vero animi possimus, enim excepturi beatae? Voluptatum
          voluptates, eos quod placeat maiores, cum vel repellendus odit
          reiciendis dolor optio ut?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          minus vero animi possimus, enim excepturi beatae? Voluptatum
          voluptates, eos quod placeat maiores, cum vel repellendus odit
          reiciendis dolor optio ut?
        </p>
      </div>
    </ColumnLayout>
  </div>
</template>

<style scoped></style>

<script>
/* eslint-disable */
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import EventAccordionList from "@/components/EventAccordionList.vue";
import Events from "@/assets/Data/EventData/events.json";

export default {
  mounted() {
    document.title = "VRCon 2022 | Events";
    this.setEvents();
    //console.log(this.days);
  },

  name: "EventsView",
  components: {
    FullBack,
    ColumnLayout,
    SectionBanner,
    EventAccordionList,
  },
  props: [],
  data: () => ({
    title: "",
    items: [{}],
    events: Events,
    uniqueTimestamps: [],
    days: [],
    onboarding: 0,
  }),
  methods: {
    setEvents() {
      let events = Events;
      let uniqueDays = [];
      let uniqueTimestamps = [];
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      for (let i = 0; i < events.length; i++) {
        let event = events[i];
        let unix_timestamp = event.time;
        let date = new Date(unix_timestamp);
        let dotm = date.getDate();
        let dateStr =
          monthNames[date.getMonth()] +
          " " +
          date.getDate() +
          " " +
          date.getFullYear();
        uniqueDays.push(dotm);
        uniqueTimestamps.push(dateStr);
      }

      uniqueTimestamps = Array.from(new Set(uniqueTimestamps));
      //console.log(uniqueTimestamps);
      this.uniqueTimestamps.push(uniqueTimestamps);

      uniqueDays = Array.from(new Set(uniqueDays));
      for (let index = 0; index < uniqueDays.length; index++) {
        let day = uniqueDays[index];
        let newEventsarray = events.filter(
          (el) => new Date(el.time).getDate() == day
        );
        this.days.push(newEventsarray);
      }

      //set position in onboarding
      let currentDate = new Date();
      let debugDate = new Date("december 17 2022 5:00 PM CST");
      let today = this.Debugging ? debugDate : currentDate;
      var todayDateStr =
        monthNames[today.getMonth()] +
        " " +
        today.getDate() +
        " " +
        today.getFullYear();

      for (let i = 0; i < this.uniqueTimestamps[0].length; i++) {
        let dateToCheck = this.uniqueTimestamps[0][i];
        if (todayDateStr == dateToCheck) {
          this.onboarding = i;
          break;
        }
      }
    },
    next() {
      this.onboarding =
        this.onboarding + 1 === this.uniqueTimestamps[0].length
          ? this.onboarding
          : this.onboarding + 1;
      console.log(this.onboarding + 1 === this.uniqueTimestamps[0].length);
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0
          ? this.uniqueTimestamps[0].length
          : this.onboarding - 1;
    },
    ReadyToShowEvents() {
      return false; //Change to true when Events are ready to be shown
    },

    Debugging() {
      return true; // Change to false when this is complete
    },
  },
  computed: {},
};
</script>