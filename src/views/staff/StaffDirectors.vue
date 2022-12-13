<template>
	<AccordionList :items="items" :title="title" />
</template>

<style scoped>

</style>

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
						"Karet, our production director, joined VRCon in 2021 to assist with the world team with the design and creation of the hub world, as well as building the entire community festival world. With his extencive knowledge in 3D Art and Programming knowledge, and his dedication to VRCon, he was invited to become our Director in 2022 to assist with this years creations.\n\nWhile you may recognize him from VRCon, you may also recognize him as the Chief of the LPD (Loli Police Department) along with some of his other creations over there.",
				},
				title: "Karet",
			},
			{
				action: "mdi-account",
				item: {
					title: "Shadozw",
					image: "Shadozw.png",
					content:
						"Hi I'm shadow!  Pleasure to meet you..  little background on me is I love to dance and coseplay!  But above all I love to meet new people and show them all around the social communities.  Let's make our community a family!",
				},
				title: "Shadozw",
			},
			{
				action: "mdi-account",
				item: {
					title: "SenpaiVR",
					image: "SenpaiVR.png",
					content:
						"SenpaiVR started VRChat in November of 2020, just before the 2020 VRCon Convention. It was there where he realized just how amazing the VRChat community was and fell in love with it.\n\nThroughout 2021, SenpaiVR did his best to understand the ins-and-outs of VRChat, learning the code, and the community. It wasn't too long until he started to explore the VRChat film community that was starting to sprout up in places. After the release of the 'Into the Metaverse' trailer, he got with the creators in order to create the 'Virtual Reality Film Association', a community who's goal was to help directors, filmmakers, sound artists, world creators, and actors link up to make their film dreams a reality.\n\nIn After VRCon 2021, SenpaiVR was recruited onto VRCon by Lilbagel to assist the Art Department (now our graphics design team) due to his experience in creating graphics for his own videos and films. It wasn't too long until Senpai's love for the community and his work was seen by the other directors and he was offered the position of Director of the new Marketing Department where he would assist VRCon in hosting VRCon 2022",

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