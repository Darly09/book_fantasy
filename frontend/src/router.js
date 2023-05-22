import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("./views/Login.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
