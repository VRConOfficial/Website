<template>
	<div class="py-8">
		<FullBack>
			<ColumnLayout>
				<SectionBanner text="Frequently Asked Questions" />
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="pa-sm-8">
			<AccordionList :items="items2" :title="title" />
		</ColumnLayout>
		<!-- <ColumnLayout class="pa-8">
			<v-card class="mx-auto">
				<v-toolbar color="primary" dark>
					<v-toolbar-title>FAQ</v-toolbar-title>
				</v-toolbar>
				<v-list>
					<v-list-group
						v-for="item in items"
						:key="item.title"
						v-model="item.active"
						:prepend-icon="item.action"
						no-action
					>
						<template v-slot:activator>
							<v-list-item-content>
								<v-list-item-title v-text="item.title"></v-list-item-title>
							</v-list-item-content>
						</template>

						<v-list-item v-for="child in item.items" :key="child.title">
							<v-list-item-content>
								<v-list-item-title v-text="child.title"></v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-group>
				</v-list>
			</v-card>
		</ColumnLayout> -->
	</div>
</template>

<style scoped></style>

<script>
import ColumnLayout from "@/components/ColumnLayout.vue";
import AccordionList from "@/components/AccordionList.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import FullBack from "@/components/FullBack.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Questions";
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
				item: {
					title: "Question 1",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Question 1",
			},
			{
				action: "mdi-help-circle-outline",
				item: {
					title: "Question 2",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Question 2",
				
			},
			{
				action: "mdi-help-circle-outline",
				item: {
					title: "Question 3",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Question 3",
				
			},
			{
				action: "mdi-help-circle-outline",
				item: {
					title: "Question 4",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Question 4",
				
			}
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





















