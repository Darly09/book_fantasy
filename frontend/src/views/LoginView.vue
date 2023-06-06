<template>
    <section>
        <div class="header">
            <router-link to="/home" exact-active-class="active"><img src="../assets/img/login/Frame 6.png">
            </router-link>
            <router-link to="/home" exact-active-class="active"><img src="../assets/img/login/Frame 2.png">
            </router-link>
        </div>

        <div class="container_form">
            <form class="form" @submit.prevent="handleLogin">
                <div class="cabecera_correo">
                    <label for="FormEmail" class="form-label">Correo</label>
                </div>
                <input v-model="email" type="email" class="form-control" placeholder="Ingrese su correo" id="FormEmail">

                <div class="cabecera_contraseña">
                    <label for="Formpassword" class="form-label">Contraseña</label>
                </div>
                <input v-model="password" type="password" class="form-control" placeholder="Ingrese su contraseña"
                       id="Formpassword">

                <div class="form-check">
                    <label>¿Recordar usuario?</label>
                    <input type="checkbox" value="">
                </div>

                <!--                <router-link to="/admin" exact-active-class="active">-->
                <button type="submit" class="button">Ingresar</button>
                <!--                </router-link>-->

                <CustomModal :is-modal-open="isModalOpen" @on-close-modal="isModalOpen=false">
                    <p>{{ message }}</p>
                </CustomModal>
            </form>
            <div class="container_img">
                <img src="../assets/img/login/imgLogin.svg">
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue';
import {login} from "../services/login.service.js";
import CustomModal from "../components/common/CustomModal.vue";
import router from "../router.js";

const isLogin = ref([]);
const message = ref("");
const email = ref("");
const password = ref("");
const isModalOpen = ref(false);

async function handleLogin() {
    try {
        const loginResponse = await login(email.value, password.value)
        if (loginResponse.code === 400) {
            isModalOpen.value = true;
            message.value = loginResponse.message;
        }else {
            await router.push("Admin")
        }
    } catch (e) {
        isModalOpen.value = true;
        message.value = e.message;
    }
}

const typeInputPassword = ref("password")

function changeInputPasswordType() {
    typeInputPassword.value = typeInputPassword.value === "password" ? "text" : "password";
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
}

.header {
    margin: 4rem 0;
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

input {
    display: flex;
    flex-direction: column;
    width: 60%;
    position: relative;
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
    flex-direction: row;
    position: absolute;
    margin-top: 2.1rem;
    height: 25px;
    cursor: pointer;
    right: 10px;
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
    color: white;
}

.button a {
    text-decoration: none;
    color: #ffffff;
}

span {
    color: #ffff;
}

.button:active {
    transform: translateY(4px);
}

.button:hover {
    background-color: #e46444a6;
}
</style>