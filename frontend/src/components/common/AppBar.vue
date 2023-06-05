<script setup>
import FieldSeach from './FieldSeach.vue';
</script>

<template>
    <div>
        <img class="logo" src="../../assets/img/logo.svg" alt="Logo" width="300">
        <FieldSeach />
        <div class="iconos">
            <router-link to="/login" exact-active-class="active" ><img src="../../assets/img/icons/usuario.svg" alt="usuario" width="35"></router-link>
            <a href="#"><img src="../../assets/img/icons/carrito_compras.svg" alt="carrito de compras" width="35"></a>

        </div>
    </div>
</template>
<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);
    padding: 1.5rem 2rem;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 174px;
    height: 28px;
    left: 96px;
    top: 61px;
}

@media only screen and (min-width: 1200px) {
    .iconos img {
        margin-left: 1rem;
        margin-right: 1rem;

    }
}

input {
    width: 35rem;
}

button:hover {
    background-color: blue !important;
}
</style>