import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import SkillsView from "../view/SkillsView.vue";

const router = createRouter({
		history: createWebHistory(import.meta.env.BASE_URL),
		routes: [
				{
						path: '/',
						name: 'Home',
						component: HomeView
				},
				{
					path: '/skills',
					name: 'Skills',
					component: SkillsView
				}
		]
})

export default router