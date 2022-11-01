<template>
	<v-card class="mx-auto accordion" color="transparent" dark>
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

				<v-list-item class="accordion">
					<v-list-item-content class="ma-md-6 ma-sm-0">
						<v-container>
							<v-row justify="center" align="center">
								<v-col cols="12" sm="4" md="4" lg="4" v-if="item.item.image">
									<v-img
										:src="require('@/assets/images/tiles/' + item.item.image)"
									/>
									<!-- <v-img :src="require('@/assets/images/tiles/' + item.item.image)"/> -->
									<!-- <v-img src="@/assets/images/tiles/placeholder.webp" /> -->
								</v-col>
								<v-col cols="12" sm="8" md="7" lg="6" v-if="item.item.title">
									<p class="text-h4">{{ item.item.title }}</p>
								</v-col>
								<v-col cols="12" v-if="item.item.content">
									<p class="py-sm-4">{{ item.item.content }}</p>
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
</style>

<script>
export default {
	mounted() {
		document.title = "VRCon 2022 | FAQ";
	},
	name: "AccordionList",
	components: {},
	props: ["items", "title"],
	data: () => ({}),
	methods: {},
};
</script>