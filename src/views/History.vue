
<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-8 pt-16">
				<SectionBanner text="History" />
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="py-16">
			<div class="white--text">
				<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
					<v-card dark>
						<v-toolbar dark color="primary">
							<v-btn icon dark @click="(dialog = false), (worlds = null)">
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</v-toolbar>
						<transition name="slide-fade">
							<v-card-text v-if="worlds">
								<v-card-title primary-title style="justify-content: center; align-items: center">
									{{ worlds.groupName }}
								</v-card-title>
								<v-card-text>
									<v-container grid-list-lg>
										<v-row no-gutters>
											<v-col v-for="(world, index) in worlds.worlds" :key="index" cols="12" sm="4">
												<v-card class="ma-4 pa-4" flat>
													<v-img :src="require('@/assets/images/worlds/' + world.image)" style=" display: flex; justify-content: end; align-items: end;">
														<v-btn color="primary" :href="world.link" target="_blank" class="ma-2">{{ world.name }}</v-btn>
													</v-img>
												</v-card>
											</v-col>
										</v-row>
									</v-container>
								</v-card-text>
							</v-card-text>
						</transition>
						<div v-if="worlds == null" style=" min-width: 100%; min-height: 100%; display: flex; align-items: center; justify-content: center; padding-top: 11%; ">
							<v-progress-circular indeterminate color="primary" :size="70" :width="7"></v-progress-circular>
						</div>
					</v-card>
				</v-dialog>
				<v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
					<v-timeline-item v-for="(item, i) in items.timelineItems" :key="i" fill-dot :icon="item.icon" :color="item.color">
						<template v-slot:opposite v-if="item.dates != 'December 16, 2022 - December 30, 2022' || new Date().getTime() >= new Date(1671229800000)">
							<v-card style="width: 80; border-radius: 25px 0">
								<v-img :src="item.image != '' ? isValidHttpUrl(item.image) ? item.image : require('@/assets/images/' + item.image.image) : require('@/assets/images/placeholder.webp')" dark max-height="14em" />
								<v-card v-if="item.image.sub != '' && item.image != ''" height="2em" style=" display: flex; align-items: center; justify-content: center; ">
									<v-card-text class="pa-0" style="width: fit-content">
										<p class="ma-0" style="width: fit-content text-align: center">
											{{ item.image.sub }}
										</p>
									</v-card-text>
								</v-card>
							</v-card>
						</template>
						<v-card :color="item.color" dark v-if="item.dates != 'December 16, 2022 - December 30, 2022' || new Date().getTime() >= new Date(1671229800000)">
							<v-card-title class="text-h6">
								{{ item.dates }}
							</v-card-title>
							<v-card-text class="text--white" style=" background-color: rgba(0, 0, 0, 0) !important; backdrop-filter: brightness(70%) saturate(130%); ">
								<p class="text-h6 ma-3">
									{{ item.content }}
								</p>
								<v-container>
									<v-btn color="primary" dark v-if="item.worldsInfo" @click="ShowWorlds(item.worldsInfo)" style="height: fit-content; word-wrap: break-word">
										<p class="ma-1 pa-0" style="width: 100%; word-wrap: break-word">
											Check out<br />our Worlds!
										</p>
									</v-btn>
								</v-container>
							</v-card-text>
						</v-card>
					</v-timeline-item>
				</v-timeline>
			</div>
		</ColumnLayout>
	</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
	{
	opacity: 0;
}

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

.rounded-card {
	border-radius: 5em;
}
</style>

<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Our History";
		window.scrollTo({ top: 0, behavior: 'instant' });
	},
	name: "HistoryView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
	},
	props: [],
	data: () => ({
		items: {
			timelineItems: [
				//VRCon 2020
				{
					dates: "December 11, 2020 - December 13, 2020",
					color: "primary",
					icon: "mdi-party-popper",
					image: {
						image: "VRCon 2020 Thumbnail.webp",
						sub: "Image Credit: KisameReason",
					},
					content:
						"This marks the very beginning of our journey of VRCon, where we hosted three days of community events in response to the Covid-19 pandemic. ",
					worldsInfo: {
						groupName: "VRCon 2020",
						worlds: {
							World1: {
								name: "VRCon Confrence Room",
								image: "2020-vrcon-confrence-room.png",
								link: "https://vrch.at/wrld_da7b0546-0855-492f-a910-9562d255e019",
							},
							World2: {
								name: "VRCon Billiards",
								image: "2020-vrcon-billards.png",
								link: "https://vrch.at/wrld_ba4a03a2-26dd-4597-a5a5-924d795c4279",
							},
							World3: {
								name: "VRCon 2020 Day",
								image: "2020-vrcon-day.png",
								link: "https://vrch.at/wrld_56b13c26-6eef-4bfa-8f56-bfbb0e44e76a",
							},
							World4: {
								name: "VRCon 2020 Night",
								image: "2020-vrcon-night.png",
								link: "https://vrch.at/wrld_a182db1b-0b18-4be3-b40b-5d720c7c21b6",
							},
							World5: {
								name: "VRCon 2020 Stage",
								image: "2020-vrcon-stage.png",
								link: "https://vrch.at/wrld_e32e0265-d3a4-4482-8685-a96a34e4dc06",
							},
						},
					},
				},
				//VRCon Biliards 2021
				{
					dates: "March 12, 2021 - March 14, 2022",
					color: "accent",
					icon: "mdi-calendar",
					image: {
						image: "2021 Billiards.png",
						sub: "Image Credit: SladeDaCat",
					},
					content:
						"With VRCon still on everyone's mind, the team here decided to hold a billiards competition.",
				},
				//VRCon Mini Golf 2021
				{
					dates: "April 1, 2021 - April 5, 2021",
					color: "accent",
					icon: "mdi-calendar",
					image: {
						image: "VRCon 2021 Easter Egg Hunt.jpg",
						sub: "Image Credit: VRCon Media Team",
					},
					content:
						"What's Easter without an Easter Egg Hunt? For this month's event, we went with 5 different world creators to hide eggs around their worlds!",
				},
				//VRCon Mini Golf 2021
				{
					dates: "April 23, 2021 - April 25, 2021",
					color: "accent",
					icon: "mdi-calendar",
					image: {
						image: "VRCon 2021 Mini Golf.webp",
						sub: "Image Credit: SladeDaCat",
					},
					content:
						"After the Easter Egg Hunt, the team decided that they wanted to host a mini-golf tournament since the new mini-golf world came out.",
				},
				//VRCon Battle Disc 2021
				{
					dates: "May 22, 2021 - May 23, 2021",
					color: "accent",
					icon: "mdi-calendar",
					image: {
						image: "VRCon Battle Disc.webp",
						sub: "Image Credit: SladeDaCat",
					},
					content:
						"With the Battle Discs world now out, VRCon put on a spectacular contest with the community.",
				},
				//VRCon 2021
				{
					dates: "September 9, 2021 - September 12, 2021",
					color: "primary",
					icon: "mdi-party-popper",
					image: {
						image: "VRCon 2021 Thumbnail.webp",
						sub: "Image Credit: SenpaiVR",
					},
					content:
						"The long awaited VRCon 2021 convention has finally arrived. This year, the team did their best to make it even better than the last one, with a bigger spotlight for booths, more events, and an extra day for the visitors to experience.",
					worldsInfo: {
						groupName: "VRCon 2021",
						worlds: {
							World1: {
								name: "VRCon 2021 Hub",
								image: "2021-vrcon-hub.png",
								link: "https://vrch.at/wrld_9e455e2d-9536-40dc-a36c-a13be3838dca",
							},
							World2: {
								name: "VRCon 2021 Community Festival",
								image: "2021-vrcon-community-festival.png",
								link: "https://vrch.at/wrld_320cdd4c-219d-4c06-82d5-0fb469eec248",
							},
							World3: {
								name: "VRCon 2021 Tree Party Stage",
								image: "2021-vrcon-tree-party-stage.png",
								link: "https://vrch.at/wrld_cdbeebf8-f854-471d-9f2c-b3d7a76095a6",
							},
							World4: {
								name: "VRCon 2021 Cave Theater",
								image: "2021-vrcon-cave-theater.png",
								link: "https://vrch.at/wrld_95221a92-9fa5-4a68-9f9d-c94d9ec20a72",
							},
						},
					},
				},
				//VRCon Scaretacular 2021
				{
					dates: "October 30 2021",
					color: "accent",
					icon: "mdi-calendar",
					image: {
						image: "VRCon Scaretacular.jpeg",
						sub: "Image Credit: Tero",
					},
					content:
						"In the spooky month of October, VRCon held the event 'Scaretacular', which let the community put their worlds and avatars on display to show off their creations.",
				},
				//VRCon Easter 2022
				{
					dates: "April 15, 2022 - April 17, 2022",
					color: "accent",
					icon: "mdi-calendar",
					image: {
						image: "VRCon 2022 Easter.webp",
						sub: "Image Credit: SladeDaCat",
					},
					content:
						"Our second annual VRCon Easter Egg hunt was double than the last year. Keeping with 5 eggs per world and 6 worlds to visit, VRCon gave away cash prizes to 5 random winners who were able to collect them all.",
				},
				//VRCon Pool 2022
				{
					dates: "May 27, 2022 - May 28, 2022",
					color: "accent",
					icon: "mdi-calendar",
					image: {
						image: "VRCon 2022 Pool.webp",
						sub: "Image Credit: SladeDaCat",
					},
					content:
						"Our final Mini-Event for 2022 goes to our Billiards tournament where teams of two compete over 2 days for the championship.",
				},
				//VRCon 2022
				{
					dates: "December 16, 2022 - December 30, 2022",
					color: "primary",
					icon: "mdi-party-popper",
					image: {
						image: "worlds/VRChat_2022-12-14_21-59-15.524_7680x4320.png",
						sub: "Image Credit: SladeDaCat",
					},
					content:
						"VRCon goes Medieval! This year, our team decided to move into a more themed route, giving VRCon a Medieval Makeover, while also giving visitors a full 2 weeks of events!",
					worldsInfo: {
						groupName: "VRCon 2022",
						worlds: {
							Hub: {
								name: "VRCon 2022 Hub",
								image: "VRCon_2022_Hub.png",
								link: "https://vrchat.com/home/world/wrld_336b58c0-8105-4afb-ad10-80ed106a5341",
							},
							Stage: {
								name: "VRCon 2022 Stage",
								image: "VRCon_2022_Stage.png",
								link: "https://vrchat.com/home/world/wrld_84f57687-5e08-4981-8253-fd12e1697596",
							},
							Day: {
								name: "VRCon 2022 Dawn",
								image: "VRCon_2022_B.png",
								link: "https://vrchat.com/home/world/wrld_3f6b1425-e191-4d1e-902f-b38ebf68576c",
							},
							Dusk: {
								name: "VRCon 2022 Dusk",
								image: "VRCon_2022_C.png",
								link: "https://vrchat.com/home/world/wrld_e66d3e56-bf8a-49fc-ae70-54759d58ec28",
							},
							Night: {
								name: "VRCon 2022 Day",
								image: "VRCon_2022_A.png",
								link: "https://vrchat.com/home/world/wrld_1cef76fc-2f04-4e7d-89a8-a490c509dd0c",
							},
						},
					},
				},
			],
	},
		dialog: false,
	worlds: null,
	expand: false,
	show: true,
}),
methods: {
	isValidHttpUrl(string) {
		let url;
		try {
			url = new URL(string);
		} catch (_) {
			return false;
		}
		return url.protocol === "http:" || url.protocol === "https:";
	},
	ShowWorlds(worlds) {
		this.dialog = true;
		setTimeout(() => (this.worlds = worlds), 1500);
	},
},
};
</script>