// 18.13 EJERCICIO 13
var text = prompt('Ingrese unas palabras: ');

// Validar fecha
function validDate(t) {
  let arrayText = t.split(' ')

  for (i in arrayText) {
    // formato "XX/XX/XXXX", donde "X" es un dígito
    if (/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(arrayText[i]))
      return 'La cadena ingresada contiene una fecha';
  }
  return 'La cadena ingresada no contiene una fecha';
}

console.log(validDate(text));

// Validar Mail
function validMail(t) {
  let arrayText = t.split(' ')

  for (i in arrayText) {
    // formato "XX/XX/XXXX", donde "X" es un dígito
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(arrayText[i]))
      return 'La cadena ingresada contiene un eMail';
  }
  return 'La cadena ingresada no contiene un eMail';
}

console.log(validMail(text));

// Invertir nombre
function invertName(t) {
  if (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(t)) {
    let array = t.split(' ');
    let output = '';

    for (i in array) {
      if (i == array.length - 1)
        output = array[i] + ', ';
      else
        output += array[i];
    }
    return output;
  } else {
    return 'No se ingreso \"Nombre Apellido\"';
  }
}

console.log(invertName(text));

// Elimine las etiquetas potencialmente peligrosas
function eliminarEtiquetas(t) {
  if (/(?!<title>)\w+(?=<\/title>)/gi.test(t)) {
    let output = t.replace(/<title>/, "");
    output = output.replace(/<\/title>/, "");

    return output;
  } else {
    return 'No se ingreso etiquetas peligrosas';
  }
}

// Test: <title>El primer script XD</title>
console.log(eliminarEtiquetas(text));