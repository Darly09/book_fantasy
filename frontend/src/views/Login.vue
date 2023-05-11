<template>
    <section>
        <div>
            <input class="encabezado" id="encabezado" type="text" placeholder="Book Fantasy" disabled>
        </div>

        <form class="contenedor">
            <img class="imagen_perfil" src="../img/usuario.png">

            <div class="cabecera_correo">
                <img src="../img/email.png">
                <label for="FormEmail" class="form-label">Correo </label>
            </div>
            <input type="email" class="form-control" placeholder="Ingrese su correo" id="FormEmail">

            <div class="cabecera_contraseña">
                <img src="../img/key.png">
                <label for="Formpassword" class="form-label">Contraseña</label>
            </div>
            <input type="password" class="form-control" placeholder="Ingrese su contraseña" id="Formpassword">

            <div class="form-check">
                <label>
                    ¿Recordar usuario?
                </label>
                <input type="checkbox" value="">
            </div>

            <button type="button" class="button">Ingresar</button>
        </form>
    </section>
</template>

<style scoped>
.encabezado {
    display: flex;
    background-color: rgb(255, 255, 255);
    padding: 1rem;
    width: 50rem;
    margin: calc(0.5% + 2rem);
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    text-align: center;
    font-size: x-large;
}

section {
    background-image: url('../img/inicioo.jpg');
    background-size: cover;
    background-position: center;
    padding-top: 10px;
    height: 60rem;
    padding-left: 0.5rem;
}
.contenedor {
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: calc(0.5% + 6rem);
    max-width: max-content;
    padding: 2rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    background-color: #0d58a3a6;
}

.contenedor .imagen_perfil {
    align-self: center;
    max-width: 10rem;
    border-radius: 50%;
}

.contenedor .cabecera_correo {
    padding-left: 1rem;
    color: black;
    font-size: larger
}

.contenedor .cabecera_correo img {
    max-width: 2rem;
}
.contenedor .cabecera_contraseña {
    padding-left: 0.7rem;
    color: black;
    font-size: larger
}

.contenedor .cabecera_contraseña img {
    max-width: 2rem;
}
.contenedor .form-check {
    display: flex;
    font-size: larger;
    padding: 0;
}
.contenedor .form-control {
    border-radius: 1rem;
}
.contenedor .form-check input {
    max-width: 1rem;
}
input {
    width: 20rem;
}
.button {
    border: none;
    border-radius: 0.9rem;
    padding: 0.5rem 5rem;
}
button:active {
    transform: translateY(4px);
}
button:hover {
    background-color: #748da5a6;
}
</style>

