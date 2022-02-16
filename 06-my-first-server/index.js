const http = require("http");

const server = http.createServer((request, response) => {
  console.log("url: ", request.url);
  console.log("method: ", request.method);
  response.write("Hola, desde mi servidor con node,js");
  response.end();
});

server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto: 8080");
});
