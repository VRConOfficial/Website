<template>
	<div class="dave2">
		<!-- <v-parallax
			class="py-4"
			height="300"
			src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
		>
			<slot></slot>
		</v-parallax> -->
		<slot></slot>
	</div>
</template>

<style scoped>
.dave2 {
	background-color: rgba(224, 30, 130, 0.0);
	backdrop-filter: brightness(80%) saturate(120%);
}
</style>

<script>
export default {
	name: "FullBack",
	components: {},
	props: [],
	data: () => ({}),
	methods: {},
};
</script>