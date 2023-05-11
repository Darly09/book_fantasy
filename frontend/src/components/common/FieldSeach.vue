<template>
  <div class="buscador">
    <input type="text" placeholder="Buscar título de libro">
    <button type="button" class="btn btn-light"><img src="../../assets/img/icons/lupa.png" alt="Buscar"> </button>
  </div>
</template>
<style scoped>
@media only screen and (min-width: 1200px) {
  input {
    padding: 10px;
    border: none;
    margin: 5px;
    border-radius: 5px;
    background-color: #f5f5f5;
    font-size: 16px;
    color: black;
    box-shadow: 0 0 5px rgba(8, 0, 246, 0.1);
    width: 30rem;
  }
}

input:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}


input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

button:hover {
  background-color: gray;
}
</style>