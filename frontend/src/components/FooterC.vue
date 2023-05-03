<template>
    <footer>
        <div class="informacion">
            <div> 
                <h4>SOBRE NOSOTROS</h4>
                <ul>
                    <li>Trabaja con nosotros</li>
                    <li>Escríbenos tus PQRS</li>
                    <li>Préstamo de libros</li>
                    <li>Glosario</li>
                </ul>
            </div>
            <div>
                <h4>LÍNEAS DE ATENCIÓN</h4>
                <ul>
                    <li>Cra. 76 #18a-19, Medellín, Belén, Medellín, Antioquia</li>
                    <li>Medellín <strong>605 319 7938</strong></li>                    
                </ul>
            </div>
            <div>
                <h4>SÍGUENOS EN NUESTRAS REDES SOCIALES</h4>
                <ul class="redes">  
                    <li><font-awesome-icon icon="fa-brands fa-square-facebook" flip style="color: #050505;" /></li>
                    <li><a href="#"><i class="fa-brands fa-square-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-square-youtube"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-tiktok"></i></a></li>
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </ul>    
            </div>
            
            <div>
                <img class="logofooter" src="../img/logo.jpg" alt="Logo Biblioteca">
            </div>
        </div>

    </footer>
</template>
<style scoped>
footer img {
    margin-top: 3rem;
    width: 180px;
}
footer{
    background-color: rgb(130, 130, 130);
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

.redes {
    display: flex;
}
</style>