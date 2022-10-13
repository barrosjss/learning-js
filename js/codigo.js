// 18.8 EJERCICIO 8
var numero = prompt('Ingrese un número: ');

function numType(num) {
  if ((numero % 2) == 0) {
    return 'El numero es par';
  } else {
    return 'El numero es impar';
  }
}

console.log(numType(numero));