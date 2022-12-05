<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-8 pt-16">
				<SectionBanner text="Frequently Asked Questions" />
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="px-0 pa-sm-8 py-8">
			<AccordionList class="px-0" :items="items2" :title="title" />
		</ColumnLayout>
	</div>
</template>

<style scoped>

</style>

<script>
import ColumnLayout from "@/components/ColumnLayout.vue";
import AccordionList from "@/components/AccordionList.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import FullBack from "@/components/FullBack.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Questions";
		window.scrollTo({ top: 0, behavior: 'instant' });
	},
	name: "QuestionsView",
	components: {
		ColumnLayout,
		AccordionList,
		SectionBanner,
		FullBack,
	},
	props: [],
	data: () => ({
		title: "FAQ",
		items2: [
			{
				action: "mdi-help-circle-outline",
				title: "Is VRCon Free to Attend?",
				item: {
					title: "",
					image: "",
					content:
						"Yes! VRCon is free to attend. You just need to have VRChat installed on your PC or your Quest",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "Is VRCon run by VRChat?",
				item: {
					title: "",
					image: "",
					content:
						"No, VRCon is a community driven project and not affiliated with VRChat.",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "Is VRCon Quest Compatible?",
				item: {
					title: "",
					image: "",
					content:
						"Yes! But some events are not quest compatible. Please check the website to find out what events are quest compatible on our Events Page",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "Do we need VR to attend?",
				item: {
					title: "",
					image: "",
					content:
						"You do not need a VR headset to attend VRCon. You just need to be able to run VRChat on your PC. Or an Oculus quest.",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "When does VRCon start?",
				item: {
					title: "",
					image: "",
					content: "VRCon 2022 will run December 16th - 30th!",
				},
			},
			{
				action: "mdi-help-circle-outline",
				item: {
					title: "",
					image: "",
					content: "To be announced. Stay tuned to our socials",
				},
				title: "When will be the next VRCon?",
			},
			{
				action: "mdi-help-circle-outline",
				title: "How do we attend VRCon?",
				item: {
					title: "",
					image: "",
					content:
						"The VRCon world will be public for anyone to access within VRChat. To attend events please visit the Events page for instructions.",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "How do we attend the VRCon events/panels?",
				item: {
					title: "",
					image: "",
					content:
						"Each event and panel will have different ways to join those events such as pre-sign ups. More information will be posted at a later date!",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "Where can I find the schedule?",
				item: {
					title: "",
					image: "",
					content: "Check our Events Page",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "I'm interested in hosting a panel, How can I apply?",
				item: {
					title: "",
					image: "",
					content:
						"Right now, our applications are held through Google Forms. to get more details, join our Discord!",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "I would like to exhibit my community, How can I apply?",
				item: {
					title: "",
					image: "",
					content:
						"Right now, our applications are held through Google Forms. to get more details, join our Discord!",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "Can we stream during VRCon?",
				item: {
					title: "",
					image: "",
					content: "Yes! Streaming is allowed and encouraged!",
				},
			},
			{
				action: "mdi-help-circle-outline",
				title: "What if I have more questions?",
				item: {
					title: "",
					image: "",
					content:
						"Feel free to send your questions to us by emailing VRConQuestions@gmail.com",
				},
			},
		],
		items3: [
			{
				action: "mdi-help-circle-outline",
				item: [{ title: "List Item" }],
				title: "Attractions",
			},
			{
				action: "mdi-silverware-fork-knife",
				active: "true",
				item: {
					title: "Breakfast & brunch",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Dining",
			},
			{
				action: "mdi-school",
				item: [{ title: "List Item" }],
				title: "Education",
			},
			{
				action: "mdi-human-male-female-child",
				item: [{ title: "List Item" }],
				title: "Family",
			},
			{
				action: "mdi-bottle-tonic-plus",
				item: [{ title: "List Item" }],
				title: "Health",
			},
			{
				action: "mdi-briefcase",
				item: [{ title: "List Item" }],
				title: "Office",
			},
			{
				action: "mdi-tag",
				item: [{ title: "List Item" }],
				title: "Promotions",
			},
		],
		items: [
			{
				action: "mdi-ticket",
				items: [{ title: "List Item" }],
				title: "Attractions",
			},
			{
				action: "mdi-silverware-fork-knife",
				active: "true",
				items: [
					{
						title: "Breakfast & brunch",
						image: "placeholder",
						content:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
					},
					{ title: "New American" },
					{ title: "Sushi" },
				],
				title: "Dining",
			},
			{
				action: "mdi-school",
				items: [{ title: "List Item" }],
				title: "Education",
			},
			{
				action: "mdi-human-male-female-child",
				items: [{ title: "List Item" }],
				title: "Family",
			},
			{
				action: "mdi-bottle-tonic-plus",
				items: [{ title: "List Item" }],
				title: "Health",
			},
			{
				action: "mdi-briefcase",
				items: [{ title: "List Item" }],
				title: "Office",
			},
			{
				action: "mdi-tag",
				items: [{ title: "List Item" }],
				title: "Promotions",
			},
		],
	}),
	methods: {},
};
</script>





















