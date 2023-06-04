<template>
    <section>
        <h4>Novedades</h4>
        <div class="products">
            <ProductItem v-for="product in products" :img="product.imagen" :titulo="product.nom_lib" :autor="product.aut_lib"
                :precio="product.precio_lib" :key="product.codigo" />
        </div>
    </section>
</template>

<script setup>
import ProductItem from './ProductItem.vue';

defineProps(['products'])
</script>

<style scoped>
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