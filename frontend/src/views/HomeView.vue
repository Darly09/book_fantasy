<script setup>
import { onMounted, ref } from 'vue';
import AppBar from '../components/common/AppBar.vue';
import Products from '../components/product/Products.vue';
import Slide from '../components/home/Slide.vue';
import FooterLayout from '../components/common/FooterLayout.vue';
import NavBar from '../components/common/NavBar.vue';
import Top from '../components/product/Top.vue'
import { getHomeInformation } from '../services/home.services';

// Variable reactiva 💋
const bestSellingBooks = ref([]);
const carousel = ref([]);
const books = ref([]);

// Ciclo de vida del componente, se activa cuando se monta el componente
onMounted(async () => {
  const homeInformation = await getHomeInformation()
  bestSellingBooks.value = homeInformation.best_selling_books;
  carousel.value = homeInformation.carrousel;
  books.value = homeInformation.books;
})
</script>
<template>
  <AppBar />
  <NavBar />
  <Slide :carousel="carousel" />
  <div class="contenedor_libros">
    <Products :products="books" class="libros" />
    <Top class="top" :tops="bestSellingBooks" titulo="Los más vendidos"/>
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
