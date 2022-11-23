import { createRouter, createWebHistory } from "vue-router";
import FilmesPrinView from "@/views/FilmesPrinView.vue";
import ProfView from "@/views/ProfView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/perfil_usuario", name: "Perfil", component: ProfView },
    {path: "/", name: "Home", component: HomeView },
    {path: "/Filmes/:id", nome: "Filmes", component: FilmesPrinView, props: true },
  ],
});

export default router;
