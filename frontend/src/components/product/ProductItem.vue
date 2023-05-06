<template>
  <div class="libro">
    <img class="imagen" src="../../img/books/el_principito.jpg" alt="Nombre del libro">
    <h5>El principito</h5>
    </div>
</template>
<style scoped>
.libro{
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  margin: 1rem 1rem;
}

.libro h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.libro img {
  width: 100%;
}

.libro p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.libro button {
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}

.libro button:hover {
  background-color: #3e8e41;
}

.libro:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}

</style>