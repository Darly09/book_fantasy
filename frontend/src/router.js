import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./views/LoginView.vue"),
  },
  {
    path: "/boysbook",
    name: "BoysBook",
    component: () => import("./views/BoysBookView.vue"),
  },
  {
    path: "/blogbook",
    name: "BlogBook",
    component: () => import("./views/BlogBookView.vue"),
  },
  {
    path: "/whobook",
    name: "Whobook",
    component: () => import("./views/WhoBookView.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("./views/AdminView.vue")
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

