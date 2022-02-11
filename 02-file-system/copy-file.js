// fs.copyFile(src, dest[, mode], callback)

const fs = require("fs");

fs.copyFile(
  "../01-our-firts-scripts/hello-world.js",
  "./hello-world-02.js",
  (error) => {
    if (error) {
      console.log("No se pudo copiar el archivo");
      return;
    }
    console.log("El archivo se copio correctamente");
  }
);
