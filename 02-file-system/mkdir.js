// fs.mkdir(path[, options], callback)

const fs = require("fs");

fs.mkdir("../03-mkdir", (error) => {
  if (error) {
    console.log("No se pudo crear el directorio");
    return;
  }
  console.log("Se creo el directorio");
});
