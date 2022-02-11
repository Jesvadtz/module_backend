const fs = require("fs");

const content = "Esto es el contenido de archivo adjunto";

//fs.appendFile(path, data[, options], callback)
fs.appendFile("new-append.text", content, "utf8", (error) => {
  if (error) {
    console.log("No se pudo adjuntar el archivo");
    return;
  }
  console.log("Se adjunto el archivo correctamente");
});
