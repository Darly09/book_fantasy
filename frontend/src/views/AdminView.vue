<script setup>
import ContentAdmin from '../components/admin/ContentAdmin.vue';
import HeaderAdmin from '../components/admin/HeaderAdmin.vue';
import NavBarAdmin from '../components/admin/NavBarAdmin.vue'
</script>

<template>
    <main>
        <NavBarAdmin />
        <section>
            <HeaderAdmin nombre="Felipe" />
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