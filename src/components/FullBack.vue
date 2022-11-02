<template>
	<div class="blur-darken">
		<slot></slot>
	</div>
</template>

<style scoped>
.blur-darken {
	background-color: rgba(224, 30, 130, 0);
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