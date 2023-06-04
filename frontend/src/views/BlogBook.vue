<script setup>
import AppBar from '../components/common/AppBar.vue';
import NavBar from '../components/common/NavBar.vue';
import FooterLayout from '../components/common/FooterLayout.vue';
import Top from '../components/product/Top.vue';
const blogBooks = [
    {
        "imagen": "../src/assets/img/gabobook/alvaro.png",
        "nom_lib": "Álvaro Mutis",
        "aut_lib": "Novelista y poeta",
    },
    {
        "imagen": "../src/assets/img/gabobook/octavio.png",
        "nom_lib": "Octavio Irineo Paz Lozano",
        "aut_lib": "Poeta y ensayista",
    },
    {
        "imagen": "../src/assets/img/gabobook/neruda.png",
        "nom_lib": "Pablo Neruda",
        "aut_lib": "Poeta y político",
    },
    {
        "imagen": "../src/assets/img/gabobook/joanne.png",
        "nom_lib": "Joanne Rowling",
        "aut_lib": "Escritora, productora de cine y guionista británica",
    },
]
</script>

<template>
    <AppBar />
    <NavBar />
    <form>
        <section class="header">
            <article>
                <h2 class="text_one">Genio de la literatura universal</h2>

                <h1 class="text_two">
                    GABRIEL GARCÍA MÁRQUEZ, EL MAESTRO DEL REALISMO MÁGICO
                </h1>

                <p class="one_paragraph">
                    Reconocido como uno de los narradores más importantes del siglo XX,
                    Gabriel García Márquez se convirtió en el máximo representante de un
                    estilo literario conocido como realismo mágico. Alabado y criticado
                    por sus ideas políticas, Gabo, como se le conocía familiarmente, se
                    ganó el aplauso internacional por su obra y en 1982 fue galardonado
                    con el Premio Nobel de Literatura.
                </p>

                <div class="img"></div>
                <img class="gabo" src="../assets/img/gabobook/gabo1.png" />
                <img class="gabo1" src="../assets/img/gabobook/localidad.png" />
            </article>

            <article class="body">
                <h1 class="text_three">LA INFLUENCIA DE LOS ABUELOS</h1>
                <p class="two_paragraph">
                    "Papalelo". Así llamaba el pequeño Gabriel a su abuelo, un coronel del
                    ejército colombiano que influyó profundamente en su futura visión del
                    mundo. De hecho, fue su abuelo quien le enseñó el "milagro" del hielo,
                    un elemento repleto de simbología para el escritor (lo cual puede
                    apreciarse en sus obras). También era Papalelo quien llevaba al
                    pequeño Gabriel al circo cada año y quien le hacía consultar el
                    diccionario siempre que desconocía alguna palabra. Por su parte, su
                    abuela, Tranquilina, le inculcó su pasión por las historias y le
                    enseñó a hacer de lo extraordinario algo natural, lo que al final
                    acabaría convirtiéndose en uno de los rasgos más característicos de la
                    obra del escritor, considerado el mayor representante del estilo
                    literario conocido como realismo mágico.
                </p>


                <div class="img_two">
                    <img class="gabo2" src="../assets/img/gabobook/gabo2.png" />
                    <img class="history " src="../assets/img/gabobook/historias.png" />
                </div>

                <p class="three_paragraph">
                    <strong>
                        Gabriel empezó a estudiar derecho en Bogotá, pero su carrera se vio
                        truncada tras el conocido como "Bogotazo", unas sangrientas
                        revueltas que estallaron en la capital como consecuencia del
                        asesinato del candidato a la presidencia y líder liberal Jorge
                        Eliécer Gaitán, el 9 de abril de 1948.</strong>
                    El joven García Márquez decidió entonces trasladarse a Cartagena de
                    Indias, donde trabajó como periodista en diversos medios como El
                    Universal o El Heraldo. Precisamente al periodismo dedicaría García
                    Márquez los siguientes años de su vida, convirtiéndose en su gran
                    pasión, que compaginaría con su otra pasión: la literatura (años
                    después, cuando ya era un escritor consagrado, y a pesar de que nunca
                    terminó sus estudios superiores, algunas universidades, como la de
                    Columbia en Nueva York, le concedieron un doctorado honoris causa en
                    Letras).
                </p>
            </article>

            <article class="body2">
                <h1 class="text_for">EL AMOR DE SU VIDA</h1>
                <p class="for_paragraph">
                    Durante un baile estudiantil, Gabriel conoció a una joven de la que se
                    enamoraría perdidamente, Mercedes Barcha, que era la hija de un
                    boticario. En ese momento se prometió a sí mismo que la convertiría en
                    su esposa tan pronto como pudiese. Los biógrafos del escritor
                    colombiano definen a Mercedes como: "Una mujer alta y linda con pelo
                    marrón hasta los hombros, nieta de un inmigrante egipcio, lo que al
                    parecer se manifiesta en unos pómulos anchos y ojos castaños grandes y
                    penetrantes". La pareja se casó en 1958 y un año después nacería su
                    primer hijo, Rodrigo. En 1961 se instalaron en Nueva York, ciudad en
                    la que Gabriel ejerció como corresponsal de Prensa Latina en una
                    agencia fundada por Fidel Castro. Gracias a esta relación laboral,
                    García Márquez acabaría entablando una estrecha amistad con el líder
                    cubano, lo que le valdría recibir amenazas de la CIA y de la
                    disidencia cubana. Por este motivo, el escritor decidió trasladarse
                    con su familia a México donde nacería su segundo hijo, Gonzalo. De
                    esta época son sus obras El coronel no tiene quien le escriba y La
                    mala hora.
                </p>


                <div class="img_3">
                    <img class="the_love" src="../assets/img/gabobook/amor.png" />
                    <img class="gabo3" src="../assets/img/gabobook/gabo3.png" />
                </div>


                <p class="five_paragraph">
                    Durante un baile estudiantil, Gabriel conoció a una joven de la que se
                    enamoraría perdidamente, Mercedes Barcha, que era la hija de un
                    boticario. En ese momento se prometió a sí mismo que la convertiría en
                    su esposa tan pronto como pudiese. Los biógrafos del escritor
                    colombiano definen a Mercedes como: "Una mujer alta y linda con pelo
                    marrón hasta los hombros, nieta de un inmigrante egipcio, lo que al
                    parecer se manifiesta en unos pómulos anchos y ojos castaños grandes y
                    penetrantes". La pareja se casó en 1958 y un año después nacería su
                    primer hijo, Rodrigo. En 1961 se instalaron en Nueva York, ciudad en
                    la que Gabriel ejerció como corresponsal de Prensa Latina en una
                    agencia fundada por Fidel Castro. Gracias a esta relación laboral,
                    García Márquez acabaría entablando una estrecha amistad con el líder
                    cubano, lo que le valdría recibir amenazas de la CIA y de la
                    disidencia cubana. Por este motivo, el escritor decidió trasladarse
                    con su familia a México donde nacería su segundo hijo, Gonzalo. De
                    esta época son sus obras El coronel no tiene quien le escriba y La
                    mala hora.
                </p>
            </article>

            <article class="final">
                <h1 class="text_five">OBRAS PARA EL RECUERDO</h1>
                <p class="six_paragraph">
                    <strong>
                        Cien años de soledad representó un punto de inflexión en la carrera
                        literaria de García Márquez. A partir de aquí, empezó a desarrollar
                        su talento con obras como Relato de un náufrago y El otoño del
                        patriarca.</strong>
                    También publicó numerosos ensayos en los que expresaba sus ideas
                    políticas de izquierdas, lo que le valió bastantes críticas, tanto por
                    parte de algunos gobiernos como también de una pujante clase media
                    latinoamericana que se decantaba por el liberalismo.<strong>Crónica de una muerte anunciada,
                        publicada en 1981, sería una obra
                        fundamental en su carrera.
                    </strong>
                    De hecho, fue el trampolín que lo lanzó hasta la consecución
                    <strong>del Premio Nobel de Literatura en 1982. Años mas tarde llegarían El
                        olor de la guayaba y El amor en los tiempos del cólera </strong>siendo Memoria de mis putas
                    tristes (que causó polémica por la mirada
                    del autor sobre la prostitución), una de sus últimas obras.<strong>
                        En 2010, poco antes de su muerte, se publicaría Yo no vengo a decir
                        un discurso,</strong>
                    una antología completa de sus conferencias.
                </p>

                <div class="img_4">
                    <img class="gabo4" src="../assets/img/gabobook/gabo4.png" />
                    <img class="cien" src="../assets/img/gabobook/cien.png" />
                </div>



                <p class="seven_paragraph">
                    <strong> La vida de "Gabo", como era conocido familiarmente, empezó a apagarse
                        lentamente en 1999, cuando le diagnosticaron un cáncer linfático.</strong>
                    Gracias a la quimioterapia, la enfermedad pareció remitir, momento que
                    aprovechó Gabo para escribir sus memorias (que se publicarían en 2003)
                    a las que tituló Vivir para contarla. En una entrevista concedida al
                    diario El Tiempo, de Bogotá, el escritor confesó: <strong>"Reduje al mínimo
                        las relaciones con mis amigos, desconecté el teléfono, cancele los
                        viajes y todo tipo de planes actuales y futuros, y me encerré a
                        escribir todos los días sin interrupciones".</strong> Asimismo, en esa misma
                    entrevista García Márquez tuvo que declarar que no era el autor de un
                    poema titulado La marioneta, que el periódico peruano La República
                    había publicado en 2000 atribuyéndolo al escritor. Según el periódico,
                    se trataba de la despedida del escritor, consciente de su cercana
                    muerte. Pero Gabo lo desmintió rotundamente y dijo que el autor del
                    poema era, en realidad, un joven ventrílocuo mexicano llamado Johnny
                    Welch.
                </p>

                <p class="eight_paragraph">
                    <strong>La salud de Gabriel García Márquez continuó deteriorándose con los
                        años. Según declaró su propio hermano Jaime en 2012, Gabo sufría
                        demencia, infección pulmonar y deshidratación. A pesar de que parecía
                        responder bien a la medicación, la salud del autor colombiano era cada
                        vez más débil y su vida se apagó el 17 de abril de 2014, a los 87
                        años.</strong> La influencia de la obra de Gabriel García Márquez en la
                    literatura universal es innegable, tanto que su conocimiento se
                    considera ineludible para las futuras generaciones de autores. Incluso
                    escritores cuya lengua no es el español han convertido a García
                    Márquez en un autor de referencia.
                </p>

            </article>
        </section>
        <Top class="top" :tops="blogBooks" titulo="Otros grandes autores" />
    </form>
    <FooterLayout />
</template>

<style>
.header {
    padding: 2rem;
}
form {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
}

.text_one {
    margin-top: 1.6rem;
    font-size: 30px;
    color: #8A939B;
    font-size: 30px;
}

.text_two {
    margin-top: 0.6rem;
    color: #2C353E;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
}

.one_paragraph {
    margin-top: 3rem;
    font-size: 16px;
    line-height: 22px;
}

.img {
    display: flex;
    align-items: center;
    margin-top: 3rem;
}

.gabo {
    margin-right: 3.3rem;
}

.gabo1 {
    margin-bottom: 3rem;
}

.text_three {
    margin-top: 3rem;
    margin-bottom: 3rem;
    color: #2C353E;
    font-size: 30px;
    font-weight: 700;
}

.two_paragraph {
    margin-bottom: 3rem;
    color: #5B656F;
    font-size: 16px;
    line-height: 22px;
}

.img_two {
    display: flex;
    align-items: center;
    margin-top: 3rem;
}

.gabo2 {
    margin-bottom: 3rem;

}

.history {
    margin-left: 3.3rem;
    margin-bottom: 25rem;
}


.three_paragraph {
    margin-bottom: 3rem;
    font-size: 16px;
    line-height: 22px;
    color: #2C353E;
}

.text_for {
    color: #2C353E;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 3rem;
}

.for_paragraph {
    font-size: 16px;
    line-height: 22px;
    color: #5B656F;


}

.img_3 {
    display: flex;
    align-items: center;
    margin-top: 3rem;
}

.the_love {
    margin-bottom: 13rem;
}

.gabo3 {
    margin-left: 3.3rem;
    margin-bottom: 3rem;
}

.five_paragraph {
    font-size: 16px;
    line-height: 22px;
    color: #5B656F;
    margin-bottom: 3rem;

}

.text_five {
    font-size: 30px;
    color: #2C353E;
    margin-bottom: 3rem;
    font-weight: 700;
}

.six_paragraph {
    font-size: 16px;
    line-height: 22px;
    color: #5B656F;
    margin-bottom: 3rem;
}

.img_4 {
    display: flex;
    align-items: center;
    margin-top: 3rem;
}

.gabo4 {
    margin-bottom: 3rem;
}

.cien {
    margin-bottom: 23rem;
    margin-left: 3.3rem;

}

.seven_paragraph {
    font-size: 16px;
    line-height: 22px;
    color: #5B656F;
}

.eight_paragraph {
    font-size: 16px;
    line-height: 22px;
    color: #5B656F;
}

.top {
    display: flex;
    margin-top: 1.6rem;
    margin-left: 3.3rem;
    flex: 0 0 30%;
    height: fit-content;
}
</style>