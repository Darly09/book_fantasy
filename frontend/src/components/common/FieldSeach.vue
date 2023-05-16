<template>
  <div class="buscador">
    <input type="text" placeholder="Buscar título de libro">
    <button type="button" class="btn btn-light"><img src="../../assets/img/icons/buscador.svg" alt="Buscar"> </button>
  </div>
</template>
<style scoped>
.buscador{
  background-color: #F5F7F9;
  border-radius: 0.5rem;
  padding: 0;
}

input {
  width: 40rem;
  border: none;
  outline: none;
  background-color: #F5F7F9;
  padding-left: 1rem;
  padding-right: 1rem;
  
  /*
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 24px;
  gap: 10px;
  width: 612px;
  height: 44px;
  background: #F5F7F9;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;*/
}
</style>