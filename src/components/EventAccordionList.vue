<template>
	<v-card class="mx-auto darkened" color="transparent" dark>
		<v-toolbar color="primary">
			<v-toolbar-title>
				{{ dayjs(events[0].time).format("ddd - MMMM D YYYY") }}
			</v-toolbar-title>
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
									<div v-if="event.properties.Quest">
										Quest Compatible?: <strong>{{ event.properties.Quest.toString() == "FALSE" ? "No" : "Yes" }}</strong>
									</div>
									<div v-if="(event.properties['How to join?/Bot'])">
										How to Join: <span v-html="grabJoinData(event)"></span>
									</div>
									<br>
									<div v-if="event.properties['Stream Link']">
										Want to watch it live? Watch it <a :href="event.properties['Stream Link']">HERE</a>
									</div>
								</v-col>
							</v-row>
							<v-row justify="center" align="center">
								<v-col cols="5" sm="5" md="5" lg="5" xl="5" class="ma-1" v-if="event.properties['Event Image Link']">
									<ImageVue v-if="!withinTime(event)" :link="getImageLink(event.properties['Event Image Link'])"></ImageVue>
									<twitch-stream v-if="(withinTime(event) && event.properties['Stream Link'])" :channel="getChannel(event)" height="240" width="400" theme="dark" />
								</v-col>
								<v-col cols="5" sm="5" md="5" lg="5" xl="5" class="ma-1" v-else-if="store.debugValue">
									<v-img v-if="!withinTime(event) || store.debugValue" :src="require('@/assets/images/placeholder.webp')"></v-img>
									<twitch-stream v-if="(withinTime(event) && event.properties['Stream Link'])" :channel="getChannel(event)" height="240" width="400" theme="dark" />
								</v-col>
								<v-col cols="11" sm="11" md="11" lg="6" xl="6" class="ma-5 text-h6 font-weight-light" v-if="event.properties['Marketing Description']">
									<p v-html="generateWhiteSpace(event.properties['Marketing Description'].toString())"></p>
									<div class="ma-auto" style="width:fit-content">
										<v-dialog v-model="trailer" width="auto" v-if="event.properties['Links'] && event.properties['Event Name'].toLowerCase().includes('screening')">
											<template v-slot:activator="{ on, attrs }">
												<v-btn color="primary" dark v-bind="attrs" v-on="on">
													Watch the Trailer
												</v-btn>
											</template>
											<div 
											v-if="trailer"
											style="width: 90vh; max-width: 90vw">
												<LazyYoutube ref="lazyVideo" :src="event.properties.Links" max-width="80vw"/>
											</div>
										</v-dialog>
									</div>
								</v-col>
							</v-row>
							<v-row justify="center" align="center">
								<v-col cols="1" style="margin: 0 auto" v-if="event.properties['Event Image Link']"></v-col>
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

.v-dialog_content {
	justify-content: center;
}

.filmCardItem {
	margin: auto 2em;
}
.showVideo { 
	display: block
}
.hideVideo {
	display: none;
}
</style>

<script>
import { store } from "@/assets/Data/GlobalVars/store.js";
import bots from "@/assets/Data/VRCon VRCUserIDS/VRConBots.json"
import ImageVue from "./Image.vue";
import 'twitch-stream-embed';
import { LazyYoutube } from 'vue-lazytube'

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(timezone);
dayjs.extend(utc);

export default {
	name: "AccordionListEvents",
	components: {
		ImageVue,
		LazyYoutube
	},
	props: ["events"],
	data: () => ({
		store,
		dayjs: dayjs,
		trailer: false,
		video: true,
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
				linkToParse = link;
			}
			else {
				return link
			}

			if (linkToParse) {
				linkToParse = linkToParse.replaceAll("https://drive.google.com/file/d/", "").replaceAll("/view?usp=sharing", "").replaceAll("/view", "")
				linkToParse = "https://drive.google.com/uc?export=view&id=" + linkToParse
				return linkToParse
			}
		},

		generateWhiteSpace(string) {
			return string.replace(/\n/g, "<br />")

		},

		grabJoinData(event) {
			var property = event.properties['How to join?/Bot']
			var resp = ""

			if (property.toLowerCase().includes("vrcon bot")) {
				var b = event.properties['How to join?/Bot'].toLowerCase().split('\n')
				var links0 = [];
				for (let i = 0; i < b.length; i++) {
					var link;
					if (property.includes('1')) {
						link = 'https://vrchat.com/home/user/' + bots.VRCon1.UserID
					}
					if (property.includes('2')) {
						link = 'https://vrchat.com/home/user/' + bots.VRCon2.UserID
					}
					if (property.includes('3')) {
						link = 'https://vrchat.com/home/user/' + bots.VRCon3.UserID
					}
					links0.push(link)
				}
				resp = "Request Invite from "
				for (let linkIndex = 0; linkIndex < links0.length; linkIndex++) {
					var or = links0.length > 0 && linkIndex + 1 < links0.length ? " or " : ""
					resp += `<a href="` + link + `" target="_blank">` + b[linkIndex].toUpperCase() + `</a>` + or
				}
			} else if (property.toLowerCase().includes("sign-up")) {
				resp = "<a href='https://www.vrcon.online/ffsignup'> Sign-Up </a>"
			} else if (property.toLowerCase().includes("group")) {
				resp = "<a href='https://vrchat.com/home/group/grp_338caf29-7d15-4db0-bac7-f2016a17d4d6' target='_blank'>Join the VRCon Group on VRChat</a>"
			} else if (property.toLowerCase().includes("laserdome")) {
				resp = "Join the <a href='https://discord.gg/Laserdome' target='_blank'>xCirrex Media Discord</a> and fill out the form in <a href='https://discord.com/channels/710976212570210327/718215364265246892/1051922487249731634' target='_blank'>#tournament-signup</a>"
			}
			return resp
			// document.getElementById('HowToJoin').innerHTML = resp
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
			var channel = link.replaceAll("www.", "").replaceAll("https://", "").replaceAll('twitch.tv/', '')
			return channel

		},

		datePassedStyle(event) {
			let date = store.debugValue ? store.theDate.getTime() : new Date().getTime();
			if (date > event.properties['End Time']) return "date-passed";
			return "";
		},

		eventHapening(event) {
			let date = store.debugValue ? store.theDate.getTime() : new Date().getTime();
			if (date >= event.time && date <= event.properties['End Time'] - 1) return true
			return false
		},

		happeningSoon(event) {
			let date = store.debugValue ? store.theDate.getTime() : new Date().getTime();
			let triggerTime = event.time - 15 * 1000 * 60;
			if (date <= event.time && date >= triggerTime) return true
			return false
		},

		formatDate(unixDate) {
			return new Date(unixDate).toLocaleTimeString();
		},

	},
	watch: {}
};
</script>