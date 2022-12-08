<template>
	<v-card class="mx-auto darkened" color="transparent" dark>
		<v-toolbar color="primary">
			<v-toolbar-title>{{
					dayjs(events[0].time).format("ddd - MMMM D YYYY")
			}}</v-toolbar-title>
		</v-toolbar>
		<v-list color="transparent">
			<v-list-group v-for="(event, index) in events" :key="index" prepend-icon="mdi-calendar-check" no-action :class="datePassedStyle(event)">
				<template v-slot:activator>
					<v-list-item-content>
						<v-list-item-title v-if="datePassedStyle(event) == 'date-passed'" v-text="('(Event Over) ' + event.properties['Event Name'])"></v-list-item-title>
						<v-list-item-title v-else-if="eventHapening(event)">
							<strong>(Event is Live)</strong> {{ event.properties['Event Name'] }}
						</v-list-item-title>
						<v-list-item-title v-else-if="happeningSoon(event)">
							<strong>(Happening Soon...)</strong> {{ event.properties['Event Name'] }}
						</v-list-item-title>
						<v-list-item-title v-else v-text="
							dayjs(event.time).format('h:mm A') +
							' : ' +
							event.properties['Event Name']
						"></v-list-item-title>
					</v-list-item-content>
				</template>

				<v-list-item class="darkened ma-0 pa-4">
					<v-list-item-content>
						<v-container>
							<v-row justify="center" align="center">
								<v-col cols="12" v-if="event.properties['Event Name']" class="text-h2 text-center">
									{{ event.properties["Event Name"] }}
								</v-col>
							</v-row>
							<v-row>
								<v-col cols="12" class="text-center text-h6 font-weight-light ma-1">
									<div v-if="event.properties['End Time'] && event.time">
										{{ dayjs(event.time).format("h:mm a") }} to
										{{ dayjs(event.properties['End Time']).format("h:mm a") }}
										({{ dayjs.tz.guess() }})
									</div>

									<div v-if="event.properties['Type of Event']">
										{{ event.properties['Type of Event'] }}
									</div>
								</v-col>
							</v-row>
							<v-row justify="center" align="center">
								<v-col cols="5" sm="5" md="5" lg="5" xl="5" class="ma-1" v-if="event.properties['Event Image Link']">
									<ImageVue v-if="!withinTime(event)" :link="getImageLink(event.properties['Event Image Link'])"></ImageVue>
									<twitch-stream v-if="(withinTime(event) && event.properties['Stream Link'])" :channel="getChannel(event)" height="240" width="400" theme="dark" />

								</v-col>
								<v-col cols="5" sm="5" md="5" lg="5" xl="5" class="ma-1" v-else>
									<v-img v-if="!withinTime(event)" :src="require('@/assets/images/placeholder.webp')"></v-img>
									<twitch-stream v-if="(withinTime(event) && event.properties['Stream Link'])" :channel="getChannel(event)" height="240" width="400" theme="dark" />
								</v-col>
								<v-col cols="11" sm="11" md="11" lg="6" xl="6" class="ma-5 text-h6 font-weight-light" v-if="event.properties['Marketing Description']">
									<p>{{ event.properties['Marketing Description'] }}</p>
								</v-col>
								<v-col cols="11" sm="11" md="11" lg="6" xl="6" class="ma-5 text-h6 font-weight-light" v-else></v-col>
							</v-row>
							<v-row justify="center" align="center">
								<v-col cols="1" class="ma-1" v-if="event.properties['Event Image Link']"></v-col>
							</v-row>
						</v-container>
					</v-list-item-content>
				</v-list-item>
			</v-list-group>
		</v-list>
	</v-card>
</template>

<style scoped>
.date-passed {
	filter: grayscale(100%);
}
</style>

<script>
import { store } from "@/assets/Data/GlobalVars/store.js";
import ImageVue from "./Image.vue";
import 'twitch-stream-embed';

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(timezone);
dayjs.extend(utc);

export default {
	name: "AccordionListEvents",
	components: {
		ImageVue,
	},
	props: ["events"],
	data: () => ({
		store,
		dayjs: dayjs,
	}),
	methods: {
		getProperty(event, givenProperty) {
			try {
				return event.properties.find(
					(property) => property.name == givenProperty
				).content;
			} catch (error) {
				return false;
			}
		},
		getImageLink(link) {
			var linkToParse
			if (link.includes("drive")) {
				console.log("Link is Google Drive")
				console.log(link)
				linkToParse = link;
			}
			else {
				return link
			}

			if (linkToParse) {
				linkToParse = linkToParse.replaceAll("https://drive.google.com/file/d/", "").replaceAll("/view?usp=sharing", "")
				console.log(linkToParse)
				linkToParse = "https://drive.google.com/uc?export=view&id=" + linkToParse
				return linkToParse
			}
		},
		withinTime(event) {
			var now = store.debugValue ? store.theDate.getTime() : new Date().getTime();
			var startTime = event.time
			var endTime = event.properties['End Time']

			if (now >= startTime && now <= endTime) return true;
			return false
		},
		getChannel(event) {
			var link = event.properties['Stream Link'];
			var channel = event.properties['Stream Link'].replaceAll("www.", "").replaceAll("https://", "").replaceAll('twitch.tv/', '')
			return channel

		},
		datePassedStyle(event) {
			let date = store.debugValue ? store.theDate.getTime() : new Date().getTime();
			if (date > event.properties['End Time']) return "date-passed";
			return "";
		},
		eventHapening(event) {
			let date = store.debugValue ? store.theDate.getTime() : new Date().getTime();
			if (date >= event.time && date <= event.properties['End Time']-1) return true
			return false
		},
		happeningSoon(event) {
			let date = store.debugValue ? store.theDate.getTime() : new Date().getTime();
			let triggerTime = event.time - 15 * 1000 * 60;

			console.log(new Date(date))

			console.log(new Date(triggerTime))

			console.log(new Date(store.theDate.getTime()))

			if (date <= event.time && date >= triggerTime) return true
			return false
		},
		formatDate(unixDate) {
			return new Date(unixDate).toLocaleTimeString();
		},
	},
};
</script>