<template>
	<v-container grid-list-xs>
		<v-row v-for="(info, index) in content" :key="index">
			<v-col sm="5" :order-sm="index % 2 ? 1 : 2">
				<v-img height="300px" cover fill-width :src="require('@/assets/images/landing/' + info.image)"></v-img>
			</v-col>
			<v-col sm="7" :order-sm="index % 2 ? 2 : 1">
				<v-card flat color="transparent" height="100%" class="d-flex flex-column justify-center white--text">
					<v-card-title primary-title :class="index % 2 ? 'align-self-sm-start' : 'align-self-sm-end'">
						{{ info.title }}
					</v-card-title>
					<v-card-text class="text-body-1 white--text">
						{{ info.content }}
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>

</style>

<script>
export default {
	name: "MyComponent",
	components: {},
	props: ["content"],
	data: () => ({}),
	methods: {},
};
</script>