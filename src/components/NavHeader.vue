<template>
	<v-app-bar dark fixed dense :color="bg" hide-on-scroll>
		<v-app-bar-nav-icon
			@click="onButton"
		></v-app-bar-nav-icon>
		<!-- <v-container>
			<v-row align="center" justify="center">
				<v-col cols="12" sm="11" md="11" lg="10" xl="7">
					<v-toolbar-title>VRCon 2022</v-toolbar-title>
				</v-col>
			</v-row>
		</v-container> -->
		<ColumnLayout>
			<v-toolbar-title>VRCon 2022</v-toolbar-title>
		</ColumnLayout>
		<!-- <div class="shrink mt-auto mb-auto pt-3">
			<v-switch
				:label="``"
				@click="toggleTheme()"
				color="primary"
				class="mt-auto h-100"
			></v-switch>
		</div> -->
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
	// mounted() {
	// 	window.onscroll = () => {
	// 		this.changeColor();
	// 	};
	// },

	methods: {
		// changeColor() {
		// 	if (
		// 		document.body.scrollTop > 100 ||
		// 		document.documentElement.scrollTop > 100
		// 	) {
		// 		this.bg = "primary";
		// 	} else {
		// 		this.bg = "transparent";
		// 	}
		// },
		toggleTheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
		onButton() {
			this.$emit("navDrawerOpen");
		},
	},
};
</script>