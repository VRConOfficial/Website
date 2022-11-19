<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-16">
				<SectionBanner text="History" />
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="py-16">
			<div class="white--text">
				<v-timeline
				align-top
				:dense = "$vuetify.breakpoint.smAndDown">

					<v-timeline-item
					v-for="(item, i) in items"
						:key="i"
						:color = "item.icon"
						:icon = "item.icon"
					fill-dot
					>
						<v-card
							:color = item.color
							dark
						>
							<v-card-title class="text-h6">
								{{item.year}}
							</v-card-title>
							<v-card-text class="white text--primary">
								<p>{{item.content}}</p>
								<v-btn
									:color = "item.color"
									class = "mx-0"
									outlined
								>
									See our Worlds
								</v-btn>
							</v-card-text>
						</v-card>
					</v-timeline-item>
				</v-timeline>
			</div>
		</ColumnLayout>
	</div>
</template>

<style scoped></style>

<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Our History";
	},
	name: "AboutView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
	},
	props: [],
	data: () => ({
		items: [
			{
				year: '2020',
				color: 'red lighten-2',
				icon: 'mdi-star',
				content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus vero animi possimus, enim excepturi beatae? Voluptatum voluptates, eos quod placeat maiores, cum vel repellendus odit reiciendis dolor optio ut?',
			},
			{
				year: '2021',
				color: 'purple darken-1',
				icon: 'mdi-book-variant',
				content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus vero animi possimus, enim excepturi beatae? Voluptatum voluptates, eos quod placeat maiores, cum vel repellendus odit reiciendis dolor optio ut?',
			},
			{
				year: '2022',
				color: 'green lighten-1',
				icon: 'mdi-airballoon',
				content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus vero animi possimus, enim excepturi beatae? Voluptatum voluptates, eos quod placeat maiores, cum vel repellendus odit reiciendis dolor optio ut?',
			},
		]
	}),
	methods: {},
};
</script>