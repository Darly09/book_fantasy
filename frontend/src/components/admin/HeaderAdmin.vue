<template>
    <header>
        <div class="line"></div>
        <section>
            <h2>¡Bienvenido de nuevo, {{nombre}}!</h2>
            <p>Gestiona todos los libros de tu itinerario de una manera fácil y rápida</p>
        </section>
        <ModalCreateBook />
    </header>
</template>

<script setup>
import ModalCreateBook from './ModalCreateBook.vue';

defineProps(["nombre"])
</script>

<style scoped>
header {
    display: flex;
    width: 100%;
    height: max-content;
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;

}

.line {
    width: 0.5rem;
    background-color: #4B8A61;
    border-radius: 0.2rem;
}

section {
    margin: 0.2rem 1rem;
}

section h2{
    margin: 0;
    font-weight: bold;
}

section p {
    color: #5B656F;
    margin: 0;
}


</style>