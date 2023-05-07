<template>
    <section>        
        <div>
            <input class="form-control" id="encabezado" type="text" placeholder="Book Fantasy" disabled>
        </div>

        <form class="contenedor">
            <img class="imagen_perfil" src="../img/inicio.png">
            <div class="cabecera_correo">
                <img src="../img/email.png">
                <label for="FormEmail" class="form-label">Correo </label>
            </div>
            <input type="email" class="form-control" placeholder="Ingrese su correo" id="FormEmail">

            <div class="cabecera_contraseña">
                <img src="../img/password.png">
                <label for="Formpassword" class="form-label">Contraseña</label>
            </div>
            <input type="password" class="form-control" placeholder="Ingrese su contraseña" id="Formpassword">

            <div class="form-check">
                <label>
                    ¿Acepta terminos y condiciones?
                </label>
                <input  type="checkbox" value="">
            </div>

            <button type="button" class="button">Ingresar</button>
        </form>
    </section>
</template>

<style scoped>
section {
    background-image: url('../img/fondoo.jpg');
    background-size: cover;
    background-position: center;
    padding-top: 10px;
    height: 60rem;
}

.contenedor {
    display: flex;
    flex-direction: column;
    background-color: rgb(207, 207, 207);
    max-width: max-content;
    padding: 2rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
}

.contenedor .imagen_perfil {
    align-self: center;
    max-width: 12rem;
    background-color: white;
    border-radius: 50%;
}

.contenedor .cabecera_correo {
    padding-left: 0.5rem;
}

.contenedor .cabecera_correo img {
    max-width: 2rem;

}

.contenedor .cabecera_contraseña {
    padding-left: 0.5rem;
}

.contenedor .cabecera_contraseña img {
    max-width: 2rem;
}
.contenedor .form-check{
    display: flex;
    justify-content: space-between;
    background-color: aquamarine;
    padding: 0;
}

.contenedor .form-check label{
    background-color: blueviolet;
}

.contenedor .form-check input{
    background-color: blue;
    max-width: 1rem;
}

input {
    width: 20rem;

}

.button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.3rem 2rem;
}

/* label{
   color: black;
   
}

.form-control {
    background-color: rgb(243, 245, 245);
    margin-top: 15px;
    padding-top: 10px;
    border-radius: 15px;
    text-align: center;
}

form {
    width: 30rem;
    border-radius: 15px;
    text-align: center;
    padding: 50px 3rem;
    background-color: #14416ba6;
    margin: calc(38% + 1%);
    margin-top: 100px;
    font-size: 20px;
    
    
}

.button {
    border-radius: 15px;
    border: 1px solid transparent;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: 500;
   
}

button:active {
    transform: translateY(4px);
}

button:hover {
    background-color: #0a4a85a6;
} */</style>