<template>
	<div>
		<FullBack img="@/assets/images/Film Festival/vlcsnap-2022-12-05-21h31m57s541.png">
			<ColumnLayout class="py-8 pt-16">
				<v-container class="">
					<v-row class=" text-center mb-0" justify="center">
						<v-col cols="auto" style="height:fit-content;" class="pt-10">
							<v-img :src="require('@/assets/images/Film Festival/No_glow_00135.png')" height="200px" class="mt-10"></v-img>
						</v-col>
					</v-row>
				</v-container>
			</ColumnLayout>
		</FullBack>

		<ColumnLayout class="py-16 white--text">
			<LazyYoutube src="https://www.youtube.com/watch?v=ofAbfcIKcJM" :showTitle="false" maxWidth="100%" class="mx-auto my-5" style="z-index: 1;" />
			<v-row class="darkened" justify="center">
				<v-col cols="12" sm="6">
					<v-select v-model=searchTerm :items="genres" label="Filter By Genre" multiple outlined class="transparent pa-0" color="primary" dark />
				</v-col>
				<v-col cols="12" sm="6">
					<v-btn outlined color="white" class="ma-auto" block to="/ffsignup">Sign up to Attend!</v-btn>
				</v-col>
			</v-row>

			<v-pagination v-model="page" :length="Math.ceil(filteredFilms.length / 4)" :total-visible="7" :circle="true" class="my-8" />
			<div v-for="(film, idx) in filteredFilms" :key="idx">
				<v-card v-if="(idx >= firstFilm && idx <= lastFilm)" class="my-5 transparent white--text darkened elevation-5" outlined>
					<v-toolbar color="primary" style="height:fit-content">
						<v-row no-gutters class="my-auto" style="max-width: 100%;">
							<v-col class="ma-0">
								<v-toolbar-title class="white--text" style="max-width:100%; overflow-wrap: break-word">
									{{ film.name }}
								</v-toolbar-title>
							</v-col>
							<v-col class="ma-0">
								<p v-if="film.properties['Film Genre']" class="white--text text-right ma-0"> Genre: {{ film.properties["Film Genre"].toString().replaceAll(",", ", ").replaceAll("Music/Dancevideo", "Music/Dance Video") }} </p>
							</v-col>
						</v-row>
					</v-toolbar>
					<v-row no-gutters>
						<v-col cols="12" lg="6" md="12" sm="12" style="display: flex">
							<ImageLoader v-if="film.properties['Thumbnail']" :link="getImageLink(film.properties['Thumbnail'])" class="ma-auto" style="max-width: 100%; min-height: 200px; position: relative" />
						</v-col>
						<v-col cols="12" lg="6" md="12" sm="12" class="pa-5 ma-auto text-center">
							<v-row class="text-center mx-auto my-5" style="width:fit-content;">
								<strong>{{ film.name }}</strong>
							</v-row>
							<v-row class="text-center ma-auto" style="width:fit-content; ">
								{{ film.properties["Film Description"] }}
							</v-row>
							<v-row>
								<v-col class="text-center" v-if="film.properties.YouTube || film.properties.Twitter">
									Find the Creators here!
									<v-container class="mx-auto">
										<v-row>
											<v-col cols="12" v-for="(link, index) in film.properties.YouTube" :key="index">
												<a target="_blank" :href="link">
													<v-icon color="white">mdi-youtube</v-icon>
													<span> {{ link }}</span>
												</a>
											</v-col>
										</v-row>
										<v-row>
											<v-col cols="12" v-for="(link, index) in film.properties.Twitter" :key="index">
												<a target="_blank" :href="link">
													<v-icon color="white">mdi-twitter</v-icon>
													<span> {{ link }}</span>
												</a>
											</v-col>
										</v-row>
									</v-container>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-card>
			</div>
			<v-pagination v-model="page" :length="Math.ceil(filteredFilms.length / 4)" :total-visible="7" :circle="true" />
		</ColumnLayout>
	</div>
</template>

<style>

</style>


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
		//window.scrollTo({ top: 0, behavior: "instant" });
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
		getImageLink(link) {
			var linkToParse
			if (link.includes("drive")) {
				linkToParse = link;
			}
			else {
				return link
			}

			if (linkToParse) {
				linkToParse = linkToParse.replaceAll("https://drive.google.com/file/d/", "").replaceAll("/view?usp=sharing", "").replaceAll("/view", "").replaceAll("_link", "").replaceAll("?usp=share", "")
				linkToParse = "https://drive.google.com/uc?export=view&id=" + linkToParse
				return linkToParse
			}
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