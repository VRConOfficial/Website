<template>
	<FullBack>
		<ColumnLayout class="py-16">
		<div>
			<SectionBanner text="Staff Directory" class="py-16" />
		</div>
		</ColumnLayout>
	</FullBack>
</template>

<style scoped></style>


<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Staff Directory";
	},
	name: "StaffView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner
	},
	props: [],
	data: () => ({}),
	methods: {},
};
</script>