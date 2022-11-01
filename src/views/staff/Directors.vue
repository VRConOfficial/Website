<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-16">
				<div>
					<SectionBanner text="Staff Directory" class="py-16" />
				</div>
			</ColumnLayout>
		</FullBack>
		<ColumnLayout>
			<AccordionList :items="items" :title="title"/>
		</ColumnLayout>
	</div>
</template>

<style scoped></style>

<script>
import ColumnLayout from '@/components/ColumnLayout.vue';
import FullBack from "@/components/FullBack.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import AccordionList from "@/components/AccordionList.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Directors";
	},
	name: "DirectorsStaffView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
		AccordionList
	},
	props: [],
	data: () => ({
		title: "Directors",
		items: [
			{
				action: "mdi-account",
				item: {
					title: "Person 1",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Person 1",
			},
			{
				action: "mdi-account",
				item: {
					title: "Person 2",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Person 2",
			},
			{
				action: "mdi-account",
				item: {
					title: "Person 3",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Person 3",
			},
			{
				action: "mdi-account",
				item: {
					title: "Person 4",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Person 4",
			},
		],
	}),
	methods: {}
};

</script>