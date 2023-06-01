<template>
    <footer>
        <div class="informacion">
            <div>
                <img class="logofooter" src="../../assets/img/logo_footer.svg" alt="Logo Biblioteca">
            </div>

            <div>
                <ul class="sobre_tiendas">
                   <h6>Sobre nosotros</h6> 
                   <li>¿Quienes somos?</li>
                   <li>Mision</li>
                   <li>Vision</li>
                </ul>
            </div>
            <div class="contenedor_atencion">                
                <ul class="otros">
                    <h6>Otros</h6>
                    <li>Terminos & condiciones</li>
                    <li>Políticas de privacidad</li>
                    <li>Centro de ayuda</li>
                    
                </ul>
            </div>
            <div class="contenedor_redes">
                <ul class="redes">
                    <li><img src="../../assets/img/icons/tiktok.svg" alt="tik tok" width="50"></li>
                    <li><img src="../../assets/img/icons/youtube.svg" alt="youtube" width="50"></li>
                    <li><img src="../../assets/img/icons/instagram.svg" alt="instagram" width="50"></li>
                    <li><img src="../../assets/img/icons/facebook.svg" alt="facebook" width="50"></li>
                    
                </ul>
            </div>


        </div>

    </footer>
</template>
<style scoped>
footer img {
    width: 180px;
}

footer {
    background-color: #2C353E;
    align-items: center;
}

footer .informacion {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 2rem auto 2rem;
    padding: 3.5rem 3rem 2rem 3rem;
    color: white;
}

h6 {
    padding: 0.5rem;
}

ul li {
    list-style: none;  
}

li {
    padding: 1rem;
}

.contenedor_redes{
    display: flex;
    align-items: end;
}
.contenedor_redes li{
    margin: auto 1rem;    
}



.redes {
    display: flex;
    list-style: none;
}

.redes img {
    width: 30px;
    
}
</style>
