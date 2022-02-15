const koder = {
  tomaEntrevista: false,
  obtieneOferta: false,
  pagaInscripcion: false,
  asisteAClase: false,
};

function entrevistar(koderAEntrevistar) {
  console.log("Koder esperando ser entrevistado...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderAEntrevistar.tomaEntrevista = true;
      if (koderAEntrevistar.tomaEntrevista) {
        resolve(koderAEntrevistar);
      } else {
        reject("Koder no ha sido entrevistado");
      }
    }, 2000);
  });
}

function recibirOferta(koderEntrevistado) {
  console.log("Koder esperando recibir una oferta...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderEntrevistado.obtieneOferta = true;
      if (koderEntrevistado.obtieneOferta) {
        resolve(koderEntrevistado);
      } else {
        reject("Koder no ha recibido una oferta");
      }
    });
  }, 2000);
}

function pagarInscripcion(koderOfertado) {
  console.log("Koder obteniendo dinero para pagar...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderOfertado.pagaInscripcion = true;
      if (!koderOfertado.pagaInscripcion) {
        reject("Koder no ha pagado inscripción");
        return;
      }
      resolve(koderOfertado);
    }, 3000);
  });
}

function asistirAClase(koderInscrito) {
  console.log("Koder esperando sus clases...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      koderInscrito.asisteAClase = true;
      if (!koderInscrito.asisteAClase) {
        reject("Koder no está asistiendo a clase");
        return;
      }
      resolve(koderInscrito);
    });
  }, 2000);
}

// entrevistar(koder)
//   .then((koderEntrevistado) => {
//     console.log("Koder entrevistado: ", koderEntrevistado);

//     recibirOferta(koderEntrevistado)
//       .then((koderOfertado) => {
//         console.log("Koder ofertado: ", koderOfertado);

//         pagarInscripcion(koderOfertado)
//           .then((koderInscrito) => {
//             console.log("Koder inscrito: ", koderInscrito);

//             asistirAClase(koderInscrito)
//               .then((koderEnClase) => {
//                 console.log("Koder en clase: ", koderEnClase);
//               })
//               .catch((error) => {
//                 console.error("Error de asistir a clase: ", error);
//               });
//           })
//           .catch((error) => {
//             console.error("Error de inscripción: ", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error de oferta: ", error);
//       });
//   })
//   .catch((error) => {
//     console.error("Error de entrevista: ", error);
//   });

async function kodemiaOferta() {
  const koderEntrevistado = await entrevistar(koder);
  console.log("Koder entrevistado: ", koderEntrevistado);
  const koderOfertado = await recibirOferta(koderEntrevistado);
  console.log("Koder ofertado: ", koderOfertado);
  const koderInscrito = await pagarInscripcion(koderOfertado);
  console.log("Koder inscrito: ", koderInscrito);
  const koderEnClase = await asistirAClase(koderInscrito);
  console.log("Koder en clase: ", koderEnClase);
}

kodemiaOferta()
  .then(() => {
    console.log("El koder está feliz");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
