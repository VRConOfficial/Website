import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/Home.vue'
import QuestionsView from '@/views/Questions.vue'
import GuideView from '@/views/Guide.vue'
import { store } from '@/assets/Data/GlobalVars/store.js'

Vue.use(VueRouter)
const routes = [
	{
		path: '*',
		name: 'home',
		component: HomeView
	},
	{
		path: '/guide',
		name: 'guide',
		component: GuideView
	},
	{
		path: '/questions',
		name: 'questions',
		component: QuestionsView
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	strict: true
})

export default router
