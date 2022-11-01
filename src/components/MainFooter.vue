<template>
	<v-footer dark>
		<ColumnLayout class="my-8">
			<div>
				<v-row justify="center">
					<v-col cols="5" sm="4" md="4" lg="3">
						<v-img src="../assets/images/logo.svg" width="200px" class="my-sm-4"></v-img>
					</v-col>
					<v-col cols="10" sm="7" md="4" lg="3" v-for="item in items" :key="item.title">
						<v-list color="transparent">
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title>{{ item.title }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>
							<v-list-item
								v-for="subItem in item.subItems"
								:key="subItem.title"
								:to="subItem.destination"
							>
								<v-list-item-avatar v-if="subItem.avatar">
									<v-img
										:src="require('@/assets/images/tiles/' + subItem.avatar)"
									/>
								</v-list-item-avatar>
								<v-list-item-icon v-if="subItem.icon">
									<v-icon v-text="subItem.icon"></v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title>{{ subItem.title }}</v-list-item-title>
									<v-list-item-subtitle v-if="subItem.subTitle">
										{{ subItem.subTitle }}
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-col>
				</v-row>
				<v-row class="text-center">
					<v-col cols="12">
						Thank you everyone who helped make VRCon a reality!
					</v-col>
					<v-col cols="12">
						<v-btn v-for="icon in icons" :key="icon" text dark>
							<v-icon>{{ icon }}</v-icon>
						</v-btn>
					</v-col>
					<v-col cols="12"
						>&copy; 2022 VRCon
						<br />
						VRCon Connie Illustration by Polaris
						<br />
						Website by <a href="https://kylechaney.dev"><v-img class="three-thirty-six" max-height="0.8em" max-width="1.1em" contain src="@/assets/images/tiles/gradient336.png"/>Gradient 336</a>
					</v-col>
				</v-row>
			</div>
		</ColumnLayout>
	</v-footer>
</template>

<style scoped>
	.three-thirty-six {
		display: inline-block;
	}
	a {
		text-decoration: none;
	}
</style>



<script>
import ColumnLayout from "@/components/ColumnLayout.vue";

export default {
	name: "MainFooter",
	components: {
		ColumnLayout,
	},
	data: () => ({
		avatarPath: "@/assets/images/tiles/",
		icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-youtube"],
		items: [
			{
				title: "Pages",
				subItems: [
					{ title: "Home", icon: "mdi-home", destination: "/home" },
					{ title: "Guide", icon: "mdi-map", destination: "/guide" },
					{ title: "Events", icon: "mdi-calendar-check", destination: "/events" },
					{ title: "About", icon: "mdi-information-outline", destination: "/about" },
					{ title: "FAQ", icon: "mdi-help-circle-outline", destination: "/questions" },
				],
			},
			{
				title: "Contacts",
				subItems: [
					{
						title: "LilBagel",
						subTitle: "ethan@vrcon.online",
						avatar: "bagle-128.gif",
						destination: "",
					},
					{
						title: "Fizzi",
						subTitle: "fizzi@vrcon.online",
						avatar: "fizzi-128.png",
						destination: "",
					},
					{
						title: "Yaas",
						subTitle: "yaas@vrcon.online",
						avatar: "yaas-128.png",
						destination: "",
					},
					{
						title: "VirtuaLilly",
						subTitle: "lilly@vrcon.online",
						avatar: "lilly-128.png",
						destination: "",
					},
				],
			},
			{
				title: "Directories",
				subItems: [
					{ title: "Staff", icon: "", destination: "/staff" },
					{ title: "Join Our Team", icon: "", destination: "/about" },
					{ title: "Event Registration", icon: "", destination: "" },
					{ title: "Booth Registration", icon: "", destination: "" }
				],
			},
		],
	}),
	props: [],
};
</script>

