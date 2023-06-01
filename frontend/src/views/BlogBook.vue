<script setup>
import AppBar from '../components/common/AppBar.vue';
import NavBar from '../components/common/NavBar.vue';
import FooterLayout from '../components/common/FooterLayout.vue';

</script>

<template>
    <AppBar />
    <NavBar />
    <section >
        <div class="x">
            <h2>Genio de la literatura universal</h2>
        </div>
        <br>
        <h1>GABRIEL GARCÍA MARQUEZ, EL MAESTRO DEL REALISMO MÁGICO</h1><br><br><br>
        <p>Reconocido como uno de los narradores más importantes del siglo XX, Gabriel García Márquez se convirtió en el máximo representante de un estilo literario conocido como realismo mágico. Alabado y criticado por sus ideas políticas, Gabo, como se le conocía familiarmente, se ganó el aplauso internacional por su obra y en 1982 fue galardonado con el Premio Nobel de Literatura..</p>
    </section>
    <section class="img">
        <img src="../assets/img/BoysBook/ninos-leen 1.svg" alt="">
        <div class="imgtext">
            <p>“La lectura es básica para los niños y niñas porque no solo aporta información, sino que educa, crea buenos
                hábitos, impulsa a la reflexión, favorece la concentración y hace que disfruten.
            </p>
        </div>
    </section>
    <section class="parrafos">

        <h1>¿Qué beneficios aporta a los niños y niñas leer cuentos y libros infantiles?</h1>
        <p>- Los niños y niñas comprenden que pueden aprender por sí mismos y reflexionar sobre lo que aprenden.</p>
        <p>- Compartir el momento de lectura con nuestros hijos e hijas no solo favorece un hábito saludable, sino que crea
            un vínculo emocional fuerte con ellos, además de generarse un ambiente de confianza.</p>
        <p>- Los cuentos y libros infantiles suelen contar historias con las que los niños y niñas se sienten identificados
            y les ayudan a entender lo que sienten.</p>
        <p>- La lectura contribuye a que los niños y niñas amplíen su vocabulario, aprendan a expresarse mejor y a escribir
            correctamente.</p>
        <p>- Las historias de los cuentos y libros infantiles enseñan valores que ayudarán a los niños y niñas a comprender
            lo que significa la solidaridad, el respeto, la paz o la igualdad.</p>

    </section>
    <FooterLayout />
</template>

<style scoped>
.x {
color: blue;
font-size: 30px;
   
}

.h2{
    text-align: center;
}
.imgtext {
width: 50rem;
height: 50rem;
text-align: left;
padding: 13rem;

}


</style>