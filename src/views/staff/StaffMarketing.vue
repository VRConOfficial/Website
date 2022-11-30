<template>
	<StaffSlider :data="data" :title="title" />
</template>

<style scoped></style>

<script>
import StaffSlider from "@/components/StaffSlider.vue";

export default {
	name: "MarketingStaffView",
	components: {
		StaffSlider,
	},
	props: [],
	data: () => ({
		title: "Teams",
		data: {
			action: "mdi-account",
			item: {
				title: "Marketing",
				image2: "placeholder.webp",
				content:
					"After all is said and done, Marketing is responsible for getting the word out, and hyping up everyone for the fantastic experience VRCon has to offer. ",
				director: "SenpaiVR",
				teamInfo: require("@/assets/Data/MarketingTeam.json"),
			},
			title: "Marketing",
		},
	}),
	methods: {},
};
</script>