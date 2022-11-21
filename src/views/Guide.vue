<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-16">
				<div class="white--text">
					<SectionBanner text="Guide" />
				</div>
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="py-16">
			<div class="white--text">
				<p>
					So you want to experience VRCon but don't know where to start? Well
					you're in luck! The process is easy!
				</p>
				<H3> Step 1: Install VRChat. </H3>
				<p style="margin-left: 1em">
					- VRCon is exclusivly held in VRChat so to attend, you'll have to
					start there. There are two ways to go about this.
				</p>

				<ol style="margin-left: 3em; margin-top: -0.5em; margin-bottom: 0.5em">
					<li>
						If you are planning to use VRChat on your computer, Go to the
						<a href="https://store.steampowered.com/app/438100/VRChat/"
							>Steam Store</a
						>
						and download a copy of VRChat.
					</li>
					<li>
						If you do not have a computer, but instead have yourself a Quest
						Headset, get vrchat from the
						<a href="https://www.oculus.com/experiences/quest/1856672347794301/"
							>Quest Store</a
						>
						to download a copy of VRChat.
					</li>
				</ol>
				<H3> Step 2: Desktop or VR? </H3>

				<p style="margin-left: 1em">
					- Just because we hold our events on a VR platform does not limit the
					experience to people only in VR. If you have a computer that is
					capible to handle VRChat, you can simply join and experience our
					events with just your mouse and keyboard! Of course, if you have a VR
					Headset, all you have to do is lauch VRChat in VR Mode.
				</p>

				<H3> Step 3: Find an event that you want to join. </H3>

				<p style="margin-left: 1em">
					- By checking the Events page, you can see what events we are hosting
					and when they take place. All of this is already shown in your local
					time zone! So find which event you want to join and follow the link to
					join!
				</p>
			</div>
		</ColumnLayout>
	</div>
</template>

<style scoped></style>

<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";

export default {
	mounted() {
		document.title = "VRCon 2022 | Guide";
		window.scrollTo({top: 0, behavior: 'smooth'});
	},
	name: "GuideView",
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
	},
	props: [],
	data: () => ({}),
	methods: {},
};
</script>