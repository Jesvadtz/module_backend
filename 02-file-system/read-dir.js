// fs.readdir(path[, options], callback)
const fs = require("fs");

fs.readdir("../01-our-firts-scripts", (error, data) => {
  if (error) {
    console.error("Error", error);
    return; // Salidas tempranas
  }
  console.log("Se leyó correctamente el directorio:", data); // La data es lo que contiene del directorio
});
