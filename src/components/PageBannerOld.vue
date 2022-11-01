<template>
	<v-parallax src="@/assets/images/ref.png">
		<div class="center-image"></div>
		<div class="logo"></div>
	</v-parallax>
</template>

<style scoped>
.center-image {
	position: absolute;
	right: 10px;
	bottom: 10px;
	width: 100%;
	height: 60%;
	background-image: url("../../assets/images/heroes-example2.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: right;
}

.logo {
	position: absolute;
	left: 10px;
	bottom: 10px;
	width: 100%;
	height: 60%;
	background-image: url("../../assets/images/logo.svg");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: left;
}
</style>

<script>
export default {
	name: "PageBanner",
	data: () => ({}),
	methods: {},
};
</script>