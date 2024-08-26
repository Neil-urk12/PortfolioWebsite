import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import( "../view/HomeView.vue");
const SkillsView = () => import("../view/SkillsView.vue");
const AboutView = () => import("../view/AboutView.vue");
const ProjectsView = () => import("../view/ProjectsView.vue");
const ContactView = () => import("../view/ContactView.vue");

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
				},
				{
					path: '/about',
					name: 'About',
					component: AboutView
				},
				{
					path: '/projects',
					name: 'Projects',
					component: ProjectsView
				},
				{
					path: '/contact',
					name: 'Contact',
					component: ContactView
				}
		]
})

export default router