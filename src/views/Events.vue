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
            <v-window-item
              v-for="(events, index) in getEvents()"
              :key="events.message"
            >
              <div v-if="Debugging() || ReadyToShowEvents()">
                <!-- {{getDate(index)}}
								{{events}} -->
                <EventAccordionList :date="getDate(index)" :events="events" />
              </div>
              <div
                v-else
                style="
                  display: flex;
                  align-items: center;
                  align-content: center;
                  justify-content: center;
                "
              >
                <p>
                  This days events are still being scheduled. Please check back
                  later!
                </p>
              </div>
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
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import EventAccordionList from "@/components/EventAccordionList.vue";
import EventsList from "@/assets/Data/EventsPages.json";

export default {
  mounted() {
    document.title = "VRCon 2022 | Events";
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
    data() {
      return {
        eventDays: [],
      };
    },
  }),
  methods: {
    getEvents() {
      var eventFiles = EventsList;
      var eventLength = Object.keys(eventFiles).length;
      var eventDays = [];

			//get event listings in EASTERN
      for (let i = 0; i < eventLength; i++) {
        var file = require("@/assets/Data/EventData/" +
          Object.values(eventFiles)[i] +
          ".json");
        eventDays.push(file);
      }

			//Combine all events into a single array
			var combinedEvents = [];
			console.log(Object.assign({}, combinedEvents));
			for (var i = 0; i < eventDays.length; i++) {
				for(var j = 0; j < eventDays[i].length; j++){
					if (eventDays[i][j][2] == "") continue;
					combinedEvents.push(eventDays[i][j]);
				}
			}
			console.log(combinedEvents);
      
      return eventDays;
    },

    getDate(index) {
      var eventFiles = EventsList;
      var fileName = Object.values(eventFiles)[index];
      var date = fileName.replaceAll("VRCon 2022 Schedule (Internal) - ", "");
      date = date
        .replace("Monday ", "")
        .replace("Tuesday ", "")
        .replace("Wednesday ", "")
        .replace("Thursday ", "")
        .replace("Friday ", "")
        .replace("Saturday ", "")
        .replace("Sunday ", "")
        .replace("st", "")
        .replace("nd", "")
        .replace("rd", "")
        .replace("th", "");
      return date + " 2022";
    },

    ReadyToShowEvents() {
      return false; //Change to true when Events are ready to be shown
    },

    Debugging() {
      return true; // Change to false when this is complete
    },
  },
};
</script>