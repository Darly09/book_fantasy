const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const bodyParser = require("body-parser");
const PORT = 8000;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Trabajando con una base de datos feid
const sequelize = new Sequelize("bookFantasy", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("CONEXION A LA BASE DE DATOS EXITOSA!");
  })
  .catch((error) => {
    console.error("SE PRESENTO UN ERROR" + error);
  });

const libros = sequelize.define("libros", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  escritor: {
    type: DataTypes.STRING,
  },
  distribuidor: {
    type: DataTypes.STRING,
  },
  numeroPag: {
    type: DataTypes.SMALLINT,
  },
  genero: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.INTEGER,
  },
});

sequelize.sync();

router.get("/books/:id", async (req, res) => {
  const idlibro = req.params.id;

  if (idlibro == undefined || idlibro == "" || idlibro == null) {
    res.send({
      code: 400,
      message: "La peticion es incorrecta",
    });
  } else {
    const book = await libros.findAll({
      where: {
        id: idlibro,
      },
    });

    if (book.length == 0) {
      res.send({
        code: 200,
        message: "no se encontro el LIBRO",
      });
    } else {
      res.send(book);
    }
  }
});

app.use("/api", router);
app.listen(PORT);
console.log(`Servidor Corriendo en el puerto ${PORT}`);