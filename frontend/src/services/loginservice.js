// Importa Vue en tu archivo
import Vue from 'vue'

// Dentro de un componente Vue
export default {
  methods: {
    async postData() {
      try {
        const response = await fetch('localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: '', password: ''}) // Coloca aquí los datos que deseas enviar al servidor
        });

        if (response.ok) {
          const data = await response.json();
          // Realiza cualquier acción necesaria con los datos recibidos del servidor
          console.log(data);
        } else {
          // Si la respuesta del servidor no fue exitosa
          console.log('Error en la solicitud');
        }
      } catch (error) {
        // Si ocurre algún error en la solicitud
        console.log('Error en la solicitud', error);
      }
    }
  }
}