<script setup>
//Importamos ref, porque nos vuelve una variable reactiva(que la variable espera que haya un cambio para reaccionar)
import {ref, watch} from 'vue';
//
import CustomModal from '../common/CustomModal.vue';

const isModalOpen = ref(false);

const emits = defineEmits(['onUpdate'])

const props = defineProps(['book'])

const book = ref({});
function handleClickUpdate() {
    emits('onUpdate', {...book.value});
    isModalOpen.value = false;
}

watch(props, () => {
    book.value = props.book;
}, {immediate: true})
</script>

<template>
    <button class="container_button" @click="isModalOpen = true">
        <img class="edit-icon" src="../../assets/img/icons/editIcon.svg" alt="icono de editar">
    </button>
    <CustomModal :is-modal-open="isModalOpen" title="Editar" @on-close-modal="isModalOpen=false">
        <div>
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
                <button @click="handleClickUpdate">Guardar cambios</button>
            </footer>
        </div>
    </CustomModal>
</template>

<style scoped>

.container_button {
    border: none;
    background-color: transparent;
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem;
}

.container_button:hover {
    background-color: white;
}
</style>