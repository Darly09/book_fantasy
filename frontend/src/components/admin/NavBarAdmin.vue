<template>
    <nav>
        <div class="contenedor_cabecera">
            <img class="logo_login" src="../../assets/img/icons/logo_footer.svg" alt="Logo login">
            <button class="button_home">Home</button>
        </div>
        <div class="contenedor_salir">
            <img class="salir" src="../../assets/img/icons/salir.svg" alt="Salir">
            <p> <a href="#">Salir</a></p>
        </div>
    </nav>
</template>

<style scoped>
nav {

    height: 100vh;
    width: 19rem;
    background: #2C353E;
    display: flex;
    flex-direction: column;
    border-radius: 0 1rem 1rem 0;
    padding: 5rem 1.5rem 3rem 1.5rem;
    justify-content: space-between;
}

.contenedor_cabecera {
    display: flex;
    flex-direction: column;
}

.logo_login {
    display: flex;
    align-items: center;
    padding: 0 2rem;
}

.button_home {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: #fff;
    border-radius: 0.7rem;
    color: #2C353E;
    font-size: 16px;
}

.contenedor_salir {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* padding: 0 1rem; */
}

.salir {
    width: 1.5rem;
}

p {
    height: 100%;
    margin: 0;
    width: 50%;
}

p a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
}
</style>