
<script setup>
import AppBar from '../components/common/AppBar.vue';
import NavBar from '../components/common/NavBar.vue';
import FooterLayout from '../components/common/FooterLayout.vue';

</script>



<template>
    <AppBar />
    <NavBar />
    <article>
        <h1 class="text_one">
            CONÓCENOS
        </h1>
        <p class="one_paragraph">
            Nos encanta ayudarte a dar vida a tus ideas
            Queremos crecer día a día. Nuestro objetivo es ofrecer el mayor contenido y la mejor calidad en ilustraciones,
            fotos, iconos, mockups y plantillas para presentaciones.
        </p>
    </article>

    <article class="body">
        <h1 class="text_two">
            El origen de nuestro Universo bOOK FANTASY
        </h1>
        <div class="imagen-center">
            <img class="img" src="../assets/img/whobook/absurd 2.png">
        </div>

        <p class="two_paragraph">
            Nuestro primer proyecto, Freepik, se fundó en el año 2010 de la mano de los hermanos Alejandro y Pablo Blanes,
            junto con su amigo Joaquín Cuenca, fundador de Panoramio (adquirida por Google).
            <br><br>
            Alejandro tuvo la idea de crear una plataforma en la que los diseñadores pudieran encontrar recursos gráficos
            gratuitos. Pablo y Joaquín apoyaron la iniciativa y la llevaron a cabo, sentando así las bases de Freepik
            Company.
            <br> <br>
            Desde entonces, nuestro Universo ha ido creciendo y hemos incorporado dos nuevos proyectos: Flaticon y Slidesgo.
        </p>
        <div class="img_finish">
            <img src="../assets/img/whobook/Group 10.png">
        </div>
    </article>
    <FooterLayout />
</template>

<style scoped>
article {
    margin-left: 6rem;
    margin-top: 1.8rem;
}

.text_one {
    margin-right: 21rem;
    font-size: 30px;
    color: #2C353E;
    font-weight: 700;
    text-align: center;
}

.one_paragraph {
    margin-left: 21rem;
    text-align: center;
    width: 766px;
    font-size: 16px;
    line-height: 22px;
    color: #5B656F;
    
}

.imagen-center {
    background-color: #F4E7A3;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    display: flex;
    margin-left: 55rem;
    margin-bottom: 15rem;
    position: absolute;
}

.text_two {
    margin-top: 9.2rem;
    width: 559px;
    font-size: 30px;
    line-height: 41px;
    text-transform: uppercase;
    color: #2C353E;
    font-weight: 700;
    margin-bottom: 2.1rem;
}

.two_paragraph {
    width: 557px;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 7.5rem;
}

.img_finish {
    margin-bottom: 5.8rem;
   

}
</style>