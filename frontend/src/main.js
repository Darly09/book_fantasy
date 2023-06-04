
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
// Importación para utilizar la dependencia de la tabla
import 'vue3-easy-data-table/dist/style.css';

//Inyectar código html al index
const app = createApp(App)

app.use(router)
app.mount('#app')
