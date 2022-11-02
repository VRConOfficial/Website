<template>
	<v-app-bar dark fixed dense :color="bg" hide-on-scroll>
		<v-app-bar-nav-icon
			@click="onButton"
		></v-app-bar-nav-icon>
		<ColumnLayout>
			<v-toolbar-title>VRCon 2022</v-toolbar-title>
		</ColumnLayout>
	</v-app-bar>
</template>

<style scoped>
</style>

<script>
import ColumnLayout from "@/components/ColumnLayout.vue";

export default {
	name: "NavHeader",
	components: {
		ColumnLayout,
	},
	data: () => ({
		bg: "primary",
	}),
	methods: {
		onButton() {
			this.$emit("navDrawerOpen");
		},
	},
};
</script>