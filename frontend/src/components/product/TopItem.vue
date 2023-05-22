<template>
    <div class="item">
        <img class="imagen" :src="img" alt="imagen">
        <div class="info_item">
            <h5>{{ titulo }}</h5>
            <h6>{{ autor }}</h6>
        </div>
    </div>
    <div class="linea"></div>
</template>

<script setup>
defineProps(['img', 'titulo', 'autor'])
</script>

<style scoped>
.item {
    display: flex;
}

img {
    height: 16rem;
    border-radius: 1rem;
}

.info_item{
    max-width: 10rem;
    margin-left: 1rem;
}

h5 {
    color: black;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

h6 {
    color: #5B656F;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.linea{
    background-color: #79AC8B;
    height: 0.1rem;
    margin-top: 1.5rem;
}
</style>