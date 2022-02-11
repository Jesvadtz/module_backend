// fs.readFile(path[, options], callback)

const fs = require("fs");

fs.readFile("new-file.txt", "utf8", (error, data) => {
  if (error) {
    console.log("No se leyó el archivo");
    return;
  }
  console.log(data);
});
