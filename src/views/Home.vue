<template>
	<div>
		<BackPanel />
		<FullBack>
			<ColumnLayout>
				<SectionBanner text="Welcome to YOUR Community" />
			</ColumnLayout>
		</FullBack>
		<ColumnLayout>
			<div>
				<v-container class="white--text my-2">
					<v-row class="d-flex align-center justify-center text-center text-sm-left">
						<v-col cols="10" sm="5" md="5" lg="4" xl="4">
							<v-img
								src="@/assets/images/leathered.webp"
								class="ma-2"
							></v-img>
						</v-col>
						<v-col cols="12" sm="7" md="7" lg="8" xl="8">
							<div class="ma-6 white--text text-h2 medieval text-center text-sm-left">
								Here'ye Here'ye
							</div>
							<div class="ma-6 text-h4">
								VRCon 2022 <br />
								December 16th - 30th
							</div>
						</v-col>
					</v-row>
					<v-row
						v-for="(link, index) in linkList"
						:key="index"
						class="d-flex align-center justify-center text-h5"
					>
						<v-col cols="10">
							<v-btn
								class="pa-8 ma-4 primary rounded"
								:to="link.destination"
								block
							>
								{{ link.text }}
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
				<div class="rounded">
					<AlternatingTiles :content="landingInfo" class="my-4 rounded" />
					<v-container>
						<v-row
							v-for="(link, index) in linkList2"
							:key="index"
							class="d-flex align-center justify-center text-h5"
						>
							<v-col cols="10">
								<v-btn
									class="pa-8 ma-4 primary"
									:to="link.destination"
									block
								>
									{{ link.text }}
								</v-btn>
							</v-col>
						</v-row>
					</v-container>
				</div>
			</div>
		</ColumnLayout>
	</div>
</template>

<script>
import BackPanel from "@/components/BackPanel.vue";
import AlternatingTiles from "@/components/AlternatingTiles.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import FullBack from "@/components/FullBack.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Welcome";
		window.scrollTo({top: 0, behavior: 'smooth'});
	},
	name: "HomeView",

	components: {
		BackPanel,
		SectionBanner,
		AlternatingTiles,
		ColumnLayout,
		FullBack,
	},

	data: () => ({
		landingInfo: [
			{
				image: "placeholder-1.jpg",
				title: "What is VRCON?",
				content:
					"VRCon is an annual event created to celebrate grassroots communities and creators of virtual reality. Here, people may show off the community and content they create such as worlds, avatars, experiences, games, and online entertainment. The entire event can be enjoyed from the comfort and safety of home, providing everyone an opportunity to sprout new friendships over similar interests.",
			},
			{
				image: "placeholder-2.png",
				title: "Why VRCon?",
				content:
					"VRCon was origionally intended to allow a convention experience in the comfort and saftey of your own home while also allowing a spotlight for communities to share themselves in vr. Anthing ranging from Avatars, experiences, worlds and games, and even for entertainers on the platform.",
			},
		],
		linkList: [
			{
				text: "Guide",
				destination: "guide",
			},
			{
				text: "Events",
				destination: "events",
			},
		],
		linkList2: [
			{
				text: "More Info",
				destination: "about",
			},
		],
	}),
};
</script>

<style scoped>
@font-face {
	font-family: Medieval;
	src: url("../assets/MedievalSharp-Regular.ttf");
}
.medieval {
	font-family: Medieval, serif !important;
	font-size: 4.5rem !important;
}
</style>