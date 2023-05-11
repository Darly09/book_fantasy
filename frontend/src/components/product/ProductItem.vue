<script setup>
defineProps(['img', 'titulo', 'precio'])
</script>

<template>
  <div class="libro">
    <img class="imagen" :src="img" alt="Nombre del libro">
    <div class="detalle_libro">
      <h5>{{ titulo }}</h5>
      <div class="compra_libro">
        <h6>${{ precio }}</h6>
        <button type="button" class="btn btn-outline-dark">COMPRAR</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.libro {
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 1rem 1rem;
  display: flex;
  flex-direction: column;
  width: 18rem;
  justify-content: space-between;
}
.imagen {
  max-height: 20rem;
  max-width: 15rem;
}

.libro .detalle_libro{
  display: flex;
  flex-direction: column;
  
}

.libro .compra_libro {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.libro h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  flex: 0 0 auto;
}

.libro:hover {
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}
</style>