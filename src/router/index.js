import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import( "../view/HomeView.vue");
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
					component: () => import("../view/SkillsView.vue")
				},
				{
					path: '/about',
					name: 'About',
					component: () => import("../view/AboutView.vue")
				},
				{
					path: '/about/gallery',
					name: 'Gallery',
					component: () => import("../view/GalleryView.vue")
				},
				{
					path: '/about/completions',
					name: 'Completions',
					component: () => import("../view/CompletionsView.vue")
				},
				{
					path: '/projects',
					name: 'Projects',
					component: () => import("../view/ProjectsView.vue")
				},
				{
					path: '/contact',
					name: 'Contact',
					component: () => import("../view/ContactView.vue")
				}
		]
})
export default router