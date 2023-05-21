<template>
    <section>
        <h4>Novedades</h4>
        <div class="products">
            <ProductItem v-for="product in products" :img="product.img" :titulo="product.titulo" :autor="product.autor"
                :precio="product.precio" />
        </div>
    </section>
</template>

<script setup>
import ProductItem from './ProductItem.vue';
//Se crea una referencia para poder pasar parámetros a un componente
//El ref nos ayuda a llevar estos valores al componente
import { ref } from 'vue';
//Creamos un array para renderizar los productos
const products = ref([
    //Aquí colocamos los elementos que queremos renderizar 
    { id: 1, img: "../../../src/assets/img/books/1984.jpg", titulo: "1984", autor: "George Orwell", precio: "45.000" },
    { id: 2, img: "../../../src/assets/img/books/alicia.jpg", titulo: "Alicia en el país de las maravillas", autor: "Lewis Carroll", precio: "162.000" },
    { id: 3, img: "../../../src/assets/img/books/charlie.webp", titulo: "Charlie y la fábrica de chocolates", autor: "Roald Dahl", precio: "59.000" },
    { id: 4, img: "../../../src/assets/img/books/colera.webp", titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", precio: "62.100" },
    { id: 5, img: "../../../src/assets/img/books/el_principito.jpg", titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: "54.000" },
    { id: 6, img: "../../../src/assets/img/books/gatsby.webp", titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", precio: "80.000" },
    { id: 7, img: "../../../src/assets/img/books/hombre_sentido.webp", titulo: "El hombre en busca del sentido", autor: "Viktor E. Frankl", precio: "55.000" },
    { id: 8, img: "../../../src/assets/img/books/hp_1.jpg", titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", precio: "95.000" },
    { id: 9, img: "../../../src/assets/img/books/ladrona.webp", titulo: "La ladrona de libros", autor: "Markus Zusak", precio: "49.500" },
    { id: 10, img: "../../../src/assets/img/books/orgullo.webp", titulo: "Orgullo y prejuicio", autor: "Jane Austen", precio: "75.000" },
    { id: 11, img: "../../../src/assets/img/books/telaraña.webp", titulo: "La telaraña de Carlota", autor: "E.B. White", precio: "80.600" },
    { id: 12, img: "../../../src/assets/img/books/tiempo.webp", titulo: "Historia del tiempo", autor: "Stephen Hawking", precio: "80.100" },
    { id: 13, img: "../../../src/assets/img/books/hambre.jpg", titulo: "Los juegos del hambre", autor: "Suzanne Collins", precio: "59.000" },
    { id: 14, img: "../../../src/assets/img/books/anillo.jpg", titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", precio: "130.300" },
    { id: 15, img: "../../../src/assets/img/books/resplandor.webp", titulo: "El resplandor", autor: "Stephen King", precio: "43.000" },
    { id: 16, img: "../../../src/assets/img/books/quijote.webp", titulo: "Don quijote de la mancha", autor: "William Shakespeare", precio: "75.200" },
    { id: 17, img: "../../../src/assets/img/books/hamlet.jpg", titulo: "Hamlet", autor: "William Shakespeare", precio: "69.000" },
    { id: 18, img: "../../../src/assets/img/books/borracosas.webp", titulo: "Cumbres borracosas", precio: "24.300", autor: "Emily Brontë" },
])
</script>

<style scoped>
section {
    margin: auto 2rem;
}

h4 {
    color: #2C353E;
    width: 155px;
    height: 41px;
    left: 96px;
    top: 610px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
}

.products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>