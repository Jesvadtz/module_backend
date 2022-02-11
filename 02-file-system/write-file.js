const fs = require("fs");

//fs.writeFile(file, data[, options], callback)

const content = "Esto es el contenido agregado desde nodejs";
fs.writeFile("new-file.txt", content, "utf8", (error) => {
  if (error) {
    console.log("No se pudo crear el archivo");
    return;
  }
  console.log("Se creo el archivo correctamente");
});
