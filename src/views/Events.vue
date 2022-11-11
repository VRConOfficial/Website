<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-16">
				<div class="white--text">
					<SectionBanner text="Events" />
				</div>
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="py-8">
			<div class="white--text">
				<div class="py-8">
					<AccordionList :items="items" :title="title" />
				</div>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					minus vero animi possimus, enim excepturi beatae? Voluptatum
					voluptates, eos quod placeat maiores, cum vel repellendus odit
					reiciendis dolor optio ut?
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					minus vero animi possimus, enim excepturi beatae? Voluptatum
					voluptates, eos quod placeat maiores, cum vel repellendus odit
					reiciendis dolor optio ut?
				</p>
			</div>
		</ColumnLayout>
	</div>
</template>

<style scoped></style>

<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import AccordionList from "@/components/AccordionList.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Events";
	},
	name: "EventsView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
		AccordionList,
	},
	props: [],
	data: () => ({
		title: "",
		items: [
			{
				action: "mdi-calendar-check",
				item: {
					title: "Future Event",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Event 1",
				date: 1920595970,
			},
			{
				action: "mdi-calendar-check",
				item: {
					title: "Past Event Example",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Event 2",
				date: 1478832770,
			},
			{
				action: "mdi-calendar-check",
				item: {
					title: "Event 3",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Event 3",
			},
			{
				action: "mdi-calendar-check",
				item: {
					title: "Event 4",
					image: "placeholder.webp",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore voluptatibus, vero nam libero dignissimos modi amet ullam magni repellendus vitae natus quod consequatur inventore consectetur nesciunt assumenda expedita quia!",
				},
				title: "Event 4",
			},
		],
	}),
	methods: {},
};
</script>