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
          <v-window>
            <v-window-item v-for="(day, index) in days" :key="index">
              <EventAccordionList :items="day" />
            </v-window-item>
          </v-window>
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
    console.log(this.days);
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
    items: [
      {
        action: "mdi-calendar-check",
        item: {
          title: "Future Event",
          image: "placeholder.webp",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
        },
        title: "Event 1",
        date: 1920595970,
      },
      {
        action: "mdi-calendar-check",
        item: {
          title: "Past Event Example",
          image: "placeholder.webp",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
        },
        title: "Event 2",
        date: 1478832770,
      },
      {
        action: "mdi-calendar-check",
        item: {
          title: "Event 3",
          image: "placeholder.webp",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
        },
        title: "Event 3",
      },
      {
        action: "mdi-calendar-check",
        item: {
          title: "Event 4",
          image: "placeholder.webp",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
        },
        title: "Event 4",
      },
    ],
    events: Events,
    days: [],
  }),
  methods: {
    setEvents() {
      let events = Events;
      let uniqueDays = [];
      for (let i = 0; i < events.length; i++) {
        let event = events[i];
        let unix_timestamp = event.time;
        let date = new Date(unix_timestamp);
        let dotm = date.getDate();
        uniqueDays.push(dotm);
      }

      uniqueDays = Array.from(new Set(uniqueDays));
      for (let index = 0; index < uniqueDays.length; index++) {
        let day = uniqueDays[index];
        let newEventsarray = events.filter(
          (el) => new Date(el.time).getDate() == day
        );
        console.log(newEventsarray.toString());
        this.days.push(newEventsarray);
      }
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