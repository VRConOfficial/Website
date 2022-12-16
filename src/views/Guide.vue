<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-8 pt-16">
				<div class="white--text">
					<SectionBanner text="Guide" />
				</div>
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="py-16">
			<div class="white--text">
				<p>
					So you want to experience VRCon but don't know where to start? Well you're in luck! The process is easy!
				</p>
				<div class="py-4">
					<H3> Step 1: Install VRChat. </H3>
					<p style="margin-left: 1em">
						- VRCon is exclusivly held in VRChat so to attend, you'll have to start there. There are two ways to go about this.
					</p>

					<ol style="margin-left: 3em; margin-top: -0.5em; margin-bottom: 0.5em">
						<li>
							If you are planning to use VRChat on your computer, Go to the <a href="https://store.steampowered.com/app/438100/VRChat/">Steam Store</a> and download a copy of VRChat.
						</li>
						<li>
							If you do not have a computer, but instead have yourself a Quest Headset, get vrchat from the <a href="https://www.oculus.com/experiences/quest/1856672347794301/">Quest Store</a>
							to download a copy of VRChat.
						</li>
					</ol>
				</div>
				<div class="py-4">
					<H3> Step 2: Desktop or VR? </H3>
					<p style="margin-left: 1em">
						- Just because we hold our events on a VR platform does not limit the experience to people only in VR. If you have a computer that is capible to handle VRChat, you can simply join and experience our events with just your mouse and keyboard! Of course, if you have a VR Headset, all you have to do is launch VRChat in VR Mode.
					</p>
				</div>
				<div class="py-4">
					<H3> Step 3: Find an event that you want to join. </H3>
					<p style="margin-left: 1em">
						- By checking the Events page, you can see what events we are hosting and when they take place. All of this is already shown in your local time zone! So find which event you want join and follow the link to join!
					</p>
				</div>
			</div>

		</ColumnLayout>

		<ColumnLayout class="py-16">
			<v-dialog v-model="trailer" width="auto">
				<template v-slot:activator="{ on, attrs }"  v-if="new Date() >= new Date(1671210000000).getTime()">
					<v-btn color="primary" dark v-bind="attrs" v-on="on">
						Watch the Trailer
					</v-btn>
				</template>
				<div v-if="trailer" style="width: 90vh; max-width: 90vw">
					<LazyYoutube ref="lazyVideo" :src="'https://youtu.be/PXMInVzwR9Q'" max-width="80vw" />
				</div>
			</v-dialog>
			<h1 class="white--text mx-auto mb-5" style="width:fit-content">How To Join With Groups</h1>
			<v-stepper v-model="e1">
				<v-stepper-header>
					<v-stepper-step :complete="e1 > 1" step="1">
						Click 'Groups' on Quick Menu
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step :complete="e1 > 2" step="2">
						Join the VRCon Group
					</v-stepper-step>
					<v-divider />
					<v-stepper-step :complete="e1 > 3" step="3">
						Locate Active Instances
					</v-stepper-step>
					<v-divider />
					<v-stepper-step :complete="e1 > 4" step="4">
						Confirm your Instance Number
					</v-stepper-step>
				</v-stepper-header>
				<v-stepper-items>
					<v-stepper-content step="1">
						<v-img :src="require('@/assets/images/GroupsGuide/1.png')" max-width="500px" :aspect-ratio="1" class="mx-auto mb-5" />
						<v-card class="mb-12" color="accent">
							<h4 class="pa-5 text-center">You can find 'Groups' by going into your Quick Menu and looking for the button labeled "Groups"</h4>
						</v-card>

						<v-btn color="primary" @click="e1 = 2">
							Continue
						</v-btn>
					</v-stepper-content>

					<v-stepper-content step="2">
						<v-img :src="require('@/assets/images/GroupsGuide/2.png')" max-width="500px" :aspect-ratio="1" class="mx-auto mb-5" />
						<v-card class="mb-12" color="accent">
							<h4 class="pa-5 text-center">If you are not already in the VRCon group, search for 'VRCON.3783' and click 'Join Group'</h4>
							<p class="mx-auto pb-5" style="width: fit-content">You can also search for it here: <a href="https://vrc.group/VRCON.3783" target="_blank">https://vrc.group/VRCON.3783</a></p>
						</v-card>

						<v-btn color="primary" @click="e1 = 3">
							Continue
						</v-btn>

						<v-btn text @click="e1 = 1">
							Back
						</v-btn>
					</v-stepper-content>
					<v-stepper-content step="3">
						<v-img :src="require('@/assets/images/GroupsGuide/3.png')" max-width="500px" :aspect-ratio="1.5" class="mx-auto mb-5" />
						<v-card class="mb-12" color="accent">
							<h4 class="pa-5 text-center">In the instances tab, find the instance you would like to join</h4>
						</v-card>

						<v-btn color="primary" @click="e1 = 4">
							Continue
						</v-btn>

						<v-btn text @click="e1 = 2">
							Back
						</v-btn>
					</v-stepper-content>
					<v-stepper-content step="4">
						<v-img :src="require('@/assets/images/GroupsGuide/4.png')" max-width="500px" :aspect-ratio="1" class="mx-auto mb-5" />
						<v-card class="mb-12" color="accent">
							<h4 class="pa-5 text-center">Confirm the instance number matches the event you are looking for (in this case, #87042)</h4>
						</v-card>

						<v-btn color="primary" @click="e1 = 1">
							Return
						</v-btn>

						<v-btn text @click="e1 = 3">
							Back
						</v-btn>
					</v-stepper-content>
				</v-stepper-items>
			</v-stepper>
		</ColumnLayout>
	</div>
</template>

<style scoped>

</style>

<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import { LazyYoutube } from 'vue-lazytube' 

export default {
	mounted() {
		document.title = "VRCon 2022 | Guide";
		window.scrollTo({ top: 0, behavior: 'instant' });
	},
	name: "GuideView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
		LazyYoutube
	},
	props: [],
	data: () => ({
		e1: 1,
		trailer: false
	}),
	methods: {},
};
</script>