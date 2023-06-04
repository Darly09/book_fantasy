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
    component: () => import("./views/login.vue"),
  },
  {
    path:"/boysbook",
    name:"BoysBook",
    component: () => import("./views/BoysBook.vue"),
  },
  {
    path:"/blogbook",
    name:"BlogBook",
    component: () => import("./views/blogbook.vue"),
  },
  {
    path:"/whobook",
    name:"Whobook",
    component: () => import("./views/whobook.vue"),
  },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

