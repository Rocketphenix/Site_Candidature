// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Remplace "nom-du-repo" par le nom de ton dépôt GitHub
export default defineConfig({
	base: "/Site_Candidature/",
	plugins: [vue()],
});
