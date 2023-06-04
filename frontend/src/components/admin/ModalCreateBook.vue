<script setup>
import { ref } from 'vue';
import CustomModal from '../common/CustomModal.vue';

const isModalOpen = ref(false);
console.log(isModalOpen.value);
</script>

<template>
    <button class="container_button" @click="isModalOpen = true">
        <img class="edit-icon" src="../../assets/img/icons/editIcon.svg" alt="icono de editar">
    </button>
    <CustomModal :is-modal-open="isModalOpen" title="Añadir un libro" >
        <div>
        </div>
    </CustomModal>
</template>

<style scoped>
.container_button {
    border: none;
    background-color: transparent;
    border-radius: 0.5rem;
    padding: 0.2rem 0.4rem;
    margin: 0.2rem;
}

.container_button:hover {
    background-color: white;
}
</style>