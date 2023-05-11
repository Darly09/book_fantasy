import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    redirect: 'Home',

},
{
    path: '/home',
    name: 'Home',
    component: () => import('./views/Home.vue')
},
{
    path: '/Login',
    name: 'Login',
    component: Login
}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router