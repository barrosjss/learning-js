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

// 18.17 EJERCICIO 17
function muestraOculta(id) {
  var elemento = document.getElementById('contenidos_' + id);
  var enlace = document.getElementById('enlace_' + id);

  if (elemento.style.display == "" || elemento.style.display == "block") {
    elemento.style.display = "none";
    enlace.innerHTML = 'Mostrar';
  }
  else {
    elemento.style.display = "block";
    enlace.innerHTML = 'Ocultar';
  }
}