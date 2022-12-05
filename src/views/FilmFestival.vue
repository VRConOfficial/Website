<template :key="componentKey">
	<div>
		<FullBack>
			<ColumnLayout class="py-8 pt-16">
				<SectionBanner text="Film Festival" />
			</ColumnLayout>
		</FullBack>

		<ColumnLayout class="py-16 white--text">
			<LazyYoutube src="https://www.youtube.com/watch?v=g82UH0v574o" :showTitle="false" maxWidth="80%" class="mx-auto" />
			<v-pagination v-model="page" :length="(Math.floor(Object.keys(films).length / 4) + 1)" :total-visible="7" />
			<div v-for="(film, index, i) in films" :key="index">
				<div v-if="(i <= page * 4 - 1) && (i >= page * 4 - 4)" class="py-5">
					<AccordionList class="px-0" :film="film" />
				</div>
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

import { LazyYoutube } from 'vue-lazytube'
export default {
	mounted() {
		document.title = "VRCon 2022 | Film Festival";
		window.scrollTo({ top: 0, behavior: "instant" });
		if (store.debugValue) {
			this.randomVideos()
		}
	},
	name: "Film-Festival-2022",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
		AccordionList,
		LazyYoutube
	},
	props: [],
	data: () => ({
		title: "Film Submissions",
		page: 1,
		films: {
			film1: {
				name: "Film 1",
				director: "Lorem",
				credits: "test, test, test",
				about: "test",
				trailer: "https://www.youtube.com/watch?v=g82UH0v574o",
			},
			film2: {
				name: "Film 2",
				director: "Ipsum",
				credits: "test, test, test",
				about: "test",
			},
			film3: {
				name: "Film 3",
				director: "dolor",
				credits: "test, test, test",
				about: "test",
			},
			film4: {
				name: "Film 4",
				director: "sit",
				credits: "test, test, test",
				about: "test",
			},
			film5: {
				name: "Film 5",
				director: "amet",
				credits: "test, test, test",
				about: "test",
				trailer: "https://www.youtube.com/watch?v=g82UH0v574o",
			},
			film6: {
				name: "Film 6",
				director: "consectetur",
				credits: "test, test, test",
				about: "test",
			},
			film7: {
				name: "Film 7",
				director: "adipisicing",
				credits: "test, test, test",
				about: "test",
			},
			film8: {
				name: "Film 8",
				director: "test",
				credits: "test, test, test",
				about: "test",
			},
		},
	}),
	watch: {
		"page": function (val, oldVal) {
			console.log(this.page)
		}
	},
	methods: {
		randomVideos() {
			let videos = new Object()
			var ammount = Math.floor(Math.random() * (150 - 50 + 1) + 50)
			for (let i = 0; i < ammount; i++) {
				//create random video 
				var title = "Lorem Ipsum dolor sit amet"
				var director = "Lorem"
				var cast = "lorem, ipsum, dolor"
				var about = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatem libero ab eligendi minima omnis ipsam excepturi unde fugit. Tenetur unde, molestias dicta nam a ipsam perspiciatis temporibus qui necessitatibus?"

				var random = Math.random();
				var trailer
				if (random >= 0.5) {
					trailer = 'https://www.youtube.com/watch?v=' + this.pullRandomYoutubeVideo()
				}

				var video = new Object()
				video.name = 'Film ' + i + ' Title';
				video.director = director;
				video.credits = cast;
				video.about = about;
				if (trailer) video.trailer = trailer;
				videos[i] = video
			}
			console.log(this.films)
			this.films = videos
			console.log(this.films)
		},

		pullRandomYoutubeVideo() {
			var codeLenth = 11;
			var possibles = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_"
			var code = ""
			for (let i = 0; i < codeLenth; i++) {
				code += possibles.charAt(Math.floor(Math.random() * possibles.length))
			}
			return code
		},
	},
};
</script>