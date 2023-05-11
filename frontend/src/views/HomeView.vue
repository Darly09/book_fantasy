<script setup>
import AppBar from '../components/common/AppBar.vue';
import ProductItem from '../components/product/productItem.vue';
import Products from '../components/product/products.vue';
import Slide from '../components/Slide.vue';
import FooterC from '../components/common/FooterC.vue';
import NavBar from '../components/common/NavBar.vue';
import TopBook from '../components/product/TopBook.vue'
//Se crea una referencia para poder pasar parámetros a un componente
//El ref nos ayuda a llevar estos valores al componente
import { ref } from 'vue';
//Creamos un array para renderizar los productos
const products = ref([
  //Aquí colocamos los elementos que queremos renderizar 
  { id: 1, img: "../../../src/assets/img/books/1984.jpg", titulo: "1984", precio: "45.000" },
  { id: 2, img: "../../../src/assets/img/books/alicia.jpg", titulo: "Alicia en el país de las maravillas", precio: "162.000" },
  { id: 3, img: "../../../src/assets/img/books/charlie.webp", titulo: "Charlie y la fábrica de chocolates", precio: "59.000" },
  { id: 4, img: "../../../src/assets/img/books/colera.webp", titulo: "El amor en los tiempos del cólera", precio: "62.100" },
  { id: 5, img: "../../../src/assets/img/books/el_principito.jpg", titulo: "El principito", precio: "54.000" },
  { id: 6, img: "../../../src/assets/img/books/gatsby.webp", titulo: "El gran Gatsby", precio: "80.000" },
  { id: 7, img: "../../../src/assets/img/books/hombre_sentido.webp", titulo: "El hombre en busca del sentido", precio: "55.000" },
  { id: 8, img: "../../../src/assets/img/books/hp_1.jpg", titulo: "Harry Potter y la piedra filosofal", precio: "95.000" },
  { id: 9, img: "../../../src/assets/img/books/ladrona.webp", titulo: "La ladrona de libros", precio: "49.500" },
  { id: 10, img: "../../../src/assets/img/books/orgullo.webp", titulo: "Orgullo y prejuicio", precio: "75.000" },
  { id: 11, img: "../../../src/assets/img/books/telaraña.webp", titulo: "La telaraña de Carlota", precio: "80.600" },
  { id: 12, img: "../../../src/assets/img/books/tiempo.webp", titulo: "Historia del tiempo", precio: "80.100" },
  { id: 13, img: "../../../src/assets/img/books/hambre.jpg", titulo: "Los juegos del hambre", precio: "59.000" },
  { id: 14, img: "../../../src/assets/img/books/anillo.jpg", titulo: "El Señor de los Anillos", precio: "130.300" },
  { id: 15, img: "../../../src/assets/img/books/resplandor.webp", titulo: "El resplandor", precio: "43.000" },
  { id: 16, img: "../../../src/assets/img/books/quijote.webp", titulo: "Don quijote de la mancha", precio: "75.200" },
  { id: 17, img: "../../../src/assets/img/books/hamlet.jpg", titulo: "Hamlet", precio: "69.000" },
  { id: 18, img: "../../../src/assets/img/books/borracosas.webp", titulo: "Cumbres borracosas", precio: "24.300" },
])
</script>
<template>
  <AppBar />
  <NavBar />
  <Slide />
  <Products />
  <div class="contenedor_libros">
    <div class="libros">
      <ProductItem v-for="product in products" :img="product.img" :titulo="product.titulo" :precio="product.precio" />
    </div>
    <TopBook />
  </div>
  <FooterC />
</template>
<style scoped>
.contenedor_libros{
  display: flex;
  flex-wrap: wrap;
}
.libros {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 70%;
}
</style>

