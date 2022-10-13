// 18.7 EJERCICIO 7
var n = prompt('Ingrese un número: ');
var factoorial = 1;

for (var i = 1; i <= n; i++) {
  factoorial = factoorial * i;
}

console.log('El factorial de ' + n + ' es: ' + factoorial);