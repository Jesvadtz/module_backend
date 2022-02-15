function construir(muroAConstruir) {
  console.log("Construyendo muro...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAConstruir.estaConstruido = true;
      //
      if (muroAConstruir.estaConstruido) {
        resolve(muroAConstruir);
      } else {
        reject("No se pudo construir el muro");
      }
    }, 2000);
  });
}

function aplanar(muroAAplanar) {
  console.log("Aplanando muro...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAAplanar.estaAplanado = true;
      if (muroAAplanar.estaAplanado) {
        resolve(muroAAplanar);
      } else {
        reject("No se pudo aplanar el muro");
      }
    }, 2000);
  });
}

function pintar(muroAPintar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAPintar.estaPintado = true;
      // Si es falso
      if (!muroAPintar.estaPintado) {
        reject("No se pudo pintar");
        return; // Salida temprana
      }
      resolve(muroAPintar);
    }, 3000);
  });
}

const muro = {
  estaConstruido: false,
  estaAplanado: false,
  estaPintado: false,
};

// construir(muro)
//   .then((muroConstruido) => {
//     console.log("Muro Construido: ", muroConstruido);

//     aplanar(muroConstruido)
//       .then((muroAplanado) => {
//         console.log("Muro aplanado: ", muroAplanado);

//         pintar(muroAplanado)
//           .then((muroPintado) => {
//             console.log("Muro Pintado: ", muroPintado);
//           })
//           .catch((error) => {
//             console.log("Error de pintar", error);
//           });
//       })
//       .catch((error) => {
//         console.log("Error de aplanar: ", error);
//       });
//   })
//   .catch((error) => {
//     console.log("Error de construccion", error);
//   });

// Async / Await

/*

async: Marca a una función como asíncrona 
await: Nos permite esperar la ejecución de una promesa

-------PARA USAR AWAIT NECESITAMOS UNA FUNCIÓN A LA QUE MARCAREMOS COMO ASÍNCRONA--------

----LAS FUNCIONES QUE MARQUEMOS COMO ASÍNCRONAS, POR DEFECTO REGRESAN UNA PROMESA----

*/

async function main() {
  const muroConstruido = await construir(muro);
  console.log("Muro construido: ", muroConstruido);
  const muroAplanado = await aplanar(muroConstruido);
  console.log("Muro aplanado: ", muroAplanado);
  const muroPintado = await pintar(muroAplanado);
  console.log("Muro pintado: ", muroPintado);
}

main()
  .then(() => {
    console.log("Todo cool");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

/*

1. Pasar el proceso de inscripción de kodemia a promesas, para ejecutar las promesas, usar then y catch y después con async y await.
2. Consumir el módulo del file system pero con promesas

*/
