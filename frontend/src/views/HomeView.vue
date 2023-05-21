<script setup>
import AppBar from '../components/common/AppBar.vue';
import Products from '../components/product/products.vue';
import Slide from '../components/Slide.vue';
import FooterC from '../components/common/FooterC.vue';
import NavBar from '../components/common/NavBar.vue';
import TopBook from '../components/product/TopBook.vue'
</script>
<template>
  <AppBar />
  <NavBar />
  <Slide />
  <div class="contenedor_libros">
    <Products class="libros" />
    <TopBook />
  </div>
  <FooterC />
</template>
<style scoped>
.contenedor_libros {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.libros {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 70%;
}
</style>

