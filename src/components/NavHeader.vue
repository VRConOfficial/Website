<template>
	<v-app-bar dark fixed dense :color="bg" hide-on-scroll>
		<v-app-bar-nav-icon @click="onButton"></v-app-bar-nav-icon>
		<ColumnLayout>
			<v-toolbar-title>VRCon 2022</v-toolbar-title>
		</ColumnLayout>
		<div class="text-center" v-if="store.debugValue">
			<v-row>
				<v-col cols="6">
					{{ store.theDate }}
				</v-col>
				<v-col cols="6">
					<v-dialog v-model="dialog" max-width="500px">
						<template v-slot:activator="{ on, attrs }">
							<v-btn color="primary" dark v-bind="attrs" v-on="on">
								Debug: Change Date and Time
							</v-btn>
						</template>
						<v-card>
							<v-card-title class="text-h5 grey lighten-2">
								Set Date and Time
							</v-card-title>

							<!-- Date -->
							<v-date-picker v-model="date" :landscape="true" :reactive="true"></v-date-picker>

							<!-- Time -->
							<v-time-picker v-model="time" :landscape="$vuetify.breakpoint.smAndUp" ampm-in-title></v-time-picker>

							<!-- TimeZone -->
							<v-menu offset-y max-height="25%">
								<template v-slot:activator="{ on, attrs }">
									<v-btn color="primary" dark v-bind="attrs" v-on="on">
										{{ timezones[timezoneIndex] }}
									</v-btn>
								</template>
								<v-list>
									<v-list-item v-for="(timeZone, index) in timezones" :key="index">
										<v-btn color="primary" @click="setTimezone(index)">{{
												timeZone
										}}</v-btn>
									</v-list-item>
								</v-list>
							</v-menu>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="primary" text @click="(dialog = false), setDebugDate()">
									Set Date and Time
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-col>
			</v-row>
		</div>
	</v-app-bar>
</template>

<style scoped>

</style>

<script>
import ColumnLayout from "@/components/ColumnLayout.vue";
import { store } from '@/assets/Data/GlobalVars/store.js';

export default {
	mounted() {
	},
	name: "NavHeader",
	components: {
		ColumnLayout,
	},
	data: () => ({
		bg: "primary",
		date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
		time: (new Date().getHours() < 10 ? ("0" + new Date().getHours()) : new Date().getHours()) + ":" + new Date().getMinutes(),
		timeZone: -5,
		dateTime: new Date(),
		dialog: false,
		timezoneIndex: 0,
		timezones: [
			"Pacific/Niue", // -11
			"US/Hawaii", // -10
			"America/Anchorage", // -9
			"America/Los_Angeles", // -8
			"America/Boise", // -7
			"America/Chicago", // -6
			"America/New_York", // -5
			"America/Aruba", // -4
			"America/Buenos_Aires", // -3
			"Brazil/DeNoronha", // -2,
			"Atlantic/Azores", // -1
			"UTC", // 0
			"Europe/Amsterdam", // +1
			"Europe/Athens", // +2
			"Europe/Moscow", // +3
			"Indian/Mahe", // +4
			"Asia/Ashgabat", // +5
			"Asia/Dhaka", // +6
			"Asia/Bangkok", // +7
			"Asia/Hong_Kong", // +8
			"Asia/Pyongyang", // +9
			"Australia/Sydney", // +10
			"Asia/Magadan", // +11
		],
		store,

	}),
	methods: {
		onButton() {
			this.$emit("navDrawerOpen");
		},
		setTimezone(index) {
			var timezone = index - 11;
			this.timezoneIndex = index;
			this.timeZone = timezone;
		},
		setDebugDate() {
			var tzHour = "";
			tzHour = this.timeZone;
			var tz = "";
			if (tzHour >= 10) tz = "+" + tzHour;
			else if (tzHour >= 0) tz = "+0" + tzHour;
			else if (tzHour > -10) tz = "-0" + Math.abs(tzHour);
			else tz = tzHour;
			tz += ":00";

			var time = this.time.split(":");
			var hr = parseInt(time[0], 10);
			var mn = parseInt(time[1], 10);
			store.theDate = new Date(this.date + "T" + (hr < 10 ? "0" + hr : hr) + ":" + (mn < 10 ? "0" + mn : mn) + tz);
			this.$forceUpdate()
		},
	},
};
</script>