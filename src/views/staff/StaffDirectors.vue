<template>
	<AccordionList :items="items" :title="title"/>
</template>

<style scoped></style>

<script>
import AccordionList from "@/components/AccordionList.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Directors";
	},
	name: "DirectorsStaffView",
	components: {
		AccordionList
	},
	props: [],
	data: () => ({
		title: "Directors",
		items: [
			{
				action: "mdi-account",
				item: {
					title: "Furtrap (Fizzi)",
					image: "fizzi-128.png",
					content:
						"Furtrap (aka Fizzi) began his career as a content creator by cosplaying, mostly as femboy anime characters which is where the name 'Furtrap' came from. Furtrap would often go to cosplay conventions where he ultimately found a love and passion for these events.\n\n Eventually, Furtrap would venture into VR with the intent to explore voice acting some of his favorite anime characters. As he continued towards this goal, Furtrap soon learned that he had a knack for playing out characters, which led him into creating his own characters in VR. Furtrap's first character is named 'Fizzi', a comedic character who inserts puns into every sentence and ending it with the word 'Zing!'\n\n Throughout 2018 to the present, Furtrap has created more characters, such as Savvii, VRonica, Roxanne, and Punflower, sharing their stories in the form of Twitch streams and Youtube Highlights. In 2019, he became a Twitch Partner with the streaming platform Twitch. With the amazing community he created, Furtrap decided to participate in the charity 'American Foundation for Suicide Prevention.' For this charity, he streamed an event called 'Don't Decide Suicide' resulting in both himself and his community single-handedly raising over $20,000 for it.\n\n In 2020 the world went through the COVID-19 pandemic leading to the closing of most, if not all conventions. As a result, Furtrap had the excellent idea of bringing the convention experience home, creating what we all now know of as VRCon!",
				},
				title: "Furtrap (Fizzi)",
			},
			{
				action: "mdi-account",
				item: {
					title: "Yaas",
					image: "yaas-128.png",
					content:
						"Yaas has been with us since Day 1, ensuring that the 'staff' here are well taken care of and listened to.",
				},
				title: "Yaas",
			},
			{
				action: "mdi-account",
				item: {
					title: "Karet",
					image: "Karet.png",
					content:
						"Karet is the Director of Productions, who takes care of all of the needs of the worlds we use.",
				},
				title: "Karet",
			},
			{
				action: "mdi-account",
				item: {
					title: "Shadozw",
					image: "Shadozw.png",
					content:
						"Rickity is in charge of all Events related work. He organizes our schedules in order to create amazing experiences for our visitors",
				},
				title: "Shadozw",
			},
			{
				action: "mdi-account",
				item: {
					title: "SenpaiVR",
					image: "SenpaiVR.png",
					content:
						"Senpai does the grunt work. That's it. Skip over this person (Senpai wrote this btw)",
						
				},
				title: "SenpaiVR",
			},
			{
				action: "mdi-account",
				item: {
					title: "Don Italiano",
					image: "Don.png",
					content:
						"One of the first 6 staff members of VRCon, beginning in March of 2020. He became the Business Director of VRCon in November 2022, and has been its Treasurer since it started. He has been a member of the VRChat community since January 2018 and continues to be an active member of the community since then. He served in the U.S. military for over 12 years from 2009-2022, and is now a veteran. His background through this service is in logistics, contract management, acquisition, procurement, and program/project management, skills which he continues using to this day in service to VRCon",
				},
				title: "Don Italiano",
			},
		],
	}),
	methods: {}
};

</script>