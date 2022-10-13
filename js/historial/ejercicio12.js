// 18.12 EJERCICIO 12
var apariciones = [];
var resultadosSumas = [];

for (var i = 0; i < 36000; i++) {
  var dado1 = Math.floor(Math.random() * 6) + 1;
  var dado2 = Math.floor(Math.random() * 6) + 1;

  var suma = dado1 + dado2;

  resultadosSumas.push(suma);
}

var num = [];
var nump;

for (var i = 0; i < 36000; i++) {
  nump = resultadosSumas[i];

  var c = 0;

  resultadosSumas.forEach(function (e) {
    if (e == nump) {
      c++;
    }
  });

  if (nump != num.find(element => element === nump)) {
    num.push(nump);
    apariciones.push(c);
  }
}

console.log(num);
console.log(apariciones);

function sumarArreglo(arreglo) {
  var resultado = 0;

  arreglo.forEach(function (e) {
    resultado += e;
  });

  console.log(resultado);
}

sumarArreglo(apariciones);