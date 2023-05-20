import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Boysbook",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("./views/Login.vue"),
  },
  {
    path:"/boysbook",
    name:"BoysBook",
    component: () => import("./views/BoysBook.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
