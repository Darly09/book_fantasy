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
import ProductsModel from '../../models/Products.js';
//Se crea una referencia para poder pasar parámetros a un componente
//El ref nos ayuda a llevar estos valores al componente
import { ref } from 'vue';
//Creamos un array para renderizar los productos
const products = ref(ProductsModel)
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
