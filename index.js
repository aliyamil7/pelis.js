const {
  todasLasPeliculas,
  ordenarPelis,
  buscarPorTexto,
  buscarPorTag,
} = require("./pelis");

const minimist = require("minimist");

// Leer los argumentos desde consola
const args = minimist(process.argv.slice(2), {
  alias: {
    sort: "s",
    search: "q",
    tag: "t",
  },
});

// Ejecutar según el argumento
let resultado;

if (args.sort) {
  console.log(`Peliculas ordenadas alfabeticamente`);
  resultado = ordenarPelis(args.sort);
} else if (args.search) {
  console.log(`Buscando titulos que incluyan: ${args.search}`);
  resultado = buscarPorTexto(args.search);
} else if (args.tag) {
  console.log(`Titulos que contienen: ${args.tag}`);
  resultado = buscarPorTag(args.tag);
} else {
  console.log(`Mostrando todas las películas`);
  resultado = todasLasPeliculas();
}

// Mostrar el resultado en tabla
console.table(resultado);
