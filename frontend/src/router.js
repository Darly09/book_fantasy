import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'

const routes = [{
    path: '/',
    redirect: 'Home',

},
{
    path: '/home',
    name: 'Home',
    component: Home
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