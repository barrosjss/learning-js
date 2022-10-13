// 18.6 EJERCICIO 6
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numDNI = prompt('Ingrese el número de DNI: ');
var letraDNI = prompt('Ingrese la letra de DNI: ');

if (numDNI < 0 || numDNI > 99999999) {
  console.log("El número proporcionado no es válido");
} else {
  var letra = letras[numDNI % 23];

  if (letraDNI != letra) {
    console.log('la letra que ha indicado no es correcta');
  }
  else {
    console.log('El número y la letra de DNI son correctos');
  }
}