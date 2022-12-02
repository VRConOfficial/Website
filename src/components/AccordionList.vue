<template>
	<v-card class="mx-auto darkened" color="transparent" dark>
		<v-toolbar v-if="title" color="primary">
			<v-toolbar-title>{{ title }}</v-toolbar-title>
		</v-toolbar>
		<v-list color="transparent">
			<v-list-group
				v-for="item in items"
				:key="item.title"
				v-model="item.active"
				:prepend-icon="item.action"
				no-action
			>
				<template v-slot:activator>
					<v-list-item-content>
						<v-list-item-title v-text="item.title"></v-list-item-title>
					</v-list-item-content>
				</template>
				<v-list-item class="pa-4 darkened">
					<v-list-item-content class="ma-md-6 ma-sm-0">
						<v-container>
							<v-row justify="center" align="center">
								<v-col cols="auto" v-if="item.item.image || item.item.title">
									<v-row justify="center" align="center">
										<v-col
											cols="12"
											sm="4"
											md="4"
											lg="4"
											v-if="item.item.image"
										>
											<v-img
												width="100%"
												height="100%"
												:src="
													require('@/assets/images/tiles/' + item.item.image)
												"
											/>
										</v-col>
										<v-col
											cols="auto"
											v-if="item.item.title && item.item.image"
											class="text-h4"
										>
											{{ item.item.title }}
										</v-col>
									</v-row>
								</v-col>
								<v-col
									cols="12"
									v-if="item.item.content"
									class="py-sm-4 text-center"
								>
									{{ item.item.content }}
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
</style>

<script>
export default {
	name: "AccordionList",
	components: {},
	props: ["items", "title"],
	data: () => ({}),
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
				if (Object.values(arr)[i] != "") {
					array[j] = Object.values(arr)[i];
					j++;
				}
			}
			return array;
		},
	},
};
</script>