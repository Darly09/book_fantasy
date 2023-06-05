<template>
    <section>
        <BooksTable :headers="headers" :items="books" class="table" :rows-items="[5, 10, 15]" :rows-per-page="10">
            <template #item-nom_lib="item">
                <div>
                    📖 {{ item.nom_lib }}
                </div>
            </template>
            <template #item-precio_lib="item">
                <div>
                    {{ currencyFormatter({ currency: "USD", value: item.precio_lib }) }}
                </div>
            </template>
            <template #item-stock="item">
                <div class="state" :class="{ disponible: item.stock > 0, agotado: item.stock === 0 }">
                    {{ stockValidation(item.stock) }}
                </div>
            </template>

            <template #item-editar>
                <img class="edit-icon" src="../../assets/img/icons/editIcon.svg" alt="icono de editar">
            </template>
            <template #item-eliminar="item">
                <ModalDeleteBook @on-delete="$event => $emit('onDelete', item.codigo)" />
            </template>
        </BooksTable>
    </section>
</template>

<script setup>

import BooksTable from 'vue3-easy-data-table';
import ModalDeleteBook from '../admin/ModalDeleteBook.vue';

defineProps(['books'])
defineEmits(['onDelete']);
const headers = [
    { text: "ID", value: "codigo" },
    { text: "Nombre", value: "nom_lib" },
    { text: "Autor", value: "aut_lib" },
    { text: "Precio", value: "precio_lib" },
    { text: "Genero", value: "gen_lib" },
    { text: "Estado", value: "stock" },
    { text: "Editar", value: "editar" },
    { text: "Eliminar", value: "eliminar" },
];

function currencyFormatter({ currency, value }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 0,
        currency
    })
    return formatter.format(value)
};

function stockValidation(stock) {
    if (stock > 0) {
        return "Disponible"
    } else {
        return "Agotado"
    }
}

</script>

<style scoped>
section {
    margin-top: 1rem;
    height: 100%;
    border-radius: 0.5rem;
    background-color: white;
    color: #5B656F;
}

.state {
    border-radius: 1rem;
    padding: 0 0.5rem 0 0.5rem;
}

.disponible {
    background-color: #C1D8C9;
    color: #4B8A61;
    text-align: center;
}

.agotado {
    background-color: #FFA58A;
    color: #BF3D16;
    text-align: center;
}

.edit-icon {
    width: 16px;
}

.state {
    border-radius: 0.5;
}

.delete-icon {
    width: 14px;
}
</style>