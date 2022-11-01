<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-16">
				<div class="white--text">
					<SectionBanner text="Guide" />
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
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						minus vero animi possimus, enim excepturi beatae? Voluptatum
						voluptates, eos quod placeat maiores, cum vel repellendus odit
						reiciendis dolor optio ut?
					</p>
				</div>
			</ColumnLayout>
		</FullBack>
	</div>
</template>

<style scoped></style>

<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Guide";
	},
	name: "GuideView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
	},
	props: [],
	data: () => ({}),
	methods: {},
};
</script>