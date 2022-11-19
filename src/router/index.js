import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/Home.vue'
import AboutView from '@/views/About.vue'
import PassthroughView from '@/views/Passthrough.vue'
import StaffView from '@/views/staff/Staff.vue'
import DirectorsStaffView from '@/views/staff/Directors.vue'
import TeamsStaffView from '@/views/staff/TeamsMain'
import QuestionsView from '@/views/Questions.vue'
import EventsView from '@/views/Events.vue'
import GuideView from '@/views/Guide.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
		component: AboutView
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
	{
		path: '/staff',
		name: 'staff',
		component: StaffView
	},
	{
		path: '/staff',
		name: 'staff',
		component: PassthroughView,
		children: [
			{
				path: 'directors',
				name: 'Directors',
				component: DirectorsStaffView
			},
			{
				path: 'teams',
				name: 'Teams',
				component: TeamsStaffView
			}
		]
	}
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	strict: true
})

export default router
