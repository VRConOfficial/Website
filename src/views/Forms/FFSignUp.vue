<template>
	<div>
		<FullBack>
			<ColumnLayout class="py-8 pt-16">
				<SectionBanner text="Film Festival" />
			</ColumnLayout>
		</FullBack>
		<ColumnLayout class="py-8 pt-16">

			<!-- <form action="https://docs.google.com/forms/d/e/1FAIpQLScne608C-g2BpV2qRzFO--ukjfA_39ZlYmYqLYMbDUsjg4D1Q/formResponse" target="_blank" id="bootstrapForm" method="POST">
				<fieldset >
					<v-row>
						<h1 class="my-5 mx-auto">Attend the VRCon 2022 Film Festival </h1>
					</v-row>
					<v-row>
						Fill out this form to RSVP to the VRCon 2022 Film Festival hosted by Metacosm Studios. Join VRChat filmmakers J. Constantine and Elim in celebrating cinematic content filmed in VRChat.
						<br>
						<br>
						Due to VRChat&#x27;s world limit of 40 users, audience members may be separated across multiple instances. If you cannot attend in VRChat, you can also watch the Twitch livestream at VRConLive.
						<br>
						<br>
						The 2022 VRCon Film Festival will be a two-hour VRChat event. See timezones below: <br>
						5:00 pm - 7:00 pm PST on Saturday, December 17th <br>
						8:00 pm - 10:00 pm EST on Saturday, December 17th <br>
						2:00 am - 4:00 am CET on Sunday, December 18th <br>
						10:00 am - 12:00 pm JST on Sunday, December 18th <br>
						Follow Metacosm Studios on Twitter for the latest updates on the film festival. <br>
						Follow VRCon on Twitter and join the VRCon Discord for the latest updates on VRCon overall. <br>
					</v-row>
				</fieldset>
				<fieldset class="text-center">
					<legend for="">Email</legend>
					<div class="form-group">
						<input id="emailAddress" type="email" name="emailAddress" class="form-control" required>
					</div>
				</fieldset>

				<v-row class="text-center">
					<v-col>
						<fieldset>
							<legend for="450332436">VRChat Display Name</legend>
							<div class="form-group">
								<input id="110038488" type="text" required name="entry.110038488" class="form-control">
							</div>
						</fieldset>
					</v-col>
					<v-col>
						<fieldset>
							<legend for="1720855744">VRChat Profile Link</legend>
							<div class="form-group">
								<input id="2031940499" required type="text" name="entry.2031940499" class="form-control">
							</div>
						</fieldset>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4">

						<fieldset>
							<legend for="2016270910">Which of the following best describes you?</legend>
							<div class="form-group">
								<div class="radio">
									<label>
										<input type="radio" name="entry.1450004033" value="Filmmaker (creates VRChat or VR films)" required>
										Filmmaker (creates VRChat or VR films)
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1450004033" value="Cast &amp; Crew (helps produce VRChat or VR films)" required>
										Cast &amp; Crew (helps produce VRChat or VR films)
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1450004033" value="Movie Fan (watches VRChat or VR films)" required>
										Movie Fan (watches VRChat or VR films)
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1450004033" value="Press &amp; Media (reports on VRChat or VR films)" required>
										Press &amp; Media (reports on VRChat or VR films)
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1450004033" value="__other_option__" required>
									</label>
									<input type="text" name="entry.1450004033.other_option_response" placeholder="custom value">
								</div>
							</div>
						</fieldset>
					</v-col>
					<v-col cols="4">
						<fieldset>
							<legend for="1253326734">Which genre of VRChat film do you most enjoy?</legend>
							<div class="form-group">
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="Action" required>
										Action
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="Comedy" required>
										Comedy
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="Drama" required>
										Drama
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="Horror" required>
										Horror
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="Narrative" required>
										Narrative
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="Romance" required>
										Romance
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="Documentary" required>
										Documentary
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="Music/Dance video" required>
										Music/Dance video
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.72851393" value="__other_option__" required>
									</label>
									<input type="text" name="entry.72851393.other_option_response" placeholder="custom value">
								</div>
							</div>
						</fieldset>
					</v-col>
					<v-col cols="4">
						<fieldset>
							<legend for="1873440347">Which genre of VRChat film do you want to see more of?</legend>
							<div class="form-group">
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="Action" required>
										Action
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="Comedy" required>
										Comedy
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="Drama" required>
										Drama
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="Horror" required>
										Horror
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="Narrative" required>
										Narrative
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="Romance" required>
										Romance
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="Documentary" required>
										Documentary
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="Music/Dance video" required>
										Music/Dance video
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1803490509" value="__other_option__" required>
									</label>
									<input type="text" name="entry.1803490509.other_option_response" placeholder="custom value">
								</div>
							</div>
						</fieldset>
					</v-col>
					<v-col cols="4">
						<fieldset>
							<legend for="930182285">What is your experience in making VRChat films?</legend>
							<div class="form-group">
								<div class="radio">
									<label>
										<input type="radio" name="entry.263664141" value="I’ve made multiple VRChat films" required>
										I’ve made multiple VRChat films
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.263664141" value="I’ve made one VRChat film" required>
										I’ve made one VRChat film
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.263664141" value="I’m currently making my first VRChat film" required>
										I’m currently making my first VRChat film
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.263664141" value="I’m interested in learning how to make VRChat films" required>
										I’m interested in learning how to make VRChat films
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.263664141" value="I’m not interested in making VRChat films" required>
										I’m not interested in making VRChat films
									</label>
								</div>
							</div>
						</fieldset>
					</v-col>
					<v-col cols="4">
						<fieldset>
							<legend for="1502833713">How did you first hear about the 2022 VRCon Film Festival?</legend>
							<div class="form-group">
								<div class="radio">
									<label>
										<input type="radio" name="entry.1889040160" value="Metacosm Studios Twitter" required>
										Metacosm Studios Twitter
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1889040160" value="Metacosm Studios YouTube" required>
										Metacosm Studios YouTube
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1889040160" value="VRCon Twitter" required>
										VRCon Twitter
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1889040160" value="VRCon YouTube" required>
										VRCon YouTube
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1889040160" value="Friend" required>
										Friend
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1889040160" value="2021 VRCon Film Festival" required>
										2021 VRCon Film Festival
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="entry.1889040160" value="__other_option__" required>
									</label>
									<input type="text" name="entry.1889040160.other_option_response" placeholder="custom value">
								</div>
							</div>
						</fieldset>
					</v-col>
				</v-row>
				<fieldset>
					<legend for="923034890">Any final questions or comments?</legend>
					<div class="form-group">
						<textarea id="703525239" name="entry.703525239" class="form-control"></textarea>
					</div>
				</fieldset>

				<input type="hidden" name="fvv" value="1">
				<input type="hidden" name="fbzx" value="-497718081705195006">
				<input type="hidden" name="pageHistory" value="0">

				<input class="btn btn-primary" type="submit" value="Submit via Google Forms">
			</form> -->
			<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScc8laQ98D6HJ-daiJF4mKNO4ShZzbXBIzj_yUFmvJVb34LnA/viewform?embedded=true" width="100%" height="3500" background="transparent" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

			<!-- <div>
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScc8laQ98D6HJ-daiJF4mKNO4ShZzbXBIzj_yUFmvJVb34LnA/viewform?embedded=true" width="100%" height="3500px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
			</div> -->
		</ColumnLayout>
	</div>
</template>

<script>

import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";



export default {
	name: "FFSignup",
	props: [],
	components: {
		FullBack,
		ColumnLayout,
		SectionBanner,
	},
	data: () => ({
		formValues: null
	}),
	// methods: {
	// 	submitInfo() {
			
	// 	}
	// },
	watch: {

	}
};
</script>
<!-- 
<style scoped>
form {
	margin: 10px auto;
	padding: 10px 20px;
	background: #f4f7f8;
	border-radius: 8px;
}

h1 {
	margin: 0 0 30px 0;
	text-align: center;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
	background: rgba(255, 255, 255, 0.1);
	border: none;
	font-size: 16px;
	height: auto;
	margin: 0;
	outline: 0;
	padding: 15px;
	width: 100%;
	background-color: #e8eeef;
	color: #8a97a0;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
	margin-bottom: 30px;
}

input[type="radio"],
input[type="checkbox"] {
	margin: 0 4px 8px 0;
}

select {
	padding: 6px;
	height: 32px;
	border-radius: 2px;
}

button {
	padding: 19px 39px 18px 39px;
	color: #FFF;
	background-color: #4bc970;
	font-size: 18px;
	text-align: center;
	font-style: normal;
	border-radius: 5px;
	width: 100%;
	border: 1px solid #3ac162;
	border-width: 1px 1px 3px;
	box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
	margin-bottom: 10px;
}

fieldset {
	margin-bottom: 30px;
	border: none;
}

legend {
	font-size: 1.4em;
	margin-bottom: 10px;
}

label {
	display: block;
	margin-bottom: 8px;
}

label.light {
	font-weight: 300;
	display: inline;
}

.number {
	background-color: #5fcf80;
	color: #fff;
	height: 30px;
	width: 30px;
	display: inline-block;
	font-size: 0.8em;
	margin-right: 4px;
	line-height: 30px;
	text-align: center;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
	border-radius: 100%;
}
</style> -->