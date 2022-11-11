<template>
	<div>
		<v-container class="py-8 py-sm-16">
			<v-row class="text-center mb-1" justify="center">
				<v-col>
					<div class="text-md-h1 white--text font-weight-light text-h2">
						{{ text }}
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<style scoped>
.row {
	border-bottom: 8px solid #3366ff;
}
</style>

<script>
export default {
	name: "SectionBanner",
	components: {},
	props: ["text"],
	data: () => ({}),
	methods: {},
};
</script>