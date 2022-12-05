<template>
	<v-card class="mx-auto accordion" color="transparent" dark>
		<v-toolbar v-if="title" color="primary">
			<v-toolbar-title>{{ title }}</v-toolbar-title>
		</v-toolbar>
		<v-list color="transparent">
			<v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action :class="datePassedStyle(item)">
				<template v-slot:activator>
					<v-list-item-content>
						<v-list-item-title v-if="datePassedStyle(item) == 'date-passed'" v-text="'(Event Time Passed) ' + item.title"></v-list-item-title>
						<v-list-item-title v-else-if="item.date" v-text="formatDate(item.date) + ' | ' + item.title"></v-list-item-title>
						<v-list-item-title v-else v-text="item.title"></v-list-item-title>
					</v-list-item-content>
				</template>
				<v-list-item class="accordion">
					<v-list-item-content class="ma-md-6 ma-sm-0">
						<v-container>
							<v-row justify="center" align="center">
								<v-col cols="12" sm="4" md="4" lg="4" v-if="item.item.image">
									<v-img :src="require('@/assets/images/tiles/' + item.item.image)" />
								</v-col>
								<v-col cols="12" sm="8" md="7" lg="6" v-if="item.item.title">
									<p class="text-h4">{{ item.item.title }}</p>
								</v-col>
								<v-col cols="12" v-if="item.item.content">
									<p class="py-sm-4" style="white-space:pre-wrap;">
										{{ item.item.content }}
									</p>
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
	name: "AccordionList",
	components: {},
	props: ["items", "title"],
	data: () => ({}),
	methods: {
		datePassedStyle(item) {
			if (item.date) {
				if (new Date(item.date) < Date.now() / 1000) {
					return "date-passed";
				}
			}
			return "";
		},
		formatDate(unixDate) {
			return new Date(unixDate * 1000).toLocaleTimeString();
		},
	},
};
</script>