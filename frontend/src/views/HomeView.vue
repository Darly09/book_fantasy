<script setup>
import AppBar from '../components/common/AppBar.vue';
import Products from '../components/product/Products.vue';
import Slide from '../components/Slide.vue';
import FooterC from '../components/common/FooterC.vue';
import NavBar from '../components/common/NavBar.vue';
import Top from '../components/product/Top.vue'
</script>
<template>
  <AppBar />
  <NavBar />
  <Slide />
  <div class="contenedor_libros">
    <Products class="libros" />
    <Top class="top" titulo="Los más vendidos"/>
  </div>
  <FooterC />
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

