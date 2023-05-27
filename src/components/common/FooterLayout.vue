<template>
<footer>
    <div class="informacion">
        <div> 
            <h4>NOSOTROS</h4>
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
                <li>Cra 76 #18a-19 Belén, Medellín</li>
                <li> 6053197938 - 3196589854</li>                    
            </ul>
        </div>

        <div>
            <h4> NUESTRAS REDES SOCIALES</h4>
            <ul class="redes">  
                <ul>
                    <li>Facebook Book Fantasy</li>
                    <li>Instagram Book Fantasy</li>                    
                    <li>tik tok Book Fantasy</li>
                    <li>twitter Book Fantasy</li>                    
                </ul>
            </ul>    
        </div>
        
        <div>
            <img class="logo_footer" src="../img/logol.png" >
        </div>
    </div>
</footer>
</template>

<style scoped>
footer .logo_footer {
    margin-top:1rem;
    width: 25rem;
}
footer{
    text-align: center;
    background-color: #ffffffa6;
}

footer .informacion {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
   

}

footer .ul li {
    list-style: none;
    margin: auto 1rem;
}

footer.redes {
    display: flex;
   
    }



</style>