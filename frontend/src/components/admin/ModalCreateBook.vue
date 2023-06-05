<script setup>
//Importamos ref, porque nos vuelve una variable reactiva(que la variable espera que haya un cambio para reaccionar)
import { ref } from 'vue';
//
import CustomModal from '../common/CustomModal.vue';

const isModalOpen = ref(false);
const emit = defineEmits(['onCreate'])
const titulo = ref(""); 
const autor = ref("");
const precio = ref("");
const genero = ref (""); 
const cantidad = ref(""); 
const urlImagen = ref("");

function hadleClickCreate(){
    const book = {
        nom_lib:titulo.value,
        aut_lib:autor.value,
        precio_lib:precio.value,
        gen_lib:genero.value,
        stock:cantidad.value,
        imagen:urlImagen.value
    }
    emit('onCreate', book);
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
                <input type="text" v-model="titulo">
                <p>Autor*</p>
                <input type="text" v-model="autor">
                <p>Precio*</p>
                <input type="number" v-model="precio">
                <p>Género*</p>
                <input type="text" v-model="genero">
                <p>Cantidad disponible</p>
                <input type="number" v-model="cantidad">
                <p>Link de la portada del libro*</p>
                <input type="url" v-model="urlImagen">
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