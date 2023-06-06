<script setup>
//Importamos ref, porque nos vuelve una variable reactiva(que la variable espera que haya un cambio para reaccionar)
import {ref} from 'vue';
//
import CustomModal from '../common/CustomModal.vue';

const emit = defineEmits(['onCreate'])

const isModalOpen = ref(false);

const book = ref({});

function handleClickCreate() {
    emit('onCreate', book.value);
    isModalOpen.value = false;
}
</script>

<template>
    <button class="container_button" @click="isModalOpen = true">
        Añadir libro
    </button>
    <CustomModal :is-modal-open="isModalOpen" title="Añadir un libro" @on-close-modal="()=>isModalOpen=false">
        <div>
            <header>
                <p>Para añadir, completa los espacios vacíos</p>
            </header>
            <p>Título de libro*</p>
            <input type="text" v-model="book.nom_lib">
            <p>Autor*</p>
            <input type="text" v-model="book.aut_lib">
            <p>Precio*</p>
            <input type="number" v-model="book.precio_lib">
            <p>Género*</p>
            <input type="text" v-model="book.gen_lib">
            <p>Cantidad disponible</p>
            <input type="number" v-model="book.stock">
            <p>Link de la portada del libro*</p>
            <input type="url" v-model="book.imagen">
            <footer>
                <button @click="isModalOpen = false">cancel</button>
                <button @click="handleClickCreate">Añadir</button>
            </footer>
        </div>
    </CustomModal>
</template>

<style scoped>

.container_button {
    background-color: #D75C37;
    height: max-content;
    margin-left: auto;
    padding: 0.4rem 2rem;
    border-radius: 0.5rem;
    align-self: center;
    border: 0;
    color: white;
    font-size: 16px;
}

.container_button:hover {
    background-color: #BF3D16;
}
</style>