<script setup>
//Son propiedades para el componente
defineProps(['carousel'])

function addActive(index) {
    console.log(index)
    let active = ""
    if (index === 0) {
        active = "active"
    }
    return `carousel-item ${active}`
}

</script>
<template>
    <div id="carrusel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div :class="addActive(index)" v-for="(item, index) in carousel" :key="item.id">
                <img :src="item.image" class="d-block w-100" :alt="item.name">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carrusel"
                data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carrusel"
                data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped>
#carrusel {
    margin: 0 2rem 2rem 2rem;
}

.carousel-inner {
    border-radius: 27px;
}

</style>