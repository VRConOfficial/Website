<template>
	<v-container class="white--text px-0 pa-md-0">
		<v-row justify="center" align="center" class="px-0">
			<v-col class="text-center py-4" cols="12" v-if="data.item.content">
				{{ data.item.content }}
			</v-col>
			<v-col cols="12" v-if="data.item.teamInfo" class="text-center py-8">
				<v-row justify="center" align="center">
					<v-col cols="auto" v-if="data.item.photo">
						<v-img :src="getImage(data.item.photo, 'normal')" max-width="100px" max-height="100px" class="imgRnd"/>
					</v-col>
					<v-col cols="auto" v-else>
						<v-img :src="require('@/assets/images/tiles/default-profile.webp')" max-width="100px" max-height="100px" class="imgRnd"/>
					</v-col>
					<v-col cols="auto">
						<h3 class="headline mb-0">{{ data.item.director }}</h3>
						<div>{{ data.item.title }} Director</div>
					</v-col>
				</v-row>
			</v-col>
			<v-card-actions style="width: 100%" class="darkened my-1 px-0">
				<v-row class="py-4" justify="center" align="center" no-gutters>
					<v-col cols="2">
						<v-btn block outlined @click="prev(data.item.teamInfo)" color="primary" class="arrow-button pa-6 darkened" v-if="onboarding - 1 >= 0">
							<v-icon>mdi-chevron-left</v-icon>
						</v-btn>
					</v-col>
					<v-col cols="6" sm="7">
						<v-window v-model="onboarding">
							<v-window-item v-for="(team, index) in data.item.teamInfo" :key="index">
								<v-row justify="center" align="center" no-gutters>
									<v-col cols="10" class="text-center">
										<v-icon class="primary--text">{{ team.Team }}</v-icon>
									</v-col>
								</v-row>
							</v-window-item>
						</v-window>
					</v-col>
					<v-col cols="2">
						<v-btn block outlined @click="next(data.item.teamInfo)" color="primary" class="pa-6 darkened" v-if="onboarding + 1 != data.item.teamInfo.length">
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-col>
				</v-row>
			</v-card-actions>
			<v-window v-model="onboarding" class="darkened" style="width: 100%">
				<v-window-item v-for="(team, index) in data.item.teamInfo" :key="index" class="px-8 px-sm-4 py-8 px-lg-8">
					<v-row justify="center" align="center" class="pa-4" v-if="team.Leader.name">
						<v-col cols="auto" v-if="team.Leader.photo">
							<v-img :src="getImage(team.Leader.photo, 'normal')" max-width="100px" max-height="100px" class="imgRnd"/>
						</v-col>
						<v-col cols="auto">
							<h3 class="headline mb-0">{{ team.Leader.name }}</h3>
							<div>{{ team.Team }} Lead</div>
						</v-col>
					</v-row>
					<v-container grid-list-xs>
						<v-row>
							<v-col cols="12" sm="6" v-for="(staff, key) in team.Staff" :key="key">
								<v-card color="transparent" class="darkened white--text">
									<div style="display: flex; flex-direction: row">
										<div style="display: flex; flex-direction: row">
											<v-img :src="getImage(staff.photo, 'normal')" width="100px" height="100px" class="imgRnd"/>
											<v-card-text>
												{{ staff.Name }}
											</v-card-text>
										</div>
									</div>
								</v-card>
							</v-col>
						</v-row>
					</v-container>
				</v-window-item>
			</v-window>
		</v-row>
	</v-container>
</template>

<style scoped>
.tile-image {
	width: 100%;
	height: 10em;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.imgRnd {
	border-radius: 50%;
}
</style>

<script>
export default {
	name: "StaffSlider",
	components: {},
	props: ["data", "title"],
	mounted() { },
	data: () => ({
		onboarding: 0,
	}),
	methods: {
		// parseTeamInfo(file) {
		// 	var json = require("@/assets/Data/" + file + ".json");
		// 	const result = JSON.stringify(json);
		// 	var obj = JSON.parse(result);

		// 	return obj;
		// },
		// getNames(arr) {
		// 	var array = [];
		// 	var j = 0;
		// 	for (var i = 1; i < Object.keys(arr).length; i++) {
		// 		var key = Object.keys(arr)[i];
		// 		if (
		// 			Object.values(arr)[i] != "" &&
		// 			key != "Photo" &&
		// 			key != "Team" &&
		// 			key != "Leader"
		// 		) {
		// 			array[j] = Object.values(arr)[i];
		// 			j++;
		// 		}
		// 	}
		// 	return array;
		// },
		getImage(image) {
			if (image == "Karet.png") console.log("getting Image")
			if (image) {
				try {
					if (image == "Karet.png") console.log("Trying Staff")
					return require("@/assets/images/Staff/" + image);
				} catch (e) {
					try {
						if (image == "Karet.png") console.log("Trying http")
						let url = new URL(image);
						if (url.protocol === "http:" || url.protocol === "https:") {
							return image;
						}
					} catch (e2) {
						try {
							if (image == "Karet.png") console.log("Trying tiles")
							return require("@/assets/images/tiles/" + image)
						} catch (e3) {
							console.log(e3)
							return require("@/assets/images/Staff/" + image);
						}

					}
				}
			}
			return require("@/assets/images/tiles/default-profile.webp");
		},
		next(arr) {
			this.onboarding =
				this.onboarding + 1 === arr.length
					? this.onboarding
					: this.onboarding + 1;
		},
		prev(arr) {
			this.onboarding =
				this.onboarding - 1 < 0 ? this.arr.length : this.onboarding - 1;
		},
	},
};
</script>