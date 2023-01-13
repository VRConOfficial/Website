<template>
	<v-navigation-drawer fixed :value="drawer" dark class="drawer">
		<v-toolbar dark color="primary">
			<v-btn class="close-button mx-3 my-2" @click="onButton" small fab dark>
				<v-icon dark>mdi-close-thick</v-icon>
			</v-btn>
			<v-toolbar-title>Welcome</v-toolbar-title></v-toolbar>
		<v-divider></v-divider>
		<v-list dense nav>
			<v-list-item v-for="item in items" :key="item.title" link :to="item.destination">
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title class="text-body-1">{{
							item.title
					}}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<style scoped>
.drawer {
	background-image: url("@/assets/images/gradient-nav.png");
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
}
</style>



<script>

export default {
	name: "NavDrawer",
	data: () => ({
		group: null,
		items: [
			{ title: "Home", icon: "mdi-home", destination: "/home" },
			{ title: "Guide", icon: "mdi-map", destination: "/guide" },
			{ title: "Film Festival", icon: "mdi-filmstrip", destination: "/FilmFestival2022"},
			{ title: "FAQ", icon: "mdi-help-circle-outline", destination: "questions" },
			{ title: "History", icon: "mdi-timeline-clock-outline", destination: "/history" },
		],
	}),
	methods: {
		onButton() {
			this.$emit("navDrawerClose");
		}
	},
	props: ["drawer"],
};
</script>

