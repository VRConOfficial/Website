<template>
  <div>
    <FullBack> </FullBack>
    <AccordionListStaff :items="items" :title="title" />
  </div>
</template>

<style scoped></style>

<script>
//import ColumnLayout from '@/components/ColumnLayout.vue';
import FullBack from "@/components/FullBack.vue";
//import SectionBanner from "@/components/SectionBanner.vue";
import AccordionListStaff from "@/components/AccordionListStaff.vue";
//import XLSX from "xlsx";
export default {
  mounted() {},
  name: "TeamStaffView",
  components: {
    FullBack,
    //ColumnLayout,
    //SectionBanner,
    AccordionListStaff,
  },
  props: [],
  data: () => ({
    title: "Teams",
    items: [
      {
        action: "mdi-account",
        item: {
          title: "Events",
          image2: "placeholder.webp",
          content:
            "The Events team is in charge of creating memerable experiences, etc",
          director: "Shadozw",
          teamInfo: require('@/assets/Data/EventsTeam.json'),
        },
        title: "Events",
      },
      {
        action: "mdi-account",
        item: {
          title: "Production",
          image2: "placeholder.webp",
          content:
            "The Production team handles the World and Avatar production for VRCon. They ensure that VRCon has a memerable world that immerses our visitors into the story we tell throughout the convension.",
          director: "Karet",
          teamInfo: require('@/assets/Data/ProductionTeam.json'),
        },
        title: "Production",
      },
      {
        action: "mdi-account",
        item: {
          title: "Marketing",
          image2: "placeholder.webp",
          content:
            "After all is said and done, Marketing is responsible for getting the word out, and hyping up everyone for the fantastic experience VRCon has to offer. ",
          director: "SenpaiVR",
          teamInfo: require('@/assets/Data/MarketingTeam.json'),
        },
        title: "Marketing",
      },
    ],
  }),
  methods: {},
};
</script>