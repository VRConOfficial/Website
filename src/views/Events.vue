<template :key="componentKey">
	<div>
		<FullBack>
			<ColumnLayout class="py-16">
				<div class="white--text">
					<SectionBanner text="Events" />
				</div>
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="py-8">
			<div class="white--text">
				<div class="py-8">
					<v-card flat tile color="transparent">
						<v-row>
							<v-col class="white--text">
								<p width="100%" class="ma-0"><v-icon color="white">mdi-information-variant</v-icon> All events are shown in your local timezone (UTC{{new Date().getTimezoneOffset()/-60 > 0 ? "+" + new Date().getTimezoneOffset()/-60 : new Date().getTimezoneOffset()/-60}})</p>
							</v-col>
						</v-row>
						<v-card-actions style="width: 100%" class="justify-space-around">
							<div style="width: 100%;">
								<v-row class="mb-1" no-gutters>
									<v-col cols="2">
										<v-btn outlined block @click="prev" color="primary" class=" darkened " v-if=" onboarding - 1 >= 0 ">
											<v-icon>mdi-chevron-left</v-icon>
										</v-btn>
									</v-col>
									<v-col cols="8">
										<v-item-group v-model="onboarding" class=" text-center" mandatory width="100%">
											<v-window v-model="onboarding">
												<v-window-item v-for="(day, index) in uniqueTimestamps" :key="index">
													<v-row justify="center" align="center">
														<v-col cols="10">
															<v-icon class=" primary--text ">{{ day }}</v-icon>
														</v-col>
													</v-row>
												</v-window-item>
											</v-window>
										</v-item-group>
									</v-col>
									<v-col cols="2">
										<v-btn outlined block @click="next" color="primary" class="darkened" v-if="onboarding + 1 != uniqueTimestamps.length">
											<v-icon>mdi-chevron-right</v-icon>
										</v-btn>
									</v-col>
								</v-row>
							</div>
							<!-- <div v-else style="max-width: 100%">
							<v-row class="mb-1">
								<v-col
									cols="1"
									style="
										display: flex;
										justify-content: center;
										align-items: center;
									"
								>
									<v-btn
										text
										@click="prev"
										color="white"
										v-if="onboarding - 1 >= 0"
									>
										<v-icon>mdi-chevron-left</v-icon
										><v-icon>mdi-chevron-left</v-icon>
									</v-btn>
								</v-col>
								<v-col cols="10">
									<v-item-group
										v-model="onboarding"
										class="text-center"
										mandatory
										width="100%"
									>
										<v-window v-model="onboarding">
											<v-window-item
												v-for="(day, index) in uniqueTimestamps[0]"
												:key="index"
											>
												<v-row justify="center" align="center">
													<v-col cols="10">
														<v-btn color="primary" width="100%">
															<v-icon>{{ day }}</v-icon>
														</v-btn>
													</v-col>
												</v-row>
											</v-window-item>
										</v-window>
									</v-item-group>
								</v-col>
								<v-col
									cols="1"
									style="
										display: flex;
										justify-content: center;
										align-items: center;
									"
								>
									<div v-if="uniqueTimestamps[0]">
										<v-btn
											text
											@click="next"
											color="white"
											v-if="onboarding + 1 != uniqueTimestamps[0].length"
										>
											<v-icon>mdi-chevron-right</v-icon
											><v-icon>mdi-chevron-right</v-icon>
										</v-btn>
									</div>
								</v-col>
							</v-row>
						</div> -->
						</v-card-actions>
						<v-window v-model="onboarding">
							<v-window-item v-for="( day, index ) in days" :key="index">
								<div v-if="Debugging() || ReadyToShowEvents()">
									<EventAccordionList :events="day" />
								</div>
								<div v-else>
									<p style=" color: White; text-align: center;">
										The events schedule has not been posted live yet. Please come check again later!
									</p>
								</div>
							</v-window-item>
						</v-window>
					</v-card>
				</div>
			</div>
		</ColumnLayout>
	</div>
</template>

<style scoped>

</style>

<script>
/* eslint-disable */
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import EventAccordionList from "@/components/EventAccordionList.vue";
import Events from "@/assets/Data/EventData/events.json";
import { store } from "@/assets/Data/GlobalVars/store.js";

export default {
	mounted() {
		document.title = "VRCon 2022 | Events";
		window.scrollTo({ top: 0, behavior: "instant" });

		this.setEvents();
		this.Debugging();

		// this.screenWidth = window.innerWidth;
		// window.onresize = () => {
		// 	this.screenWidth = window.innerWidth;
		// };

		// console.log(this.uniqueTimestamps);
	},

	name: "EventsView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
		EventAccordionList,
	},
	props: [],
	data: () => ({
		title: "",
		items: [{}],
		events: Events,
		uniqueTimestamps: [],
		days: [],
		onboarding: 0,
		date: new Date(),
		store,
	}),
	watch: {
		"store.theDate": function (val, oldVal) {
			this.setEvents();
		},
	},
	methods: {
		setEvents() {
			let events = Events;
			let uniqueDays = [];
			let uniqueTimestamps = [];
			const monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December",
			];
			for (let i = 0; i < events.length; i++) {
				let event = events[i];
				let unix_timestamp = event.time;
				let date = new Date(unix_timestamp);
				let dotm = date.getDate();
				let dateStr = monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
				uniqueDays.push(dotm);
				if (!uniqueTimestamps.includes(dateStr)) uniqueTimestamps.push(dateStr);
			}

			// uniqueTimestamps = Array.from(new Set(uniqueTimestamps));
			this.uniqueTimestamps = uniqueTimestamps;

			uniqueDays = Array.from(new Set(uniqueDays));
			for (
				let index = 0;
				index < uniqueDays.length;
				index++
			) {
				let day = uniqueDays[index];
				let newEventsarray = events.filter((el) => new Date(el.time).getDate() == day);
				this.days.push(newEventsarray);
			}

			//set position in onboarding
			let currentDate = new Date();
			let debugDate = new Date(store.theDate);
			let today = this.Debugging() ? debugDate : currentDate;
			var todayDateStr = monthNames[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();

			for (let i = 0; i < this.uniqueTimestamps.length; i++) {
				let dateToCheck = this.uniqueTimestamps[i];
				if (new Date(todayDateStr) <= new Date(dateToCheck)) {
					this.onboarding = i;
					break;
				}
			}
		},
		next() {
			this.onboarding = this.onboarding + 1 === this.uniqueTimestamps.length ? this.onboarding : this.onboarding + 1;
		},
		prev() {
			this.onboarding = this.onboarding - 1 < 0 ? this.uniqueTimestamps.length : this.onboarding - 1;
		},
		ReadyToShowEvents() {
			return true; //Change to true when Events are ready to be shown
		},

		Debugging() {
			return store.debugValue;
		},
	},
};
</script>