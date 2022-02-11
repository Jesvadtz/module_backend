// fs.rmdir(path[, options], callback)

const fs = require("fs");

// Borro directorio
fs.rm("../03-mkdir", { recursive: true }, (error) => {
  if (error) {
    console.log("No se pudo borrar el directorio");
    return;
  }
  console.log("Se borro el directorio");
});
