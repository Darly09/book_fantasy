<!--Es la configuración inicial del proyecto, donde definimos importaciones, parámetros-->
<script setup>
import Login from './views/Login.vue';
import Home from './views/Home.vue';
</script>
<!--Cada template(plantilla), es el componente que reutilizaremos-->
<template>
  <div>
    <Login/> 
   
    <router-view/>
  </div>
</template>

