
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

//Inyectar código html al index
const app = createApp(App)
    .use(router)
    .mount('#app')
