import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Admin",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./views/Login.vue"),
  },
  {
    path: "/boysbook",
    name: "BoysBook",
    component: () => import("./views/BoysBook.vue"),
  },
  {
    path: "/blogbook",
    name: "BlogBook",
    component: () => import("./views/BlogBook.vue"),
  },
  {
    path: "/whobook",
    name: "Whobook",
    component: () => import("./views/WhoBook.vue"),
  },
  {
    path: "/login",
    name: "",
    component: () => import("./components/common/AppBar.vue"),
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

