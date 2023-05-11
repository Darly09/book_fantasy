<template>
    <div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Book fantasy te recomienda</a>
            <a href="#">Book fantasy blog</a>
            <a href="#">Niños</a>
            <a href="#">Usados</a>
            <a href="#">¿Quiénes somos?</a>
        </nav>
    </div>
</template>

<style scoped>
nav {
    background-color: #333;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 1rem;
}

nav a {
    color: white;
    text-align: center;
    padding: 1rem 1rem;
    text-decoration: none;
    flex-grow: 1;
}

nav a:hover {
    background-color: #ddd;
    color: black;
}

</style>
