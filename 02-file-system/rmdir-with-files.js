// fs.rmdir(path[, options], callback)

const fs = require("fs");

// Borro archivo
fs.unlink("../03-mkdir/prueba.js", (error) => {
  if (error) {
    console.log("No se pudo borrar el archivo");
    return;
  }
  console.log("El archivo fue borrado");
});

// Borro directorio
fs.rmdir("../03-mkdir", (error) => {
  if (error) {
    console.log("No se pudo borrar el directorio");
    return;
  }
  console.log("Se borro el directorio");
});
