<script setup>
import { onMounted, ref } from 'vue';
import ContentAdmin from '../components/admin/ContentAdmin.vue';
import HeaderAdmin from '../components/admin/HeaderAdmin.vue';
import NavBarAdmin from '../components/admin/NavBarAdmin.vue'
import { getAllBooks } from '../services/book.services';

const name = "Mor"
const books = ref([]);

onMounted(async () => {
    const booksResponse = await getAllBooks()
    books.value = booksResponse;
})
</script>

<template>
    <main>
        <NavBarAdmin />
        <section class="content">
            <HeaderAdmin :nombre="name" />
            <ContentAdmin :books="books" />
        </section>
    </main>
</template>

<style scoped>
main {
    overflow: hidden;
    max-height: 100vh;
    display: flex;
}

section.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    background-color: #ECECEC;
    overflow: auto;
    max-height: 100vh;
}
</style>