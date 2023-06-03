<script setup>
import { onMounted } from 'vue';
import AppBar from '../components/common/AppBar.vue';
import Products from '../components/product/Products.vue';
import Slide from '../components/home/Slide.vue';
import FooterLayout from '../components/common/FooterLayout.vue';
import NavBar from '../components/common/NavBar.vue';
import Top from '../components/product/Top.vue'
import { getHomeInformation } from '../services/home.services';

onMounted(async () => {
  const data = await getHomeInformation()
  console.log(data)
})
</script>
<template>
  <AppBar />
  <NavBar />
  <Slide />
  <div class="contenedor_libros">
    <Products class="libros" />
    <Top class="top" titulo="Los más vendidos"/>
  </div>
  <FooterLayout />
</template>
<style scoped>
.contenedor_libros {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.libros {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 70%;
  flex-grow: 1;
}

.top{
  display: flex;
  flex: 0 0 25%;
}
</style>
