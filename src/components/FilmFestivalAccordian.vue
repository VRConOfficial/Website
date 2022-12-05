<template>
	<v-card class="mx-auto darkened" color="transparent" dark>
		<v-toolbar color="primary">
			<v-toolbar-title>
				{{ film.name }}
			</v-toolbar-title>
		</v-toolbar>
		<div class="py-3 px-4 filmCard">
			<LazyYoutube v-if="film.trailer" :src="film.trailer" class="filmCardItem" />
			<div class="filmCardItem">
				<h3>director: {{ film.director }}</h3>
				<h4>Cast: {{ film.credits }}</h4>
				<h5>{{ film.about }}</h5>
			</div>
		</div>
	</v-card>
</template>

<style scoped>
.filmCard {
	display: flex;
}

.filmCardItem {
	margin: auto 2em;
}
</style>

<script>
import { LazyYoutube } from 'vue-lazytube'
export default {
	mounted() { },
	name: 'VrconwebsiteFilmFestivalAccordian',
	components: {
		LazyYoutube
	},
	props: ["film"],
	data: () => ({

	}),
	methods: {},
};
</script>