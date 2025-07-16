const fs = require("fs");

//Importo el archivo json del array de objetos "peli"
const pelis = JSON.parse(fs.readFileSync(__dirname + "/pelis.json"));

//Funcion para ordenar alfabeticamente o por rating
function ordenarPelis(campo) {
  if (!pelis[0].hasOwnProperty(campo)) {
    console.log(
      `No se puede ordenar por "${campo}" porque no es una propiedad válida`
    );
    console.log(`Por favor utilice la propiedad "title" o "rating"`);
    return [];
  }
  return pelis.slice().sort((a, b) => {
    if (typeof a[campo] === "string") {
      return a[campo].localeCompare(b[campo]);
    }
    if (typeof a[campo] === "number") {
      return b[campo] - a[campo]; // De mayor a menor (como tu rating)
    }
    return 0;
  });
}

//Creo nueva funcion para mostrar todas las peliculas
//Aparece aunque no haya ninguna orden de sort o search
function todasLasPeliculas() {
  return pelis;
}

//Creo nueva funcion para buscar por letras o palabras dentro de peliculas
function buscarPorTexto(palabra) {
  //Variable para filtrar letras o palabras dentro de peliculas
  const resultado = pelis.filter((peli) =>
    peli.title.toLowerCase().includes(palabra.toLowerCase())
  );
  if (resultado.length > 0) {
    return resultado;
  } else {
    return [];
  }
}

// Buscar por tag
function buscarPorTag(palabra) {
  return pelis.filter((peli) =>
    peli.tags.some((tag) => tag.toLowerCase() === palabra.toLowerCase())
  );
}

//Exporto las funciones al modulo peli.js
module.exports = {
  ordenarPelis,
  buscarPorTexto,
  buscarPorTag,
  todasLasPeliculas,
};
