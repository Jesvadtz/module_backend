//fsPromises.writeFile(file, data[, options])

const fs = require("fs");
const content = "Esto es un contenido de Promise write-file.js";

fs.promises.writeFile("newFile.txt", content, (error) => {
  if (error) {
    console.log("No se escribió el archivo");
    return;
  }
  console.log("Se hizo el archivo correctamente");
});

async function files() {
  const 
}
