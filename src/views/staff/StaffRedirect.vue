<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-8">
				<div class="white--text">
					<SectionBanner text="Staff Directory" class="py-4" />
				</div>
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="py-16">
			<div class="white--text">
				<h1 class="text-center text-h4">Staff Page Under Construction</h1>
				<v-container class="my-4">
					<v-row justify="center" align="center">
						<v-col cols="12" class="text-center">
							Please check it out after this weekend!
						</v-col>
					</v-row>
				</v-container>
			</div>
			<router-view></router-view>
		</ColumnLayout>
	</div>
</template>

<style scoped>

</style>

<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Under Construction";
		window.scrollTo({ top: 0, behavior: 'instant' });
	},
	name: "StaffViewRedirect",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
	},
	props: [],
	data: () => ({

	}),
	methods: {
	},
	computed: {},
};
</script>