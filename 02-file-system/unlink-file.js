//fs.unlink(path, callback)

const fs = require("fs");

fs.unlink("alex-turner.jpg", (error) => {
  if (error) {
    console.log("No se pudo borrar el archivo");
    return;
  }
  console.log("El archivo fue borrado");
});
