const { administratorTable } = require("../model/AdministratorModel");

async function validation(email, password) {
  const expReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = expReg.test(email);

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
  } else if (isValid == false) {
    return {
      code: 400,
      message:
        "¡UPS!, no has ingresado un correo electrónico valido, intentalo de nuevo",
    };
  }

  const user = await administratorTable.findOne({
    where: {
      email_admin: email,
      pass_admin: password,
    },
  });
  if (user === null) {
    return {
      code: 400,
      massage: "No desconfiamos de ti pero… ¿Puedes revisar tu información?",
    };
  } else {
    return {
      code: 200,
      message: "Autenticado",
      username: user.nom_admin,
    };
  }
}

module.exports = { validation };
