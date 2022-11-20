<template>
  <v-card class="mx-auto accordion" color="transparent" dark>
    <v-list color="transparent">
      <v-list-group
        v-for="event in filteredEvents(events)"
        :key="event.message"
        v-model="event.active"
        :prepend-icon="event.action"
        no-action
        :class="datePassedStyle(event[0], date, event[3])"
      >
        <template v-slote:activator>
          <v-list-item-content>
            <v-list-item-title
              v-if="datePassedStyle(event[0], date, event[3]) == 'date-passed'"
              v-text="'(Event Time Passed) ' + event[2]"
            ></v-list-item-title>
            <v-list-item-title
              v-else-if="date"
              v-text="getTime(event[0], date) + ' | ' + event[2]"
            ></v-list-item-title>
						
          </v-list-item-content>
        </template>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<style scoped>
.accordion {
  backdrop-filter: brightness(80%) saturate(120%);
}
.date-passed {
  filter: grayscale(100%);
}
</style>

<script>
export default {
  name: "AccordionListEvents",
  components: {},
  props: ["date", "events"],
  data: () => ({}),
  methods: {
    datePassedStyle(time, date, eventLength) {
      var localDateTime = new Date();
      var debugDateTime = new Date("Dec 16 2022 5:00 PM CST");
      var eventDateTime = new Date(date + " " + time + "EST");
      const eventEndTime = new Date();
      eventEndTime.setTime(
        eventDateTime.getTime() + eventLength * 60 * 60 * 1000
      );
      var debug = true; // Change to false when not debugging
      var currentTime = debug ? debugDateTime : localDateTime;
      const diffTime = eventEndTime - currentTime;

      if (diffTime < 0) {
        return "date-passed";
      }

      return "";
    },
    formatDate(unixDate) {
      return new Date(unixDate * 1000).toLocaleTimeString();
    },

    getTime(time, date) {
      var eventDate = new Date(date + " 2022 " + time + " EST");
      var hours = eventDate.getHours(); // returns 24 hour format
      var AMPM = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      var minutes = eventDate.getMinutes();
      minutes = minutes.toLocaleString("en", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      var finalTime = hours + ":" + minutes + " " + AMPM;
      return finalTime;
    },

    filteredEvents(events) {
      var newArray = [];
      for (let i = 0; i < events.length; i++) {
        if (events[i][2] != "") {
          newArray.push(events[i]);
        }
      }
      return newArray;
    },
  },
};
</script>