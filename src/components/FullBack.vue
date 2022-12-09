<template>
	<div v-if="getImg(img)" class="blur-darken bgIMg">
		<slot></slot>
	</div>
	<div v-else class="blur-darken">
		<slot></slot>
	</div>
</template>

<style scoped>
.blur-darken {
	background-color: rgba(224, 30, 130, 0);
	backdrop-filter: brightness(80%) saturate(120%);
}

.bgIMg {

	background-image: url("@/assets/images/Film Festival/vlcsnap-2022-12-05-21h31m57s541.png");
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
}
</style>

<script>
export default {
	name: "FullBack",
	components: {},
	props: ["img"],
	data: () => ({}),
	methods: {
		getImg(img) {
			// console.log("url: " + (img))
			return img;
		}
	},
};
</script>