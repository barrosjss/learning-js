// 18.16 EJERCICIO 16
function anade() {
  var elemento = document.createElement("li");
  var texto = document.createTextNode("Nuevo elemento");
  elemento.appendChild(texto);

  var lista = document.getElementById("lista");
  lista.appendChild(elemento);
}