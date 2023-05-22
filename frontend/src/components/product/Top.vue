<template>
    <section class="contenedor_top">
        <div class="header_top">
            <h4>{{ titulo }}</h4>
            <img src="../../assets/img/icons/regresar.svg" alt="regresar">
        </div>
        <div class="tops">
            <TopItem v-for="top in tops" :img="top.img" :titulo="top.titulo" :autor="top.autor" />
        </div>
    </section>
</template>

<script setup>
import TopItem from './TopItem.vue';
import TopsItem from '../../models/Tops';
import { ref } from 'vue';
//Son propiedades para el componente
defineProps(['titulo'])
const tops = ref(TopsItem)
</script>

<style scoped>
.contenedor_top {
    background-color: #C1D8C9;
    display: flex;
    border-radius: 2rem;
    padding: 2.5rem 1.8rem;
    flex-direction: column;
}

.header_top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: max-content;
    align-items: center;
}

h4 {
    font-size: 1.8rem;
    font-weight: 700;
    height: max-content;
}

img {
    width: 5rem;
    height: max-content;
}
</style>