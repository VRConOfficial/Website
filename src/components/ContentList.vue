<template>
	<v-container class="my-12">
		<v-row v-for="(listItem, index) in content" :key="index" justify="center">
			<!-- <v-col cols="3" sm="3" md="2" lg="2">
				<v-avatar color="primary" size="80"
					><v-img
						class="avatar"
						:src="require('@/assets/images/avatars/' + listItem.avatar)"
					></v-img
				></v-avatar>
			</v-col> -->
			<v-col cols="11" sm="10" md="10" lg="10"><v-card color="background darken-1" align="left" justify="center" dark>
					<v-avatar color="primary" size="128" class="avatar"><v-img :src="require('@/assets/images/tiles/' + listItem.avatar)"></v-img></v-avatar>
					<v-sheet class="sheet background darken-2 pa-8">
						{{ listItem.text }}
					</v-sheet>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
.avatar {
	position: relative;
	top: -10px;
	left: -40px;
	border: 6px solid;
}

.sheet {
	display: inline-block;
	width: 80%;
	height: 100%;
	position: relative;
	left: 20px;
}
</style>

<script>
export default {
	name: "ContentList",
	components: {},
	props: ["content"],
	data: () => ({
		avatarPath: "assets/images/tiles/",
	}),
	methods: {},
};
</script>