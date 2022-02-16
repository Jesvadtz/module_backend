// Las promesas son objetos
// Constructor:  Por eso son objetos Promise
// Para instaciar : New, para poder crear un objeto de un constructor
// Los promise reciben callbacks

// RESOLVE es una función que nos permitirá pasar la promesa de pendiente a resuelta
// REJECT es una función que nos permitirá pasar la promesa de pendiente a rechazada

// Los objetos de tipo promesa, cuenta con dos métodos: then() y catch()

// then () Se ejecuta cuando la promesa se resolvió exitosamente
// Recibe lo que mandamos en la función resolve
// catch() Se ejecuta cuando la promesa ha sido rechazada
// Recibe lo que mandamos en la función reject

// myPromise.then();
// myPromise.catch();

const myPromise = new Promise((resolve, reject) => {
  // Lógica interna
  const todoBien = {};
  if (todoBien) {
    resolve("oki, todo bien");
  } else {
    reject("Todo salió mal u.u");
  }
});

myPromise
  .then((result) => {
    console.log(result); // 'Oki'
  })
  .catch((error) => {
    console.log(error); // 'no se que pasó'
  });

// Una promesa va a estar wrapper en una función

function myFirstPromise() {
  return new Promise((resolve, reject) => {
    const todoBien = {};
    if (todoBien) {
      resolve("oki, todo bien");
    } else {
      reject("Todo salió mal u.u");
    }
  });
}

// const myFirstPromise = () => new Promise(() => {});  FORMA NICE

// const myFirstPromise = () => {
//   return new Promise(() => {});
// };

// Para definir funciones voy a utilizar la palabra reservada function
// Callbacks, usar arrow functions

myFirstPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
