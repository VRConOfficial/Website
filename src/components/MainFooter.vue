<template>
	<v-footer dark>
		<ColumnLayout class="my-6 px-0">
			<div>
				<v-row class=" justify-center">
					<v-col cols="6" sm="4" md="4" lg="2" class="ma-4">
						<v-img src="../assets/images/logo.svg" width="400px" class="my-sm-4"></v-img>
					</v-col>
					<v-col cols="12" sm="5" md="4" lg="3" v-for="item in items" :key="item.title">
						<v-list color="transparent">
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title>{{ item.title }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
							<v-divider></v-divider>
							<v-list-item v-for="subItem in item.subItems" :key="subItem.title" :to="subItem.destination">
								<v-list-item-avatar v-if="subItem.avatar">
									<v-img :src="require('@/assets/images/tiles/' + subItem.avatar)" />
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
				<v-row class="text-center py-sm-8" no-gutters>
					<v-col cols="12" class="py-2">
						Thank you everyone who helped make VRCon a reality!
					</v-col>
					<v-col cols="12" style="display: flex; flex-direction: row; justify-content: center" class="py-2">
						<div v-for="icon in icons" :key="icon.icon" flex style="display: flex; flex-direction: row">
							<v-btn v-if="icon.link != ''" text dark :href="icon.link" target="_blank">
								<v-icon>{{ icon.icon }}</v-icon>
							</v-btn>
						</div>
					</v-col>
					<v-col cols="12" class="py-2">
						&copy; 2022 VRCon
						<br />
						VRCon Connie Illustration by Polaris
						<br />
						Website by
						<a href="https://kylechaney.dev"><v-img class="three-thirty-six" max-height="0.8em" max-width="1.1em" contain src="@/assets/images/tiles/gradient336.png" />Gradient 336</a>
						and <a href="https://senpaivr.com">SenpaiVR</a>
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
		icons: {
			Youtube: {
				icon: "mdi-youtube",
				link: "https://www.youtube.com/VRCon_Official",
			},
			twitch: {
				icon: "mdi-twitch",
				link: "https://www.twitch.tv/VRConLive"
			},
			twitter: {
				icon: "mdi-twitter",
				link: "https://twitter.com/VRCon_Official",
			},
		},
		items: [
			{
				title: "Pages",
				subItems: [
					{ title: "Home", icon: "mdi-home", destination: "/home" },
					{ title: "Guide", icon: "mdi-map", destination: "/guide" },
					{ title: "Film Festival", icon: "mdi-filmstrip", destination: "/FilmFestival2022" },
					{ title: "FAQ", icon: "mdi-help-circle-outline", destination: "/questions" },
					{ title: "History", icon: "mdi-timeline-clock-outline", destination: "/history" },
				],
			},
			{
				title: "Contacts",
				subItems: [
					{
						title: "Fizzi",
						subTitle: "fizzi@vrcon.online",
						avatar: "fizzi-128.png",
						destination: "",
					},
					{
						title: "Don Italiano",
						subTitle: "don@vrcon.online",
						avatar: "Don.png",
						destination: "",
					},
				],
			},
		],
	}),
	props: [],
};
</script>

