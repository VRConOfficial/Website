<template>
	<div>
		<FullBack>
		</FullBack>
		<ColumnLayout>
			<AccordionList :items="items" :title="title" grabData/>
		</ColumnLayout>
	</div>
</template>

<style scoped></style>

<script>
import ColumnLayout from '@/components/ColumnLayout.vue';
import FullBack from "@/components/FullBack.vue";
//import SectionBanner from "@/components/SectionBanner.vue";
import AccordionList from "@/components/AccordionList.vue";
//import XLSX from "xlsx";
export default {
	mounted() {
	},
	name: "TeamStaffView",
	components: {
		FullBack,
		ColumnLayout,
		//SectionBanner,
		AccordionList
	},
	props: [],
	data: () => ({
		title: "Teams",
		items: [
			{
				action: "mdi-account",
				item: {
					title: "Events",
					image: "fizzi-128.png",
					content:
						"The Events Team handles all things related to Events. From Events scheduling, outreach, planning, and even our lovely volunteer team, these guys do everything they can to ensure our visitors have a memorable experience",
				},
				title: "Events",
			},
			{
				action: "mdi-account",
				item: {
					title: "Production",
					image: "yaas-128.png",
					content:
						"The Production team handles the World and Avatar production for VRCon. They ensure that VRCon has a memerable world that immerses our visitors into the story we tell throughout the convension.",
				},
				title: "Production",
			},
			{
				action: "mdi-account",
				item: {
					title: "Human Resources | Public Relations",
					image: "Karet.png",
					content:
						"HR and PR is responsible for the wellbeing of our staff, handling any complaints or issues that come up internally as well as reaching out to other communities for future collaberations",
				},
				title: "Human Resources | Public Relations",
			},
			{
				action: "mdi-account",
				item: {
					title: "Marketing",
					image: "Rickity.png",
					content:
						"After all is said and done, Marketing is responsible for getting the word out, and hyping up everyone for the fantastic experience VRCon has to offer. " + "\n\n" + 
						"Current Team:" + "\n\n" +
						"Media: \nTeam Lead: Wolveeps" + "\n" + "Staff:" + "\n  " + 
						"Ether the Dreamer" + "\n  " + 
						"ArcosRazor" + "\n  " + 
						"BloodRifle" + "\n  " + 
						"Carmo(SJF95Fighter)" + "\n  " + 
						"Chris_Conni" + "\n  " + 
						"drkim" + "\n  " + 
						"Emma Torch" + "\n  " + 
						"FreakenPurple",
				},
				title: "Marketing",
			},
		],
	}),
	methods: {
	},
};

</script>