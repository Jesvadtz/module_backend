/*
Requerimiento: Construir, aplanar y pintar un muro

1. Construir el muro
2. Aplanar el muro
3. Pintar el muro

*/

const muro = {
  estaConstruido: false,
  estaAplanado: false,
  estaPintado: false,
};

// DE FORMA SÍNCRONA
// function construir(muroAConstruir) {
//   muroAConstruir.estaConstruido = true;
//   return muroAConstruir;
// }

// function aplanar(muroAAplanar) {
//   muroAAplanar.estaAplanado = true;
//   return muroAAplanar;
// }

// function pintar(muroAPintar) {
//   muroAPintar.estaPintado = true;
//   return muroAPintar;
// }

// const muroConstruido = construir(muro);
// const muroAplanado = aplanar(muroConstruido);
// const muroPintado = pintar(muroAplanado);

// DE FORMA ASÍNCRONA
function construir(muroAConstruir, callback) {
  setTimeout(() => {
    let error = null;
    muroAConstruir.estaConstruido = true;
    if (muroAConstruir.estaConstruido === false) {
      error = "No se pudo construir";
    }
    callback(error, muroAConstruir); // Aqui se ejecuta el callback
  }, 3000); // Se ejecuta después del tiempo que se le indica
}

function aplanar(muroAAplanar, callback) {
  setTimeout(() => {
    let error = null;
    muroAAplanar.estaAplanado = true;
    if (muroAAplanar.estaAplanado === false) {
      error = "no se puede aplanar";
    }
    callback(error, muroAAplanar);
  }, 3000);
}

function pintar(muroAPintar, callback) {
  setTimeout(() => {
    let error = null;
    muroAPintar.estaPintado = true;
    if (muroAPintar.estaPintado == false) {
      error = "No se pudo pintar";
    }
    callback(error, muroAPintar);
  }, 3000);
}

construir(muro, (error, muroConstruido) => {
  if (error) {
    console.log("Error", error);
    return;
  }
  // Ya tengo el muro construido
  console.log("Muro construido", muroConstruido);
  aplanar(muroConstruido, (errorAplanar, muroAplanado) => {
    if (errorAplanar) {
      console.error("Error", errorAplanar);
      return;
    }
    console.log("MuroAplanado", muroAplanado);
    pintar(muroAplanado, (errorPintar, muroPintado) => {
      if (errorPintar) {
        console.error("Error", errorPintar);
        return;
      }
      console.log("Muro pintado", muroPintado);
    });
  });
});
