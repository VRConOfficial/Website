<template>
	<div>
		<v-container class="py-8 py-sm-16">
			<v-row class="row text-center" justify="center">
				<v-col>
					<div class="text">{{ text }}</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<style scoped>
.text {
	color: white;
	font-size: 4rem;
	font-weight: bold;
}

.row {
	border-bottom: 10px solid #3366ff;
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