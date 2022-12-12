<template>
	<StaffSlider :data="data" :title="title" />
</template>

<style scoped>

</style>

<script>
import StaffSlider from "@/components/StaffSlider.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Production Team";
	},
	name: "ProductionStaffView",
	components: {
		StaffSlider,
	},
	props: [],
	data: () => ({
		title: "Teams",
		data: {
			action: "mdi-account",
			item: {
				title: "Production",
				photo: "Karet.png",
				content:
					"The Production team handles the World and Avatar production for VRCon. They ensure that VRCon has a memerable world that immerses our visitors into the story we tell throughout the convension.",
				director: "Karet",
				teamInfo: require("@/assets/Data/ProductionTeam.json"),
			},
			title: "Production",
		},
	}),
	methods: {},
};
</script>