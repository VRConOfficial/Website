<template>
	<StaffSlider :data="data" :title="title" />
</template>

<style scoped></style>

<script>
import StaffSlider from "@/components/StaffSlider.vue";

export default {
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
				image2: "placeholder.webp",
				content:
					"The Events team is in charge of creating memerable experiences, etc",
				director: "Shadozw",
				teamInfo: require("@/assets/Data/EventsTeam.json"),
			},
			title: "Events",
		},
	}),
	methods: {},
};
</script>