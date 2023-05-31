<script setup>
import AppBar from '../components/common/AppBar.vue';
import NavBar from '../components/common/NavBar.vue';
import FooterLayout from '../components/common/FooterLayout.vue';

</script>

<template>
    <AppBar />
    <NavBar />
    <form>
        <section>
            <div class="one_text">
                <h2>Disfrutar y devertirse con un buen libro</h2>
            </div>
            <br>
            <h1 class="import ">LA IMPORTANCIA DE LEER CUENTOS Y LIBROS INFANTILES</h1>
            <p class="text">¿Te has preguntado por qué es importante leer para los niños y niñas?, ¿sabes cómo enseñarles el
                hábito de la
                lectura? El día 2 de abril se celebra el Día Internacional del libro infantil y juvenil, por lo que es una
                buena
                ocasión para recordar la importancia de leer cuentos y libros infantiles.</p>
        </section>
        <section>
            <div class="imgtext">
                <img class="img1" src="../assets/img/BoysBook/ninos-leen 1.svg">
                <img class="img2" src="../assets/img/boybook/lectura.png">
            </div>
        </section>
        <section class="paragraph">

            <h1 class="text_one">¿QUÉ BENEFICIOS APORTA A LOS NIÑOS Y NIÑAS LEER CUENTOS Y LIBROS INFANTILES?</h1>
            <p>- Los niños y niñas comprenden que pueden aprender por sí mismos y reflexionar sobre lo que aprenden.</p>
            <p>- Compartir el momento de lectura con nuestros hijos e hijas no solo favorece un hábito saludable, sino que
                crea
                un vínculo emocional fuerte con ellos, además de generarse un ambiente de confianza.</p>
            <p>- Los cuentos y libros infantiles suelen contar historias con las que los niños y niñas se sienten
                identificados
                y les ayudan a entender lo que sienten.</p>
            <p>- La lectura contribuye a que los niños y niñas amplíen su vocabulario, aprendan a expresarse mejor y a
                escribir
                correctamente.</p>
            <p>- Las historias de los cuentos y libros infantiles enseñan valores que ayudarán a los niños y niñas a
                comprender
                lo que significa la solidaridad, el respeto, la paz o la igualdad.</p>

        </section>
    </form>
    <FooterLayout />
</template>

<style scoped>
form {
    margin-left: 6rem;
}
.one_text {
    margin-top: 1.6rem;
    color: #8A939B;
    font-size: 30px;
    margin-bottom: 0.6rem;
}

.import {
    font-size: 30px;
    color: #2C353E;
    width: 824px;
    font-weight: 700;
}

.text {
    width: 795px;
    font-size: 16px;
    line-height: 22px;
    margin-top: 6.9rem;

}

.imgtext {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.img1 {
    margin-right: 3.3rem;
}

.img2 {
    margin-bottom: 8rem;
}

.text_one {
    color: #2C353E;
    width: 795px;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
}

.paragraph {
    font-size: 16px;
    color: #5B656F;
    width: 795px;
    line-height: 22px;
}
</style>

