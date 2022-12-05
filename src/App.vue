<script>
import NavHeader from "@/components/NavHeader.vue";
import NavDrawer from "@/components/NavDrawer.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
	computed: {
		theme() {
			return this.$vuetify.theme.dark ? "dark" : "light";
		},
	},
	components: {
		NavHeader,
		NavDrawer,
		MainFooter,
	},
	data: () => ({
		drawerOpen: null,
		items: [
			{ title: "Dashboard", icon: "mdi-view-dashboard" },
			{ title: "Account", icon: "mdi-account-box" },
			{ title: "Settings", icon: "mdi-cog" },
		],
	}),
	methods: {
		openNavDrawer() {
			this.drawerOpen = !this.drawerOpen;
		},
		closeNavDrawer() {
			this.drawerOpen = false;
		},
	},
};
</script>

<template>
	<v-app :style="{ background: $vuetify.theme.themes[theme].background }">
		<NavHeader @navDrawerOpen="openNavDrawer" />
		<NavDrawer :drawer="drawerOpen" @navDrawerClose="closeNavDrawer" />
		<v-main>
			<v-img class="background-image" src="@/assets/images/background.png"></v-img>
			<router-view />
		</v-main>
		<MainFooter />
	</v-app>
</template>

<style>
.background-image {
	z-index: -1;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 120vh;
}

.darkened {
	backdrop-filter: brightness(80%) saturate(120%);
}
</style>