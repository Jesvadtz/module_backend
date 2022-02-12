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

// ----- EJERCICIO EN CLASE -------

const directoryToDelete = "newDirectory";
// Leer el directorio
// Nos trae un arreglo con los archivos
// Por cada archivo, se borra (unLink)
// Eliminar el directorio rmdir

function rmdir(pathToDelete) {
  fs.readdir(pathToDelete, (error, filesAndDirectories) => {
    if (error) {
      console.error("Error: ", error);
      return;
    }
    //Aquí ya tengo acceso a la data
    console.log(filesAndDirectories);
    filesAndDirectories.forEach((file, index) => {
      const newPathFile = `${pathToDelete}/${file}`;
      console.log(newPathFile);

      fs.unlink(newPathFile, (error) => {
        if (error) {
          console.error("Error: ", error);
          return;
        }
        console.log("Se borro el archivo", newPathFile);

        if (index === filesAndDirectories.length - 1) {
          fs.rmdir(pathToDelete, (error) => {
            if (error) {
              console.error("Error: ", error);
              return;
            }
            console.log("Se borro el directorio :D ");
          });
        }
      });
    });
  });
}

rmdir(directoryToDelete);

// Crear funcion rmdir con archivos usando funciones sincronas de las mismas funciones

function rmdirSyn(pathToDelete) {
  const files = fs.readdirSync(pathToDelete);
  files.forEach((file) => {
    const newPathFile = `${pathToDelete}/${file}`;
    fs.unlinkSync(newPathFile);
  });
  fs.rmdirSync(pathToDelete);
}
