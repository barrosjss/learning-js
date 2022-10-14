// Estos son los ejercicios que intervienen en la interfaz(html)

// 18.15 EJERCICIO 15
function muestra() {
  var elemento = document.getElementById("adicional");
  elemento.className = "visible";

  var enlace = document.getElementById("enlace");
  enlace.className = "oculto";
}

// 18.16 EJERCICIO 16
function anade() {
  var elemento = document.createElement("li");
  var texto = document.createTextNode("Nuevo elemento");
  elemento.appendChild(texto);

  var lista = document.getElementById("lista");
  lista.appendChild(elemento);
}