// 18.4 EJERCICIO 4
var valores = [true, 5, false, "hola", "adios", 2];
console.log(valores);

// Determinar cual de los dos elementos de texto es mayor
var tamano = 0;
var eMayor;

valores.forEach(function (e) {
  if ((typeof (e) === 'string') && (e.length > tamano)) {
    tamano = e.length;
    eMayor = e;
  }
});

console.log("El elemento de texto mayor es: " + eMayor);

/* Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios 
para obtener un resultado true y otro resultado false */
var eTrue;
var eFalse;

valores.forEach(function (e) {
  if (typeof (e) === 'boolean') {
    (e) ? (eTrue = e) : (eFalse = e);
  }
});

console.log("Resultado true: " + eTrue);
console.log("Resultado false: " + eFalse);

// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
var num1 = null;
var num2 = null;

valores.forEach(function (e) {
  if (typeof (e) === 'number') {
    if (num1 == null) {
      num1 = e;
    } else {
      num2 = e;
    }
  }
});

console.log("suma: " + (num1 + num2));
console.log("resta: " + (num1 - num2));
console.log("multiplicacion: " + (num1 * num2));
console.log("division: " + (num1 / num2));
console.log("exponente: " + Math.pow(num1, num2));