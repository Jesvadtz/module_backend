// Crear una función que nos salude por nuestro nombre
// Debe retornar el saludo en un string
// Usar el valor de retorno de la función para hacer un console.log

// Declaración de la función
let saludo = (nombreParaSaludar) => {
  return "Buenas noches " + nombreParaSaludar;
};

// Mandas a llamar a una función
saludo("Jessica");
console.log(saludo("Fer"));

// Una funcion que me retorne nombres aleatorios
function getNameRandom() {
  //index las = 6
  // length = 7 -> 8
  const arrayNames = ["Jess", "Angel", "Jair", "Kenai", "Griselda"];
  const indexRandom = Math.floor(Math.random() * (arrayNames.length - 0) + 0);

  //Floor, es para hacer a los numeros enteros, no decimales
  return arrayNames[indexRandom];
}

console.log(getNameRandom());

// Llamamos una función que recibe como parámetro otra función
const greetingRandom = saludo(getNameRandom());
console.log(greetingRandom);

const nameRandom = getNameRandom();
console.log(saludo(nameRandom));
