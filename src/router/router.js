import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Help from "@/views/HelpView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/help/creating-international-payments",
    name: "help",
    component: Help,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
