<script setup>
import AppBar from '../components/common/AppBar.vue';
import NavBar from '../components/common/NavBar.vue';
import FooterC from '../components/common/FooterC.vue';
</script>

<template>
    <AppBar />
    <NavBar />
    <section>
        <div class="section-boy">
          <h2 class="header">Disfrutar y divertirse con un buen libro</h2>
        </div>
        <br />
        <h1 class="text-one">
          LA IMPORTANCIA DE LEER CUENTOS Y LIBROS INFANTILES
        </h1>
        <br />
        <p class="one_paragraph">
          ¿Te has preguntado por qué es importante leer para los niños y niñas?,
          ¿sabes cómo enseñarles el hábito de la lectura? El día 2 de abril se
          celebra el Día Internacional del libro infantil y juvenil, por lo que es
          una buena ocasión para recordar la importancia de leer cuentos y libros
          infantiles.
        </p>
      </section>
      <section class="img">
        <img src="../img/boybook/ninos-leen 1.png" />
        <div class="vector1">
          <img src="../img/boybook/Vector 6.png" />
        </div>
        <div class="imgtext">
          <img src="../img/boybook/lectura.png" />
        </div>
        <div class="vector2">
          <img src="../img/boybook/Vector 7.png" />
        </div>
      </section>
      <section class="two-paragraph">
        <h1 class="text-two " >
          ¿Qué beneficios aporta a los niños y niñas leer cuentos y libros
          infantiles?
        </h1>
        <p>
          - Los niños y niñas comprenden que pueden aprender por sí mismos y
          reflexionar sobre lo que aprenden.
        </p>
        <p>
          - Compartir el momento de lectura con nuestros hijos e hijas no solo
          favorece un hábito saludable, sino que crea un vínculo emocional fuerte
          con ellos, además de generarse un ambiente de confianza.
        </p>
        <p>
          - Los cuentos y libros infantiles suelen contar historias con las que
          los niños y niñas se sienten identificados y les ayudan a entender lo
          que sienten.
        </p>
        <p>
          - La lectura contribuye a que los niños y niñas amplíen su vocabulario,
          aprendan a expresarse mejor y a escribir correctamente.
        </p>
        <p>
          - Las historias de los cuentos y libros infantiles enseñan valores que
          ayudarán a los niños y niñas a comprender lo que significa la
          solidaridad, el respeto, la paz o la igualdad.
        </p>
        <p class="three-paragraph">
          En definitiva, la lectura es una forma de aprender y está en nuestras manos que
           nuestros hijos e hijas descubran el placer de la lectura y todo lo que pueden aprender con los libros
        </p>
      </section>
      <FooterC />
</template>

<style scoped> 
.header {
    font-size: 30px;
    color: #5B656F;
}
.text-one{
    font-size: 30px;
    color:#2C353E;
    width: 795px;
    height: 70px;
}
.one_paragraph{
    font-size: 16px;
    color: #5B656F;
    width: 795px;
    line-height: 25px;
}
.vector1{
    margin: calc(26% + 20px);
    display: flex;
    margin-top : 1rem;
    align-items: center;
    height: 80vh; 
    position: fixed; top: 0; left: 0;
    position: absolute;
}
.imgtext{
    margin: calc(26% + 20px);
    display: flex;
    margin-top:5rem;
    align-items: center;
    height: 90vh; 
    position: fixed; top: 0; left: 0;
    position: absolute;
}
.vector2{
    margin: calc(26% + 20px);
    display: flex;
    margin-top : 16rem;
    align-items: center;
    height: 80vh; 
    position: fixed; top: 0; left: 0;
    position: absolute;
}
.text-two{
    font-size: 30px;
    color:#2C353E;
    width: 795px;
    height: 70px;
}
.two-paragraph{
    font-size: 16px;
    color: #5B656F;     
    font-style: normal;
    line-height: 22px;
    width: 795px;
    line-height: 25px;
}
.three-paragraph{
    font-size: 16px;
    color: #2a3138;
    width: 795px;
    line-height: 25px;
}
</style>