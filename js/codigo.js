// 18.1 EJERCICIO 1
// console.log("Hola Mundo!");



// 18.2 EJERCICIO 2
// alert("Hello world! \nQue facil es incluir 'Comillas simples' \ny \"Comillas dobles\"");



// 18.3 EJERCICIO 3
// let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// console.log(meses);



// 18.4 EJERCICIO 4
var valores = [true, 5, false, "hola", "adios", 2];
console.log(valores);

// Determinar cual de los dos elementos de texto es mayor
var tamano = 0;
var eMayor;

valores.forEach(function (e) {
  if ((typeof (e) == 'string') && (e.length > tamano)) {
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
  if (typeof (e) == 'boolean') {
    (e) ? (eTrue = e) : (eFalse = e);
  }
});

console.log("Resultado true: " + eTrue);
console.log("Resultado false: " + eFalse);

// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
var num1;
var num2;
var i = 1;

valores.forEach(function (e) {
  if ((typeof (e) == 'number')) {
    (i==1) ? (num1 = e) : (num2 = e);
  }
  i=2;
});