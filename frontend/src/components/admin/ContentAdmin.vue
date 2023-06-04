<template>
    <section>
        <BooksTable :headers="headers" :items="items" />
    </section>
</template>

<script setup>

import BooksTable from 'vue3-easy-data-table';

const headers = [
    { text: "Código", value: "codigo"},
    { text: "Autor", value: "autor"},
    { text: "Precio", value: "precio"},
    { text: "Genero", value: "genero"},
    { text: "Registro", value: "fecha"},
    { text: "Estado", value: "stok"},
    { text: "Editar", value: "editar"},
    { text: "Eliminar", value: "eliminar"},
];


const items = [
    { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: { "height": '6-2', "weight": 185 }, lastAttended: "Davidson", country: "USA" },
    { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: { "height": '6-9', "weight": 250 }, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA" },
    { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: { "height": '6-10', "weight": 240 }, lastAttended: "Texas-Austin", country: "USA" },
    { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: { "height": '6-11', "weight": 242 }, lastAttended: "Filathlitikos", country: "Greece" },
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