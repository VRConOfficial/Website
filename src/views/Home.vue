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
				<v-container class="px-0 white--text my-2">
					<v-row class="px-0 d-flex align-center justify-center text-center text-sm-left">
						<v-col cols="11" sm="8" md="5" lg="4" xl="4" class="pa--4">
							<v-img src="@/assets/images/leathered.webp" class="my-2"></v-img>
						</v-col>
						<v-col cols="12" sm="auto" class="px-0">
							<div class="medieval my-6 white--text text-h2 text-sm-h2 text-center text-sm-left">
								Hear'ye Hear'ye
							</div>
							<div class="ma-6 text-h4">
								VRCon 2022 <br />
								December 16th - 30th
							</div>
						</v-col>
					</v-row>
					<v-row v-for="(link, index) in linkList" :key="index" class="align-center justify-center text-h5 text-sm-h4">
						<v-col cols="10" class="my-sm-4">
							<v-btn class="pa-8 primary rounded" :to="link.destination" block>
								{{ link.text }}
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
				<div class="rounded">
					<AlternatingTiles :content="landingInfo" class="my-4 px-0 rounded" />
					<v-container>
						<v-row v-for="(link, index) in linkList2" :key="index" class="align-center justify-center text-h5 text-sm-h4">
							<v-col cols="10" class="my-sm-4">
								<v-btn class="pa-8 primary" :to="link.destination" block>
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
		window.scrollTo({ top: 0, behavior: 'instant' });
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
					"VRCon is an annual event created to celebrate grassroots communities and creators of virtual reality. Here, people may show off the community and content they create, such as worlds, avatars, experiences, games, and online entertainment. The entire event can be enjoyed from the comfort and safety of home, providing everyone an opportunity to sprout new friendships over similar interests.",
			},
			{
				image: "placeholder-2.png",
				title: "Why VR?",
				content:
					"VRCon was originally intended to allow a convention experience in the comfort and safety of your own home while also allowing a spotlight for communities to share themselves in vr. Anything ranging from Avatars, experiences, worlds and games, and even for entertainers on the platform.",
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
				text: "Our History",
				destination: "history",
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
}
</style>