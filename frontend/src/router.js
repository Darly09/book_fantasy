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
    path: "/Login",
    name: "Login",
    component: () => import("./views/Login.vue"),
  },
  {
    path:"/boysbook",
    name:"BoysBook",
    component: () => import("./views/BoysBook.vue"),
  },
  {
    path:"/blogbook",
    name:"BlogBook",
    component: () => import("./views/blogbook.vue")
  },
  {
    path:"/admin",
    name:"Admin",
    component: () => import("./views/AdminView.vue")
  },  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
