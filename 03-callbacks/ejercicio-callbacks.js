// Practica Callbacks
// 1. Entrevista
// 2. Oferta
// 3. Inscripción
// 4. Asistir a clase

const koder = {
  tomaEntrevista: false,
  obtieneOferta: false,
  pagaInscripcion: false,
  asisteAClase: false,
};

function entrevistar(koderAEntrevistar, callback) {
  console.log("¿Será que hará entrevista?");
  setTimeout(() => {
    koderAEntrevistar.tomaEntrevista = true;
    let error = null;
    if (koderAEntrevistar.tomaEntrevista === false) {
      error = "No hizo entrevista";
    }
    callback(error, koderAEntrevistar);
  }, 5000);
}

function ofertar(koderQueRecibeOferta, callback) {
  console.log("Están prerando su oferta");
  setTimeout(() => {
    koderQueRecibeOferta.obtieneOferta = true;
    let error = null;
    if (koderQueRecibeOferta.obtieneOferta === false) {
      error = "No recibió oferta";
    }
    callback(error, koderQueRecibeOferta);
  }, 4000);
}

function pagarInscripcion(koderQuePagara, callback) {
  console.log("Esta consiguiendo el dinero para la inscripción");
  setTimeout(() => {
    koderQuePagara.pagaInscripcion = true;
    let error = null;
    if (koderQuePagara.pagaInscripcion === false) {
      error = "No tiene dinero para pagar";
    }
    callback(error, koderQuePagara);
  }, 3000);
}

function asistirAClase(koderQueTomaraClase, callback) {
  console.log("Esperemos que si asista a clase");
  setTimeout(() => {
    koderQueTomaraClase.asisteAClase = true;
    let error = null;
    if (koderQueTomaraClase.asisteAClase === false) {
      error = "No asiste a clase";
    }
    callback(error, koderQueTomaraClase);
  }, 2000);
}

entrevistar(koder, (error, koderEntrevistado) => {
  if (error) {
    console.log("Error entrevista: ", error);
    return;
  }
  console.log("Koder entrevistado: ", koderEntrevistado);
  ofertar(koderEntrevistado, (errorOfertar, koderOfertado) => {
    if (errorOfertar) {
      console.log("Error oferta: ", errorOfertar);
      return;
    }
    console.log("Koder ofertado: ", koderOfertado);
    pagarInscripcion(koderOfertado, (errorInscripcion, koderInscrito) => {
      if (errorInscripcion) {
        console.log("Error inscripción: ", errorInscripcion);
        return;
      }
      console.log("Koder inscrito", koderInscrito);
      asistirAClase(koderInscrito, (errorClase, koderEnClase) => {
        if (errorClase) {
          console.log("Error clase: ", errorClase);
          return;
        }
        console.log("Koder asiste a clase", koderEnClase);
      });
    });
  });
});
