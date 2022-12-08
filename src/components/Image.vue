<template>
	<div>
		<div style="position: relative; min-height: 200px;">
			<v-progress-circular v-if="isLoaded == false" indeterminate color="primary" :size="70" :width="7" class="loading"></v-progress-circular>
			<v-img :src="link" @load="loadImage" class="my-auto" contain />
		</div>

	</div>
</template>

<script>
export default {
	name: "ImageLoader",
	props: ["link"],
	data: () => ({
		isLoaded: false
	}),
	methods: {
		loadImage() {
			this.isLoaded = true;
		}
	},
};
</script>

<style>
.loading {
	position: absolute;
	z-index: 1000;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
</style>