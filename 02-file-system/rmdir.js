// fs.rmdir(path[, options], callback)

const fs = require("fs");

fs.rmdir("../03-mkdir", (error) => {
  if (error) {
    console.log("No se pudo borrar el directorio");
    return;
  }
  console.log("Se borro el directorio");
});
