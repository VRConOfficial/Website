<template>
	<StaffSlider :data="data" :title="title" />
</template>

<style scoped>

</style>

<script>
import StaffSlider from "@/components/StaffSlider.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Events Team";
	},
	name: "EventsStaffView",
	components: {
		StaffSlider
	},
	props: [],
	data: () => ({
		title: "Team",
		data: {
			action: "mdi-account",
			item: {
				title: "Events",
				photo: "Shadozw.png",
				content:
					"The Events team is in charge of creating the memerable experiences you all enjoy!",
				director: "Shadozw",
				teamInfo: require("@/assets/Data/EventsTeam.json"),
			},
			title: "Events",
		},
	}),
	methods: {},
};
</script>