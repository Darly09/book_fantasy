<template>
    <div>
        <nav>
            <router-link to="/home" exact-active-class="active">Home</router-link> 
            <a href="#">Recomendados</a>
            <router-link to="/boysbook" exact-active-class="active">Libros infantiles</router-link> 
            <a href="#">Libros usados</a>
            <router-link to="/blogbook" exact-active-class="active">Blog</router-link>
            <router-link to="/whobook" exact-active-class="active">¿ Quienes Somos ?</router-link>
        </nav>
    </div>
</template>

<style scoped>
nav {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
}

nav a {
    color: #5B656F;
    text-align: center;
    padding: 1rem 2rem;
    text-decoration: none;
}

nav a:hover {
    color: #D75C37;
}

.active {
    color: #D75C37;
    font-weight: bold;
}
</style>
