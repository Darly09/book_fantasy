<script setup>
//Importamos ref, porque nos vuelve una variable reactiva(que la variable espera que haya un cambio para reaccionar)
import { ref } from 'vue';
//
import CustomModal from '../common/CustomModal.vue';

const isModalOpen = ref(false);

const emits = defineEmits(['onUpdate'])

const props = defineProps(['book'])

const book = props.book;
console.log(book);
const titulo = ref(book.nom_lib); 
const autor = ref(book.aut_lib);
const precio = ref(book.precio_lib);
const genero = ref (book.gen_lib); 
const cantidad = ref(book.stock); 
const urlImagen = ref(book.imagen);


function hadleClickUpdate(){
    const bookUpdate = {
        codigo:book.codigo,
        nom_lib:titulo.value,
        aut_lib:autor.value,
        precio_lib:precio.value,
        gen_lib:genero.value,
        stock:cantidad.value,
        imagen:urlImagen.value
    }
    console.log(bookUpdate);
    emits('onUpdate', bookUpdate);
    isModalOpen.value = false;
}
</script>
 
<template>
    <button class="container_button" @click="isModalOpen = true">
        <img class="edit-icon" src="../../assets/img/icons/editIcon.svg" alt="icono de editar">
    </button>
    <CustomModal :is-modal-open="isModalOpen" title="Editar" >
        <div>
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
                <button @click="hadleClickUpdate">Guardar cambios</button>
                </footer>
            </body>
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