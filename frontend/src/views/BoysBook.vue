<script setup>
import AppBar from '../components/common/AppBar.vue';
import NavBar from '../components/common/NavBar.vue';
import FooterLayout from '../components/common/FooterLayout.vue';
import Top from '../components/product/Top.vue';
const childsBooks = [
    {
        "imagen": "../src/assets/img/boybook/wilf.png",
        "nom_lib": "Wilf Salva el Mundo. Libro 1 (Literatura Infantil (6-11 Años) - Narrativa Infantil)",
        "aut_lib": "Georgina Pritchett",
    },
    {
        "imagen": "../src/assets/img/boybook/detective.png",
        "nom_lib": "Detective Perrín. El Misterioso Robo (Infantil-Juvenil)",
        "aut_lib": "Ismart & Lacute ",
    },
    {
        "imagen": "../src/assets/img/boybook/sueños.png",
        "nom_lib": "Sueños de circo (Álbum Infantil)",
        "aut_lib": "Joxan Ormazabal",
    },
    {
        "imagen": "../src/assets/img/boybook/marlon.png",
        "nom_lib": "Marlon: El Camaleón Daltónico (Literatura Infantil (6-11 Años) - Narrativa Infantil)",
        "aut_lib": "Carlos Matera Di Salvo, Isabel"
    }
]
</script>

<template>
    <AppBar />
    <NavBar />
    <form>
        <section>
            <article>
                <div class="one_text">
                    <h2>Disfrutar y devertirse con un buen libro</h2>
                </div>

                <br>
                <h1 class="import ">LA IMPORTANCIA DE LEER CUENTOS Y LIBROS INFANTILES</h1>
                <p class="text">¿Te has preguntado por qué es importante leer para los niños y niñas?, ¿sabes cómo
                    enseñarles el
                    hábito de la
                    lectura? El día 2 de abril se celebra el Día Internacional del libro infantil y juvenil, por lo que es
                    una
                    buena
                    ocasión para recordar la importancia de leer cuentos y libros infantiles.</p>
            </article>

            <article>
                <div class="imgtext">
                    <img class="img1" src="../assets/img/boybook/ninos-leen 1.png">
                    <img class="img2" src="../assets/img/boybook/lectura.png">
                </div>
            </article>
            <article class="paragraph">


                <h1 class="text_one">¿QUÉ BENEFICIOS APORTA A LOS NIÑOS Y NIÑAS LEER CUENTOS Y LIBROS INFANTILES?</h1>
                <p>- Los niños y niñas comprenden que pueden aprender por sí mismos y reflexionar sobre lo que aprenden.</p>
                <p>- Compartir el momento de lectura con nuestros hijos e hijas no solo favorece un hábito saludable, sino
                    que
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
            </article>
        </section>
        <Top class="top" :tops="childsBooks" titulo="Mejores libros infantiles" />
    </form>

    <FooterLayout />
</template>

<style scoped>
form {
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
}

form section {
    flex: 0 0 65%;
    flex-grow: 1;
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
    font-weight: 700;
}

.text {
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
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 5rem;
}

.paragraph {
    font-size: 16px;
    color: #5B656F;
    line-height: 22px;
}

.top {
    display: flex;
    margin-top: 1.6rem;
    margin-left: 3.3rem;
    flex: 0 0 30%;
}
</style>

