const express  = require('express')
const Sequelize = require('sequelize')

const PORT= 3000
const app = express ()


const sequelize = new Sequelize ('empresax','root','',{
    host:'localhost',
    dialect:'mysql'
})


sequelize.authenticate()
    .then(() =>{
        console.log('CONEXION A LA BASE DE DATOS EXITOSA!');
})
    .catch (error => {
        console.error('EL ERROR DE CONEXION ES: ' + error);
})


app.listen(PORT)
console.log (`Servidor Corriendo en el puerto ${PORT}`)
