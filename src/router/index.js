import { createRouter, createWebHistory } from "vue-router";
import AddPostes from "../components/AddPoste/AddPoste.vue";
import PosteDetail from "../components/DetailPoste/DetailPoste.vue";

const routes = [
	{ path: "/", component: AddPostes },
	{ path: "/poste/:id", component: PosteDetail, props: true },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
