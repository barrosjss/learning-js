// 18.10 EJERCICIO 10
var text = prompt('Ingrese unas palabras: ');

function palindromo(cadena) {
  var cadenap = cadena.toLowerCase(); // Pasar a minusculas la cadena
  cadenap = cadenap.split(""); // Convertir la cadena en un array

  // Eliminamos los espacios en blanco
  var cadenaSinEspacios = '';

  for (i in cadenap) {
    if (cadenap[i] != " ") {
      cadenaSinEspacios += cadenap[i];
    }
  }

  var text1 = cadenaSinEspacios.split("");
  var text2 = cadenaSinEspacios.split("").reverse();

  var iguales;

  for (i in text1) {
    if (text1[i] == text2[i]) {
      iguales = true;
    } else {
      iguales = false;
    }
  }

  if (iguales) {
    return "Es un palíndromo";
  } else {
    return "No es un palíndromo";
  }
}

console.log(palindromo(text));