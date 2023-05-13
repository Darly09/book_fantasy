const express  = require('express')
const { DataTypes} = require("sequelize");
const bodyParser = require("body-parser");
const {sequelize } = require('./config')
const PORT= 8000
const app = express ()
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


  
  sequelize
    .authenticate()
    .then(() => {
      console.log("CONEXION A LA BASE DE DATOS EXITOSA!");
    })
    .catch((error) => {
      console.error("EL ERROR DE CONEXION ES: " + error);
    });
  
    const personal = sequelize.define("personal", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    });
    
    sequelize.sync();

    router.get("/empleados", async (req, res) => {
        res.send(
          await personal.findAll({
            where: {
              email: usuario.email,
              password: usuario.password,
            },
          })
        );
      });
      
      async function validacion(email, password) {
        const expReg =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.) +[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const esValido = expReg.test(email);
      
        if (password === "" || password === undefined || password === null) {
          return {
            code: 400,
            message:
              "Te falto la contraseña, comprueba que lo escribiste e intenta nuevamente",
          };
        } else if (email === "" || email === undefined || email === null) {
          return {
            code: 400,
            message:
              "Te falto el correo, comprueba que lo escribiste e intenta nuevamente",
          };
        } else if (esValido == false) {
          return {
            code: 400,
            message:
              "¡UPS!, no has ingresado un correo electrónico valido, intentalo de nuevo",
          };
        }
      
        const user = await personal.findAll({
          where: {
            email: email,
            password: password,
          },
        });
        if (user.length === 0) {
          return {
            code: 400,
            massage: "No desconfiamos de ti pero… ¿Puedes revisar tu información?",
          };
        } else {
          return {
            code: 200,
            message: "Autenticado",
          };
        }
      }
      
      router.post("/login", async (req, res) => {
        const usuario = req.body;
        const respuesta = await validacion(usuario.email, usuario.password);
        res.status(respuesta.code);
        res.send(respuesta);
      });
      
      app.use("/api", router);


app.listen(PORT)
console.log (`Servidor Corriendo en el puerto ${PORT}`)
