//Importo el modulo index.js
const peliculas = require("./pelis");

// Obtener los argumentos desde la terminal
const orden = process.argv[2]; // sort o search // "ordenar" o "buscar"
const accion = process.argv[3]; // "nombre", "rating", o una palabra clave//

function main() {
  if (!orden) {
    // Si no se pasó ningún argumento muestra toda la info
    console.log("Listado completo de películas:\n");
    console.table(peliculas.todasLasPeliculas());
  } else if (orden === "--sort") {
    console.table(peliculas.ordenarPelis(accion));
  } else if (orden === "--search") {
    // Buscar por texto y por tag
    console.log(`Buscando películas con la palabra: "${accion}"\n`);
    console.table(peliculas.buscarPorTexto(accion));
    console.table(peliculas.buscarPorTag(accion));
  } else {
    console.log("Comando no reconocido. Usá '--sort' o '--search'.");
  }
}
main();
