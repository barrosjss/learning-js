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