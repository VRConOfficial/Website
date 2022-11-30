<template>
	<v-container class="white--text pa-8">
		<v-row justify="center" align="center">
			<div
				v-if="data.item.image2"
				:style="{
					'background-image':
						'url(' + require('@/assets/images/tiles/' + data.item.image2) + ')',
				}"
				class="banner-card"
			>
				<div>
					<p class="text-h4">
						{{ data.item.title }}
					</p>
				</div>
			</div>
			<v-col class="text-center py-4" cols="12" v-if="data.item.content">
				{{ data.item.content }}
			</v-col>
			<v-col cols="12" v-if="data.item.teamInfo" class="text-center py-8">
				<v-row justify="center" align="center">
					<v-col cols="auto" v-if="data.item.photo">
						<v-img
							:src="
								isValidHTML(data.item.photo)
									? data.item.photo
									: data.item.photo == ''
									? require('@/assets/images/placeholder.webp')
									: require('@/assets/images/Staff/' + data.item.photo)
							"
							max-width="100px"
							max-height="100px"
						/>
					</v-col>
					<v-col cols="auto" v-else>
						<v-img
							:src="require('@/assets/images/placeholder.webp')"
							max-width="100px"
							max-height="100px"
						/>
					</v-col>
					<v-col cols="auto">
						<h3 class="headline mb-0">{{ data.item.director }}</h3>
						<div>{{ data.item.title }} Director</div>
					</v-col>
				</v-row>
			</v-col>
			<v-card-actions style="width: 100%" class="darkened my-1">
				<v-row class="pa-4" justify="center" align="center">
					<v-col cols="2">
						<v-btn
							block
							outlined
							@click="prev(data.item.teamInfo)"
							color="primary"
							class="arrow-button pa-6 darkened"
							v-if="onboarding - 1 >= 0"
						>
							<v-icon>mdi-chevron-left</v-icon>
						</v-btn>
					</v-col>
					<v-col cols="8">
						<v-window v-model="onboarding">
							<v-window-item
								v-for="(team, index) in data.item.teamInfo"
								:key="index"
							>
								<v-row justify="center" align="center">
									<v-col cols="10" class="text-center">
										<v-icon class="primary--text">{{ team.Team }}</v-icon>
									</v-col>
								</v-row>
							</v-window-item>
						</v-window>
					</v-col>
					<v-col cols="2">
						<v-btn
							block
							outlined
							@click="next(data.item.teamInfo)"
							color="primary"
							class="arrow-button pa-6 darkened"
							v-if="onboarding + 1 != data.item.teamInfo.length"
						>
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-col>
				</v-row>
			</v-card-actions>
			<v-window v-model="onboarding" class="darkened" style="width: 100%">
				<v-window-item
					v-for="(team, index) in data.item.teamInfo"
					:key="index"
					class="pa-8 px-16"
				>
					<v-img
						v-if="team.Photo"
						:src="require('@/assets/images/' + team.Photo)"
						height="200px"
					>
					</v-img>
					<v-row justify="center" align="center" class="pa-4">
						<v-col cols="auto" v-if="team.Leader.photo">
							<v-img
								:src="
									isValidHTML(team.Leader.photo)
										? team.Leader.photo
										: team.Leader.photo == ''
										? require('@/assets/images/placeholder.webp')
										: require('@/assets/images/Staff/' + team.Leader.photo)
								"
								max-width="100px"
								max-height="100px"
							/>
						</v-col>
						<v-col cols="auto">
							<h3 class="headline mb-0">{{ team.Leader.name }}</h3>
							<div>{{ team.Team }} Lead</div>
						</v-col>
					</v-row>
					<v-container grid-list-xs>
						<v-row>
							<v-col
								cols="12"
								sm="6"
								v-for="(staff, key) in team.Staff"
								:key="key"
							>
								<v-card color="transparent" class="darkened white--text">
									<div style="display: flex; flex-direction: row">
										<div
											v-if="screenWidth <= 1263"
											:style="{
												'background-image':
													'url(' +
													(isValidHTML(staff.photo)
														? staff.photo
														: staff.photo == ''
														? require('@/assets/images/placeholder.webp')
														: require('@/assets/images/Staff/' + staff.photo)) +
													')',
											}"
											class="tile-image"
										>
											<v-card-text class="text-h6 text-truncate black--text">
												{{ staff.Name }}
											</v-card-text>
										</div>
										<div v-else style="display: flex; flex-direction: row">
											<v-img
												:src="
													isValidHTML(staff.photo)
														? staff.photo
														: staff.photo == ''
														? require('@/assets/images/placeholder.webp')
														: require('@/assets/images/Staff/' + staff.photo)
												"
												width="100px"
												height="100px"
											/>
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
.darkened {
	backdrop-filter: brightness(80%) saturate(120%);
}
.banner-card {
	width: 100%;
	height: 10em;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.banner-card div {
	display: flex;
	width: 100%;
	height: 100%;
	align-content: center;
	justify-content: center;
}
.banner-card div p {
	text-align: center;
	margin: 0;
	align-self: center;
}
</style>

<script>
export default {
	name: "StaffSlider",
	components: {},
	props: ["data", "title"],
	mounted() {
		window.addEventListener("resize", () => {
			this.screenWidth = window.innerWidth;
		});
	},
	data: () => ({
		screenWidth: window.innerWidth,
		onboarding: 0,
	}),
	// watch: {
	// 	screenWidth: function (val, oldVal) {
	// 		console.log("Screen Size changed from " + oldVal + " to " + val);
	// 	},
	// },
	methods: {
		parseTeamInfo(file) {
			var json = require("@/assets/Data/" + file + ".json");
			const result = JSON.stringify(json);
			var obj = JSON.parse(result);

			return obj;
		},

		getNames(arr) {
			var array = [];
			var j = 0;
			for (var i = 1; i < Object.keys(arr).length; i++) {
				var key = Object.keys(arr)[i];
				if (
					Object.values(arr)[i] != "" &&
					key != "Photo" &&
					key != "Team" &&
					key != "Leader"
				) {
					array[j] = Object.values(arr)[i];
					j++;
				}
			}
			return array;
		},

		isValidHTML(string) {
			let url;
			// console.log("trying: " + string);
			try {
				url = new URL(string);
			} catch (_) {
				// console.log("url is invalid");
				return false;
			}
			// console.log("url is valid");
			return url.protocol === "http:" || url.protocol === "https:";
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