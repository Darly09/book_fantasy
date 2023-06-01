<template>
    <footer>
        <div class="informacion">
<<<<<<< HEAD
=======

            <div>
                <img class="logofooter" src="../../assets/img/icons/logo_footer.svg" alt="Logo Biblioteca">
            </div>

>>>>>>> 1b5a120 (Se realiza el componente del NavBar del Home del administrador, segun el diseño.)
            <div>
                <h4>SOBRE NOSOTROS</h4>
                <ul class="sobre_tiendas">
                    <li v-for="(item, index) in quienesSomos" :key="index" class="item_footer">
                        <img :src="item.img" alt="Nosotros">
                        <h4>{{ item.text }}</h4>
                    </li>
                </ul>
            </div>
            <div class="contenedor_atencion">
                <h4>MEDIOS DE ATENCIÓN</h4>
                <ul class="medios_atencion">
                    <li class="item_footer">
                        <img src="../assets/img/icons/email.png" alt="email">
                        <p> <strong>book_fan@yopmail.com</strong></p>
                    </li>
                    <li class="item_footer">
                        <img src="../assets/img/icons/whatsapp.png" alt="wsp">
                        <p><strong>+57 3053136807</strong></p>
                    </li>
                </ul>
            </div>
            <div class="contenedor_redes">
                <h4>SÍGUENOS EN NUESTRAS REDES SOCIALES</h4>
                <ul class="redes">
                    <li><img src="../assets/img/icons/tik-tok.png" alt="tik tok" width="50"></li>
                    <li><img src="../assets/img/icons/instagram.png" alt="instagram" width="50"></li>
                    <li><img src="../assets/img/icons/facebook.png" alt="facebook" width="50"></li>
                    <li><img src="../assets/img/icons/youtube.png" alt="youtube" width="50"></li>
                </ul>
            </div>

            <div>
                <img class="logofooter" src="../assets/img/logo.jpg" alt="Logo Biblioteca">
            </div>
        </div>

    </footer>
</template>
<style scoped>
footer img {
    width: 180px;
}

footer {
    background-color: rgb(130, 130, 130);
    align-items: center;
}

footer .informacion {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 2rem auto 2rem;
}

ul li {
    list-style: none;
    margin: auto 1rem;
}

.sobre_tiendas .item_footer {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.sobre_tiendas .item_footer img {
    width: 25px;
}

.sobre_tiendas .item_footer h4{
    align-items: center;
}

.contenedor_atencion .item_footer {
    display: flex;
    align-items: center;
    justify-content: center;
}

.contenedor_atencion .item_footer img {
    width: 25px;
}

.redes {
    display: flex;
    list-style: none;
}

.redes img {
    width: 30px;
}
</style>
<script setup>
import libroImage from '../../assets/img/icons/libro.png'

const quienesSomos = [
    {
        img: libroImage,
        text: '¿Quienes somos?'
    },
    {
        img: libroImage,
        text: 'Trabaja con nosotros'
    },
    {
        img: libroImage,
        text: 'Escríbenos tus PQRS'
    }
]
</script>