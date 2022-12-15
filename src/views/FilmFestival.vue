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
								<p v-if="film.properties['Film Genre']" class="white--text text-right ma-0"> Genre: {{ film.properties["Film Genre"].toString().replaceAll(",", " | ").replaceAll("Music/Dancevideo", "Music/Dance Video") }} </p>
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
											<v-col cols="12" v-for="(e, index) in film.properties.YouTube" :key="index" color="white" v-html="insertHTMLfromLink(e)"> </v-col>
										</v-row>
										<v-row>
											<v-col cols="12" v-for="(e, index) in film.properties.Twitter" :key="index" v-html="insertHTMLfromLink(e)">
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
		biliSVG: "<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' class='v-icon__component theme--light white--text'><path d='m17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56h-13.334c-1.51-.036-2.769-.556-3.773-1.56s-1.524-2.262-1.56-3.773v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1 -.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373s.653.124.92.373l2.853 2.747c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373s.662.151.929.4.391.551.391.907c0 .355-.124.657-.373.906zm-12.48 2.587c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zm2.667 3.867c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z'/></svg>",

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
		insertHTMLfromLink(element) {
			console.log(element)
			var link = element.link;
			var name = this.capitalize(element.name);

			var newLink = link.toLowerCase()

			if (newLink.includes("youtube")) {
				return "<a target='_blank' href='" + newLink + "'><i aria-hidden='true' class='v-icon notranslate mdi mdi-youtube theme--light white--text'></i><span style='font-size:16px; margin-top:auto; marbin-bottom: 0' >" + name + "</span></a>"
			} else if (newLink.includes("twitter")) {
				return "<a target='_blank' href='" + link + "'><i aria-hidden='true' class='v-icon notranslate mdi mdi-twitter theme--light white--text'/><span style='font-size:16px; margin-top:auto; marbin-bottom: 0' >" + name + "</span></a>"
			} else if (newLink.includes("bilibili")) {
				return "<a target='_blank' href='" + link + "'><span aria-hidden='true' class='v-icon notranslate theme--light' style='fill: white'>" + this.biliSVG + "</span><span style='font-size:16px; margin-top:auto; marbin-bottom: 0' class='white--text' >" + name + "</span></a>"
			}
			return ""

		},
		capitalize(str) {
			const arr = str.split(" ")
			for (var i = 0; i < arr.length; i++) {
				arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
			}
			const str2 = arr.join(" ")
			return str2
		}
	},
	computed: {
		filteredFilms() {
			return Object.values(this.films).filter(this.searchFilter).sort()
		}
	}
};
</script>