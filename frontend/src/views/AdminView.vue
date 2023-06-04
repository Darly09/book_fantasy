<script setup>
import ContentAdmin from '../components/admin/ContentAdmin.vue';
import HeaderAdmin from '../components/admin/HeaderAdmin.vue';
import NavBarAdmin from '../components/admin/NavBarAdmin.vue'

const name = "Mor"
</script>

<template>
    <main>
        <NavBarAdmin />
        <section>
            <HeaderAdmin :nombre = "name" />
            <ContentAdmin />
        </section>
    </main>
</template>

<style scoped>
main {
    display: flex;
}

section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    background-color: #ECECEC;
}
</style>