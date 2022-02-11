// fs.readdir(path[, options], callback)
const fs = require("fs");

fs.readdir("../01-our-firts-scripts", (error) => {
  if (error) {
    console.log("No se pudo leer el directorio");
    return;
  }
  console.log("Se leyó correctamente el directorio");
});
