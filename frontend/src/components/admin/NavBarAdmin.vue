<template>
    <nav>
        <div class="contenedor_cabecera">
            <img class="logo_login" src="../../assets/img/icons/logo_footer.svg" alt="Logo login">
            <button class="button_home"><strong>Home</strong></button>
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
    width: 16rem;
    background: #2C353E;
    display: flex;
    flex-direction: column;
    border-radius: 0 1rem 1rem 0;
    padding: 3.5rem 1.5rem 3rem 1.5rem;
    justify-content: space-between;
}

.contenedor_cabecera {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo_login {
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 150px;
    left: 96px;
    top: 61px;
}

.button_home {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.2rem;
    background: #fff;
    border-radius: 0.5rem;
    color: #2C353E;
    font-size: 16px;
    border: none;
    width: 180px;
}

.contenedor_salir {
    display: flex;
    justify-content: space-around;
    align-items: center;
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