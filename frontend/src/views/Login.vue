<template>
    <section>
        <div class="header">
            <img src="../img/login/Frame 6.png">
        </div>

        <div class="header-book">
            <img src="../img/login/Frame 2.png">
        </div>

        <div class="container-form"></div>
        <div class="img-form">
        </div>
        <form class="form">
            <div class="text-form">
                <h2>¡Bienvenido!</h2>
                <p>Para ingresar, completa los campos </p>
            </div>
            <div class="input">
                <label for="user">Email</label>
                <input placeholder="Ingresa tu nombre" type="text" id="usuario">
            </div>
            <div class="input">
                <label class="password">Contraseña </label>
                <input placeholder="Ingresa tu contraseña" type="password" id="password">
                <img src="../img/login/visibilidad.png" onclick="pass()" class="pass-ico">
            </div>
            <button type="button" class="button">Ingresar</button>
        </form>
    </section>
</template>

<script>
function pass() {
    var tipo = document.getElementById("password");
    if (tipo.type == 'password') {
        tipo.type = 'text';
    } else {
        tipo.type = 'password';

    }
}

</script>

<style scoped> .header {
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     padding: 0.5rem;
     position: absolute;
     width: 20px;
     left: 100px;
     top: 100px;
 }

 .header-book {
     display: flex;
     flex-direction: row;
     align-items: center;
     padding: 0.5rem;
     gap: 8px;
     position: absolute;
     width: 174px;
     height: 28px;
     left: 102rem;
     top: 100px;
 }

 section {

     display: flex;
     align-items: center;
     height: 90vh;
     position: fixed;
     top: 0;
     left: 0;
 }

 .img-form {
     flex-direction: row;
     align-items: center;
     flex: 0 0 calc(50%);
     margin: calc(65% + 25px);
     background-image: url('../img/login/Login.png');
     border-radius: 5%;
     background-size: cover;
     margin-top: 55rem;
     position: absolute;
     width: 398px;
     height: 395px;
 }

 @media(min-width:768px) {
     .container-form {
         display: flex;
     }
 }

 .form {
     padding: 30rem;
     background-color: #ffffff;

 }

 .text-form h2 {
     font-size: 40px;
     text-align: center;
     font-size: 30px;
 }

 .text-form p {
     font-size: 20px;
     text-align: center;
 }

 .input label {
     display: block;
     font-size: 20px;
 }

 .input .pass-ico {
     position: absolute;
     right: 28rem;
     padding: 4.5rem;
     width: 25px;
     height: 25px;
     top: 50%;
     cursor: pointer;
 }

 .input input {
     background-color: #F5F7F9;
     margin-bottom: 10px;
     width: 15rem;
     padding: 10px 10px;
     border-radius: 10px;
     border: 1px solid transparent;
 }

 .button {
     background-color: #D75C37;
     border: 1px solid transparent;
     width: 16rem;
     padding: 10px;
     border-radius: 10px;
 }

 .button:active {
     transform: translateY(4px);
 }

 .button:hover {
     background-color: #e46444a6;
 }</style>