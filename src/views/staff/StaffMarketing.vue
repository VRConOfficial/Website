<template>
	<StaffSlider :data="data" :title="title" />
</template>

<style scoped>

</style>

<script>
import StaffSlider from "@/components/StaffSlider.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Marketing Team";
	},
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
				photo: "https://cdn.discordapp.com/avatars/771735983078637598/5cd6f5b84c1f655aef00b91dbf4a9610.png?size=1024",
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