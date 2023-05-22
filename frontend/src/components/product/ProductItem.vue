<template>
  <div class="libro">
    <img class="imagen" :src="img" alt="Nombre del libro">
    <div class="comprar">
    </div>
    <div class="contenedor_boton">
      <button>Comprar</button>
    </div>
    <div class="detalle_libro">
      <!--Las dobles llaves nos sirven para utilizar las propiedades del componentes-->
      <h5 class="titulo">{{ titulo }}</h5>
      <img src="../../assets/img/icons/linea.svg" alt="linea">
      <h5 class="autor">{{ autor }}</h5>
      <h5 class="precio">${{ precio }}</h5>
    </div>
  </div>
</template>

<script setup>
//Son propiedades para el componente
defineProps(['img', 'titulo', 'autor', 'precio'])
</script>

<style scoped>
.libro {
  display: flex;
  flex-direction: column;
  background-color: #F5F7F9;
  border-radius: 1rem;
  overflow: hidden;
  width: 15rem;
  margin: 1rem auto;
}

.libro:hover .comprar,
.libro:hover .contenedor_boton {
  visibility: visible
}

.imagen {
  height: 25rem;
  object-fit: cover;
}

.comprar {
  background-color: #D75C37;
  opacity: 0.3;
}

.comprar,
.contenedor_boton {
  position: absolute;
  width: 15rem;
  height: 25rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  visibility: hidden;
}

.contenedor_boton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

button {
  background-color: #D75C37;
  border-radius: 0.8rem;
  height: 3rem;
  color: #fff;
  border: none;
}

.detalle_libro {
  padding: 0.5rem 1rem;
}

.detalle_libro .titulo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}

.detalle_libro .autor {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #5B656F;
}

.detalle_libro .precio {
  color: #79AC8B;
  text-align: end;
}
</style>