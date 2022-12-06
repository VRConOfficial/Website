<template :key="componentKey">
	<div>
		<FullBack>
			<ColumnLayout class="py-8 pt-16">
				<SectionBanner text="Film Festival" />
			</ColumnLayout>
		</FullBack>

		<ColumnLayout class="py-16 white--text">
			<!-- <LazyYoutube src="https://www.youtube.com/watch?v=g82UH0v574o" :showTitle="false" maxWidth="100%" class="mx-auto" /> -->
			<v-row>
				<v-col>
					<v-select v-model=searchTerm :items="genres" label="Filter By Genre" multiple outlined class="transparent" color="accent" dark />
				</v-col>
				<v-col>
					<div class="mx-auto" style="width: fit-content"><v-btn class="ma-auto" to="/ffsignup">Sign up to Attend!</v-btn></div>
				</v-col>
			</v-row>

			<v-pagination v-model="page" :length="Math.ceil(filteredFilms.length / 4)" :total-visible="7" />
			<div v-for="(film, idx) in filteredFilms" :key="idx">
				<v-card v-if="(idx >= firstFilm && idx <= lastFilm)" class="my-5 transparent white--text darkened elevation-5" outlined>
					<v-toolbar color="primary">
						<v-row no-gutters>
							<v-col>
								<v-toolbar-title class="white--text">
									<p> {{ film.name }} </p>
								</v-toolbar-title>
							</v-col>
							<v-col>
								<p v-if="film.properties['Film Genre']" class="white--text text-right"> Genre: {{ film.properties["Film Genre"].toString().replaceAll(",", ", ").replaceAll("Music/Dancevideo", "Music/Dance Video") }} </p>
							</v-col>
						</v-row>
					</v-toolbar>
					<v-row no-gutters>
						<v-col cols="6" style="display: flex">
							<!-- <v-img v-if="film.properties['Additional Marketing Content']" :src="film.properties['Additional Marketing Content'][0]" class="my-auto" max-height="30vh" contain /> -->
							<ImageLoader v-if="film.properties['Additional Marketing Content']" :link="film.properties['Additional Marketing Content'][0]" class="ma-auto" style="max-width: 100%; position: relative" />
						</v-col>
						<v-col cols="6" class="pa-5">
							<v-row>
								<p>{{ film.properties["Film Description"] }} </p>
							</v-row>
							<v-row>
								<v-col class="text-center" v-if="film.properties.YouTube || film.properties.Twitter">
									Find the Creators here!
									<v-container class="mx-auto">
										<a v-for="(link) in film.properties.YouTube" target="_blank" :href="link"><v-icon color="white">mdi-youtube</v-icon></a>
									</v-container>
									<v-container class="mx-auto">
										<a v-for="(link) in film.properties.Twitter" target="_blank" :href="link"><v-icon color="white">mdi-twitter</v-icon></a>
									</v-container>
								</v-col>

							</v-row>

						</v-col>
					</v-row>
				</v-card>
			</div>
		</ColumnLayout>
	</div>
</template>

<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import AccordionList from "@/components/FilmFestivalAccordian.vue";
import { store } from "@/assets/Data/GlobalVars/store.js"
import filmList from '@/assets/Data/FilmFestData/fest.json'
import ImageLoader from '@/components/Image.vue'

import { LazyYoutube } from 'vue-lazytube'
export default {
	mounted() {
		document.title = "VRCon 2022 | Film Festival";
		window.scrollTo({ top: 0, behavior: "instant" });
		this.films = filmList
		this.firstFilm = this.page * 4 - 4;
		this.lastfilm = this.page * 4 - 1;
		this.getGenres();
	},
	name: "Film-Festival-2022",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
		AccordionList,
		LazyYoutube,
		filmList,
		ImageLoader
	},
	props: [],
	data: () => ({
		title: "Film Submissions",
		page: 1,
		films: {},
		firstFilm: 0,
		lastFilm: 3,
		genres: [],
		searchTerm: [],
	}),
	watch: {
		page: function (el, oldEl) {
			this.firstFilm = el * 4 - 4;
			this.lastFilm = el * 4 - 1;
		},
	},
	methods: {
		getGenres() {
			this.films.forEach((film) => {
				var genres = Object.values(film.properties["Film Genre"])
				genres.forEach((genre) => {
					if (!this.genres.includes(genre) && genre) this.genres.push(genre)
				})
			})
		},
		searchFilter(film) {
			if (this.searchTerm.length == 0 || this.searchTerm == null) return true;
			return this.searchTerm.includes(film.properties["Film Genre"][0]) || this.searchTerm.includes(film.properties["Film Genre"][1]) || this.searchTerm.includes(film.properties["Film Genre"][2]);

		},
	},
	computed: {
		filteredFilms() {
			return Object.values(this.films).filter(this.searchFilter).sort()
		}
	}
};
</script>