
<script setup>
import AppBar from '../components/common/AppBar.vue';
import NavBar from '../components/common/NavBar.vue';
import FooterLayout from '../components/common/FooterLayout.vue';

</script>



<template>
    <AppBar />
    <NavBar />
    <article>
        <section>
            <h1 class="text_one">
                CONÓCENOS
            </h1>
            <p class="one_paragraph">
                Nos encanta ayudarte a dar vida a tus ideas
                Queremos crecer día a día. Nuestro objetivo es ofrecer el mayor contenido y la mejor calidad en
                ilustraciones,
                fotos, iconos, mockups y plantillas para presentaciones.
            </p>
        </section>

        <div class="body">
            <section>
                <div class="container-text">
                    <div class="text-information">
                        <h1 class="text_two">
                            El origen de nuestro Universo bOOK FANTASY
                        </h1>
                        <p class="two_paragraph">
                            Nuestro primer proyecto, Freepik, se fundó en el año 2010 de la mano de los hermanos Alejandro y
                            Pablo Blanes,
                            junto con su amigo Joaquín Cuenca, fundador de Panoramio (adquirida por Google).
                            <br><br>
                            Alejandro tuvo la idea de crear una plataforma en la que los diseñadores pudieran encontrar recursos
                            gráficos
                            gratuitos. Pablo y Joaquín apoyaron la iniciativa y la llevaron a cabo, sentando así las bases de
                            Freepik
                            Company.
                            <br> <br>
                            Desde entonces, nuestro Universo ha ido creciendo y hemos incorporado dos nuevos proyectos: Flaticon
                            y Slidesgo.
                        </p>
                    </div>
                    <div class="imagen-center">
                        <div></div>
                        <img class="img" src="../assets/img/whobook/absurd 2.png">
                    </div>
                </div>
            </section>
        </div>
        <section>
            <div class="img_finish">
                <img src="../assets/img/whobook/Group 10.png">
            </div>
        </section>
    </article>
    <FooterLayout />
</template>

<style scoped>
article section {
    max-width: 1024px;
    margin: auto;
}

.body {
    padding: 3rem 0;
    position: relative;
}

.text_one {
    font-size: 30px;
    color: #2C353E;
    font-weight: 700;
    text-align: center;
}

.one_paragraph {
    text-align: center;
    font-size: 16px;
    line-height: 22px;
    color: #5B656F;
    max-width:  577px;
    margin: auto;
    margin-top: 3rem;
}

.imagen-center {
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    width: 100%;
    max-width: 420px;
    height: 520px;
    position: absolute;
    right: 0;
    bottom: 0;
}

.imagen-center div {
    background-color: #F4E7A3;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    height: 400px;
    width: 420px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.imagen-center .img {
    z-index: 2;
    position: absolute;
    bottom: 35px;
    left: -50%;
}

.text_two {
    font-size: 30px;
    line-height: 41px;
    text-transform: uppercase;
    color: #2C353E;
    font-weight: 700;
    margin-bottom: 2.1rem;
}

.two_paragraph {
    max-width: 520px;
    font-size: 16px;
    line-height: 22px;
}

.img_finish {
    margin: 4rem 0;
}

.img_finish img {
    width: 100%;
    object-fit: contain;
}

.container-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.container-text .text-information {
    max-width: 600px;
    margin-top: 2rem;
}

@media screen and (max-width: 1024px) {
    article {
        padding: 0 1rem;
    }
}</style>