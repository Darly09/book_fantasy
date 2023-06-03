



<template>
    <section>
        <div class="header">
            <img src="../assets/img/login/Frame 6.png">
            <img src="../assets/img/login/Frame 2.png">
        </div>
        <div class="img-form"></div>
        <div class="container_form">
            
            <form class="form">

                <div class="text-form">
                    <h2>¡Bienvenido!</h2>
                    <p>Para ingresar, completa los campos </p>
                </div>

                <div class="input">
                    <label for="user">Email</label>
                    <input placeholder="Ingresa tu email" type="text" id="usuario">
                </div>

                <div class="input">
                    <label class="password">Contraseña </label>
                    <input placeholder="Ingresa tu contraseña" type="password" id="password">
                    <img src="../assets/img/login/vista.png" onclick="pass()" class="pass-ico">
                </div>
                
    
                <button type="button" class="button"> <span>Ingresar</span> </button>
            </form>

            <div class="container_img">
                <img src="../assets/img/login/imgLogin.svg" >
            </div>
            
        </div>

    </section>
</template>

<script>
 function togglePasswordVisibility() {
    var password = document.getElementById("password");
    if (password.type === "password") {
      passwordt.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

  
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
}

.header {
    margin:4rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 4rem;

}

.container_form {
    display: flex;
    justify-content: flex-end;
}

h2 {
    text-align: center;
    font-size: 30px;
}

.form {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.text-form p {
    margin-bottom: 3.5rem;
    color: #5b656f;
    font-size: 16px;
}

.input {
    display: flex;
    flex-direction: column;
    width: 60%;
}



.container_img {
    background-color: #C1D8C9;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    flex: 1;
    display: flex;
    justify-content: center;

}

.input .pass-ico {
    background-color: blue;
    flex-direction: row;
    position: absolute;
    margin-top: 2rem;
    margin-left: 33rem;
    height: 25px;
    cursor: pointer;
}

.input input {
    background-color: #F5F7F9;
    margin-bottom: 1.6rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 10px;
    border: 1px solid transparent;
}


.button {
    background-color: #D75C37;
    border: 1px solid transparent;
    width: 60%;
    padding: 10px;
    border-radius: 10px;
    margin-top: 4rem;
}

span {
    color: #ffff;
}

.button:active {
    transform: translateY(4px);
}

.button:hover {
    background-color: #e46444a6;
}</style>