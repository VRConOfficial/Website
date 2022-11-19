<template>
	<FullBack>
		<ColumnLayout class="py-16">
			<div>
				<SectionBanner text="Staff Directory" class="py-16" />
				<v-card
					style = "background-color: rgba(0,0,0,0)"
					flat
					tile
				>
					<v-card-actions class="justify-space-between" >
							<v-btn
								text
								@click="prev"
								color = white
							>
								<v-icon>mdi-chevron-left</v-icon>
							</v-btn>
							<v-item-group
								v-model="onboarding"
								class="text-center"
								mandatory
							>
								<v-item
									v-for="n in length"
									:key="`btn-${n}`"
									v-slot="{ active, toggle }"
								>
									<v-btn
										:input-value="active"
										@click="toggle"
										color = "secondary"
									>
										<v-icon v-if = "n == 1" >Directors</v-icon>
										<v-icon v-if = "n == 2" >Teams</v-icon>
									</v-btn>
								</v-item>
							</v-item-group>
							<v-btn
								text
								@click="next"
								color = white
							>
								<v-icon>mdi-chevron-right</v-icon>
							</v-btn>
					</v-card-actions>
					<v-window
						v-model="onboarding"
					>
						<v-window-item
							v-for="n in length"
							:key="`card-${n}`"
						>
							<!-- Director Card -->
							<v-card v-if = "n == 1"  
							>
								<DirectorsStaffView/>
							</v-card>
							
							<!-- Team Card  -->
							<v-card v-if = "n == 2" 
							>
								<TeamsStaffView />
							</v-card>
						</v-window-item>
					</v-window>
				</v-card>
			</div>
		</ColumnLayout>
	</FullBack>
</template>

<style scoped></style>


<script>
import FullBack from "@/components/FullBack.vue";
import ColumnLayout from "@/components/ColumnLayout.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import DirectorsStaffView from '@/views/staff/Directors.vue';
import TeamsStaffView from '@/views/staff/TeamsMain'

export default {
	mounted() {
		document.title = "VRCon 2022 | Staff Directory";
	},
	name: "StaffView",
	components: {
    FullBack,
    ColumnLayout,
    SectionBanner,
		DirectorsStaffView,
		TeamsStaffView
},
	props: [],
	data: () => ({
		length: 2,
		onboarding: 0,

	}),
	methods: {
		next () {
			this.onboarding = this.onboarding + 1 === this.length
				? 0
          : this.onboarding + 1
		},
		prev () {
			this.onboarding = this.onboarding - 1 < 0
				? this.length - 1
				: this.onboarding - 1
		},
	},
	computed: {}
};
</script>