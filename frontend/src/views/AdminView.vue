<script setup>
import { onMounted, ref } from 'vue';
import ContentAdmin from '../components/admin/ContentAdmin.vue';
import HeaderAdmin from '../components/admin/HeaderAdmin.vue';
import NavBarAdmin from '../components/admin/NavBarAdmin.vue'
import { getAllBooks, deleteBookByCode, createBook, updateBook } from '../services/book.services';

const name = "Mor"
const books = ref([]);

onMounted(async () => {
    const booksResponse = await getAllBooks()
    books.value = booksResponse;
})

async function handleDelete(code) {
    await deleteBookByCode(code)
    books.value = books.value.filter(book =>book.codigo !== code)
}

async function handleCreate(book){
    const response = await createBook(book)
    if(response.isCreate){
        books.value.push(response.data)
    }else{
        console.error(response.data.error);
    }
}

async function handleUpdate(book){
    console.log(book);
    const response = await updateBook(book)
    if(response.code===200){
        console.log(response);
    }else{
        console.error(response);
    }
}


</script>

<template>
    <main>
        <NavBarAdmin />
        <section class="content">
            <HeaderAdmin :nombre="name" @on-create="handleCreate"/>
            <ContentAdmin :books="books" @on-delete="handleDelete" @on-update="handleUpdate"/>
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