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
			<div>
				<h1 class="white--text text-center text-h3">Meet Our Team!</h1>
				<v-container class="my-4">
					<v-row justify="center" align="center">
						<v-col cols="10" sm="5" md="3" v-for="item in directory" :key="item.title">
							<v-btn color="white" outlined block :to="item.path">{{ item.title }}</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</div>
			<router-view />
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
		document.title = "VRCon 2022 | Staff Directory";
		window.scrollTo({ top: 0, behavior: 'instant' });
	},
	name: "StaffView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
	},
	props: [],
	data: () => ({
		length: 2,
		onboarding: 0,
		directory: [
			{
				title: 'Directors',
				path: '/staff/directors'
			},
			{
				title: 'Events Team',
				path: '/staff/events-team'
			}, {
				title: 'Production Team',
				path: '/staff/production-team'
			}, {
				title: 'Marketing Team',
				path: '/staff/marketing-team'
			},
		],
	}),
	methods: {
		next() {
			this.onboarding =
				this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
		},
		prev() {
			this.onboarding =
				this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
		},
	},
	computed: {},
};
</script>