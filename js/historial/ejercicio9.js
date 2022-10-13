// 18.9 EJERCICIO 9
var text = prompt('Ingrese unas palabras: ');

function determina(cadena) {
  if (cadena == cadena.toUpperCase()) {
    return "Está formada sólo por mayúsculas";
  } else if (cadena == cadena.toLowerCase()) {
    return "Está formada sólo por minúsculas";
  } else {
    return "Está formada por mayúsculas y minúsculas";
  }
}

console.log(determina(text));