<script setup>
import { ref, defineEmits } from 'vue';
import CustomModal from '../common/CustomModal.vue';

const isModalOpen = ref(false);
const emit = defineEmits(['onDelete']);

function handleClickDelete() {
    emit('onDelete');
    isModalOpen.value = false;
}
</script>
<template>
    <button class="container-button" @click="isModalOpen = true">
        <img class="delete-icon" src="../../assets/img/icons/deleteIcon.svg" alt="icono de eliminar">
    </button>
    <CustomModal :is-modal-open="isModalOpen">
        <div>
            <p>Si estás seguro/a de tu decisión y deseas continuar, ten en cuenta que una vez eliminado, no se podrá recuperar la información ni los datos asociados al libro.</p>
            <footer>
                <button @click="isModalOpen = false">cancel</button>
                <button @click="handleClickDelete">Si, eliminar</button>
            </footer>
        </div>
    </CustomModal>
</template>
<style scoped>
.container-button {
    background-color: transparent;
    border: none;
}
</style>