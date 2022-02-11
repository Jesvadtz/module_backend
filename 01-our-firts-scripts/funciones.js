// Declaración
function greeting(nameToGreatting) {
  return `Hola ${nameToGreatting} buenas noches`;
}

// Callbacks
// Los callback son la declaración de una función que pasa como parámetro a otra función para que sea ejecutada en el futuro

// Ir al supermercado
// Avisar

console.log("---Callbacks-----");

function irAlSuper(avisarAMami) {
  console.log("Yendo al super...");
  console.log("Ya llegué");
  avisarAMami();
}

function avisar() {
  console.log("Mami, ya llegué al super");
}

irAlSuper(avisar); // Forma Correcta
irAlSuper(avisar()); // Forma Incorrecta
