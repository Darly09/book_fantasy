<script setup>
//Importamos ref, porque nos vuelve una variable reactiva(que la variable espera que haya un cambio para reaccionar)
import { ref } from 'vue';
//
import CustomModal from '../common/CustomModal.vue';

const isModalOpen = ref(false);
const emit = defineEmits(['onCreate'])
console.log(isModalOpen.value);

function hadleClickCreate(){
    emit('onCreate');
    isModalOpen.value = false;
}
</script>
 
<template>
    <button class="container_button" @click="isModalOpen = true">
        Añadir libro
    </button>
    <CustomModal :is-modal-open="isModalOpen" title="Añadir un libro" >
        <div>
            <header>
                <p>Para añadir, completa los espacios vacíos</p>
            </header>
            <body>
                <p>Título de libro*</p>
                <input type="text">
                <p>Autor*</p>
                <input type="text">
                <p>Precio*</p>
                <input type="number">
                <p>Link de la portada del libro*</p>
                <input type="url">
                <footer>
                <button @click="isModalOpen = false">cancel</button>
                <button @click="hadleClickCreate">Añadir</button>
                </footer>
            </body>
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