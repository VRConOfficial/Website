<template>
	<v-card class="mx-auto accordion" color="transparent" dark>
		<v-toolbar color="primary">
			<v-toolbar-title>{{
				new Date(events[0].time).toDateString()
			}}</v-toolbar-title>
		</v-toolbar>
		<v-list color="transparent">
			<v-list-group
				v-for="(event, index) in events"
				:key="index"
				prepend-icon="mdi-calendar-check"
				no-action
				:class="datePassedStyle(event)"
			>
				<template v-slot:activator>
					<v-list-item-content>
						<v-list-item-title
							v-if="datePassedStyle(event) == 'date-passed'"
							v-text="'(Event Over) ' + getProperty(event, 'Event Name')"
						></v-list-item-title>
						<v-list-item-title
							v-else
							v-text="
								new Date(event.time).toLocaleTimeString() +
								' | ' +
								getProperty(event, 'Event Name')
							"
						></v-list-item-title>
					</v-list-item-content>
				</template>
				<v-list-item class="accordion">
					<v-list-item-content class="ma-md-4 ma-sm-0">
						<v-container>
							<v-row justify="center" align="center">
								<v-col cols="12" v-if="getProperty(event, 'Event Name')">
									<div class="py-sm-4" style="white-space: pre-wrap">
										{{ getProperty(event, "Event Name") }}
									</div>
								</v-col>
								<v-col cols="12" v-if="getProperty(event, 'End Time')">
									<div style="white-space: pre-wrap">
										Starting Time: {{ new Date(event.time).toTimeString() }}
									</div>
									<div style="white-space: pre-wrap">
										Ending Time:
										{{
											new Date(getProperty(event, "End Time")).toTimeString()
										}}
									</div>
								</v-col>
							</v-row>
						</v-container>
					</v-list-item-content>
				</v-list-item>
			</v-list-group>
		</v-list>
	</v-card>
</template>

<style scoped>
.accordion {
	backdrop-filter: brightness(80%) saturate(120%);
}
.date-passed {
	filter: grayscale(100%);
}
</style>

<script>
export default {
	name: "AccordionListEvents",
	components: {},
	props: ["events"],
	data: () => ({}),
	methods: {
		getProperty(event, givenProperty) {
			return event.properties.find((property) => property.name == givenProperty)
				.content;
		},
		datePassedStyle(event) {
			if (new Date() > this.getProperty(event, "End Time"))
				return "date-passed";
			return "";
		},
		formatDate(unixDate) {
			return new Date(unixDate).toLocaleTimeString();
		},
	},
};
</script>