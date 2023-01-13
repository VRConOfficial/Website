import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/Home.vue'
import HistoryView from '@/views/History.vue'
import StaffView from '@/views/staff/Staff.vue'
import StaffViewRedirect from '@/views/staff/StaffRedirect.vue'
import QuestionsView from '@/views/Questions.vue'
import EventsView from '@/views/Events.vue'
import GuideView from '@/views/Guide.vue'
import FilmFestival2022 from '@/views/FilmFestival.vue'
import FilmFestivalSignup from '@/views/Forms/FFSignUp.vue'
import { store } from '@/assets/Data/GlobalVars/store.js'

import DirectorsStaffView from '@/views/staff/StaffDirectors.vue'
import EventsStaffView from '@/views/staff/StaffEvents.vue'
import ProductionStaffView from '@/views/staff/StaffProduction.vue'
import MarketingStaffView from '@/views/staff/StaffMarketing.vue'

Vue.use(VueRouter)
const routes = [
	{
		path: '*',
		name: 'home',
		component: HomeView
	},
	{
		path: '/history',
		name: 'history',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
		component: HistoryView
	},
	{
		path: '/guide',
		name: 'guide',
		component: GuideView
	},
	// {
	// 	path: '/events',
	// 	name: 'events',
	// 	component: EventsView
	// },
	{
		path: '/questions',
		name: 'questions',
		component: QuestionsView
	},
	{
		path: '/FilmFestival2022',
		name: 'Film-Festival-2022',
		component: FilmFestival2022,
	},
	{
		path: '/FFSignup',
		name: 'FFSignup',
		component: FilmFestivalSignup
	},
	// {
	// 	path: '/staff',
	// 	name: 'staff',
	// 	component:  StaffView,
	// 	children: [
	// 		{
	// 			path: 'directors',
	// 			component: DirectorsStaffView,
	// 		},
	// 		{
	// 			path: 'events-team',
	// 			component: EventsStaffView,
	// 		},
	// 		{
	// 			path: 'production-team',
	// 			component: ProductionStaffView,
	// 		},
	// 		{
	// 			path: 'marketing-team',
	// 			component: MarketingStaffView,
	// 		},
	// 	],
	// },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	strict: true
})

export default router
