// 18.14 EJERCICIO 14
window.onload = function() {
  var info = document.getElementById("informacion");

  // Numero de enlaces de la pagina
  var enlaces = document.getElementsByTagName("a");

  console.log("Numero de enlaces = "+enlaces.length);

  // Direccion del penultimo enlace
  console.log("El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href);

  // Numero de enlaces que apuntan a http://prueba
  var contador = 0;
  for(var i=0; i<enlaces.length; i++) {
    // Es necesario comprobar los enlaces http://prueba y
    // http://prueba/ por las diferencias entre navegadores
    if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
      contador++;
    }
  }
  console.log(contador + " enlaces apuntan a http://prueba");

  // Numero de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a");
  console.log("Numero de enlaces del tercer párrafo = "+enlaces.length);
}