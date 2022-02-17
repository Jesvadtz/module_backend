const http = require("http");
const { url } = require("inspector");

const server = http.createServer((request, response) => {
  const myURL = "/koders";
  if (request.url === myURL) {
    if (request.method === "GET") {
      response.write("Aquí están todos los koders");
    } else if (request.method === "POST") {
      response.write("Aquí puedes crear koders");
    } else {
      response.write("No estaba preparado para esto");
    }
  } else {
    response.write("No estaba preparado para esto");
  }
  response.end();

  // console.log("url: ", request.url);
  // console.log("method: ", request.method);
  // response.write("Aquí están todos los koders");
  // response.end();
});

// Es una función para mandar a llamar al servidor
server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto: 8080");
});

// Ejercicio 1:
// /koders
// GET /koders --> Aquí están todos los koders
// POST /koders --> Aquí puedes crear koders
// X /x --> No estaba preparado para esto
