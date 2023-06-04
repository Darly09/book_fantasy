<template>
    <section>
        <BooksTable :headers="headers" :items="items" />
    </section>
</template>

<script setup>

import BooksTable from 'vue3-easy-data-table';

const headers = [
    { text: "ID", value: "id"},
    { text: "Autor", value: "autor"},
    { text: "Precio", value: "precio"},
    { text: "Genero", value: "genero"},
    { text: "Registro", value: "fecha"},
    { text: "Estado", value: "stok"},
    { text: "Editar", value: "editar"},
    { text: "Eliminar", value: "eliminar"},
];


const items = [
    { libro: "", autor: "", number: 30, precio: '', genero: "", registro: "", estado: "", editar:"", eliminar:"" },
    
];
</script>

<style scoped>
section {
    margin-top: 1rem;
    height: 100%;
    border-radius: 0.5rem;
    background-color: white;
}
</style>