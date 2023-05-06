import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)


//Inyectar código html al index
const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
