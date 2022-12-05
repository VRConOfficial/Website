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
						<v-list-item-title v-if="datePassedStyle(event) == 'date-passed'" v-text="'(Event Over) ' + getProperty(event, 'Event Name')"></v-list-item-title>
						<v-list-item-title v-else v-text="
							dayjs(event.time).format('h:mm A') +
							' : ' +
							getProperty(event, 'Event Name')
						"></v-list-item-title>
					</v-list-item-content>
				</template>

				<v-list-item class="darkened ma-0 pa-4">
					<v-list-item-content>
						<v-container>
							<v-row justify="center" align="center">
								<v-col cols="12" v-if="getProperty(event, 'Event Name')" class="text-h2 text-center">
									{{ getProperty(event, "Event Name") }}
								</v-col>
							</v-row>
							<v-row>
								<v-col cols="12" class="text-center text-h6 font-weight-light ma-1">
									<div v-if="getProperty(event, 'End Time') && event.time">
										{{ dayjs(event.time).format("h:mm a") }} to
										{{ dayjs(getProperty(event, "End Time")).format("h:mm a") }}
										({{ dayjs.tz.guess() }})
									</div>
									<div v-if="getProperty(event, 'Event Host VRChat UserName')">
										Event Host Username:
										{{ getProperty(event, "Event Host VRChat UserName") }}
									</div>
									<div v-if="getProperty(event, 'Links')">
										Links: {{ getProperty(event, "Links") }}
									</div>
								</v-col>
							</v-row>
							<v-row justify="center" align="center">
								<v-col cols="5" sm="5" md="5" lg="5" xl="5" class="ma-1" v-if="getProperty(event, 'Event Image Link')"></v-col>
								<v-col cols="5" sm="5" md="5" lg="5" xl="5" class="ma-1" v-else>
									<v-img :src="require('@/assets/images/placeholder.webp')"></v-img>
								</v-col>
								<v-col cols="11" sm="11" md="11" lg="6" xl="6" class="ma-5 text-h6 font-weight-light" v-if="getProperty(event, 'Event Details')"></v-col>
								<v-col cols="11" sm="11" md="11" lg="6" xl="6" class="ma-5 text-h6 font-weight-light" v-else>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Assumenda obcaecati autem dolorum! Cupiditate quae harum nulla
									veritatis eligendi voluptate numquam reprehenderit voluptatem
									similique deserunt minus a, est architecto ducimus sit.
								</v-col>
							</v-row>
							<v-row justify="center" align="center">
								<v-col cols="1" class="ma-1" v-if="getProperty(event, 'Event Image Link')"></v-col>
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
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(timezone);
dayjs.extend(utc);

export default {
	name: "AccordionListEvents",
	components: {},
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
		datePassedStyle(event) {
			let date = store.debugValue ? store.theDate : new Date();
			if (date > this.getProperty(event, "End Time")) return "date-passed";
			return "";
		},
		formatDate(unixDate) {
			return new Date(unixDate).toLocaleTimeString();
		},
	},
};
</script>