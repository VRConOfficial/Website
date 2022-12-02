import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/Home.vue'
import HistoryView from '@/views/History.vue'
//import StaffView from '@/views/staff/Staff.vue'
import StaffViewRedirect from '@/views/staff/StaffRedirect.vue'
import QuestionsView from '@/views/Questions.vue'
import EventsView from '@/views/Events.vue'
import GuideView from '@/views/Guide.vue'

// import DirectorsStaffView from '@/views/staff/StaffDirectors.vue'
// import EventsStaffView from '@/views/staff/StaffEvents.vue'
// import ProductionStaffView from '@/views/staff/StaffProduction.vue'
// import MarketingStaffView from '@/views/staff/StaffMarketing.vue'

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
	{
		path: '/events',
		name: 'events',
		component: EventsView
	},
	{
		path: '/questions',
		name: 'questions',
		component: QuestionsView
	},
	// {
	// 	path: '/staff',
	// 	name: 'staff',
	// 	component: StaffView,
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
	// }
	{
		path: '/staff',
		name: 'staff',
		component: StaffViewRedirect,
	},
	{
		path: '/staff/directors',
		component: StaffViewRedirect,
	},
	{
		path: '/staff/events-team',
		component: StaffViewRedirect,
	},
	{
		path: '/staff/production-team',
		component: StaffViewRedirect,
	},
	{
		path: '/staff/marketing-team',
		component: StaffViewRedirect,
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	strict: true
})

export default router
