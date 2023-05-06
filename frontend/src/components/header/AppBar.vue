<script setup>
import FieldSeach from './FieldSeach.vue';
</script>

<template>
    <div>
        <img src="../../img/logo.jpg" alt="Logo" width="300">
        <FieldSeach/>
        <p><strong>+57 3053136807</strong></p>
        <div class="iconos">
            <img src="../../img/icons/whatsapp.png" alt="wsp" width="50">
            <img src="../../img/icons/administrador.png" alt="usuario" width="50">
            <img src="../../img/icons/carrito-de-compras.png" alt="carrito de compras" width="50">

        </div>
    </div>
</template>
<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(247, 247, 247);
    padding: 10px;
    flex-wrap: wrap;
}

@media only screen and (min-width: 1200px) {
   .iconos img{
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