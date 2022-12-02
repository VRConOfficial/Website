<template>
	<div>
		<v-container class="py-8 py-sm-16 px-0">
			<v-row class="text-center mb-1" justify="center">
				<v-col cols="auto" class="px-0">
					<div class="white--text font-weight-light text-h3 text-sm-h2 text-md-h1">
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