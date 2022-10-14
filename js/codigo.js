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

// 18.18 EJERCICIO 18
function tecladoymouse(elEvento) {
  var evento = elEvento || window.event;
  switch (evento.type) {
    case 'mousemove':
      document.getElementById('info').style.backgroundColor = '#FFFFFF';
      var ie = navigator.userAgent.toLowerCase().indexOf('msie') != -1;
      var coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta;
      if (ie) {
        if (document.documentElement && document.documentElement.scrollTop) {
          coordenadaXabsoluta = evento.clientX + document.documentElement.scrollLeft;
          coordenadaYabsoluta = evento.clientY + document.documentElement.scrollTop;
        }
        else {
          coordenadaXabsoluta = evento.clientX + document.body.scrollLeft;
          coordenadaYabsoluta = evento.clientY + document.body.scrollTop;
        }
      }
      else {
        coordenadaXabsoluta = evento.pageX;
        coordenadaYabsoluta = evento.pageY;
      }
      coordenadaXrelativa = evento.clientX;
      coordenadaYrelativa = evento.clientY;
      muestratecladoymouse(['Raton', 'Navegador [' + coordenadaXrelativa + ', ' + coordenadaYrelativa + ']', 'Pagina [' + coordenadaXabsoluta + ', ' + coordenadaYabsoluta + ']']);
      break;
    case 'keypress':
      document.getElementById('info').style.backgroundColor = '#CCE6FF';
      var caracter = evento.charCode || evento.keyCode;
      var letra = String.fromCharCode(caracter);
      var codigo = letra.charCodeAt(0);
      muestratecladoymouse(['Teclado', 'Caracter [' + letra + ']', 'Codigo [' + codigo + ']']);
      break;
    case 'click':
      document.getElementById('info').style.backgroundColor = '#FFFFCC';
      break;
  }
}

function muestratecladoymouse(mensaje) {
  document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
  for (var i = 1; i < mensaje.length; i++) {
    document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
  }
}

document.onmousemove = tecladoymouse;
document.onkeypress = tecladoymouse;
document.onclick = tecladoymouse;

// 18.19 EJERCICIO 19
function zonaPantalla(elEvento) {
  var evento = elEvento || window.event;

  var coordenadaX = evento.clientX;
  var coordenadaY = evento.clientY;

  var dimensiones = tamanoVentanaNavegador();
  var tamanoX = dimensiones[0];
  var tamanoY = dimensiones[1];

  var posicionHorizontal = "";
  var posicionVertical = "";

  if (coordenadaX > tamanoX / 2) {
    posicionHorizontal = "derecha";
  }
  else {
    posicionHorizontal = "izquierda";
  }

  if (coordenadaY > tamanoY / 2) {
    posicionVertical = "abajo";
  }
  else {
    posicionVertical = "arriba";
  }

  muestraZonaPantalla(['Posicion', posicionHorizontal, posicionVertical]);
}

function muestraZonaPantalla(mensaje) {
  document.getElementById("info2").innerHTML = '<h1>' + mensaje[0] + '</h1>';
  for (var i = 1; i < mensaje.length; i++) {
    document.getElementById("info2").innerHTML += '<p>' + mensaje[i] + '</p>';
  }
}

function tamanoVentanaNavegador() {
  // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
  var dimensiones = [];

  if (typeof (window.innerWidth) == 'number') {
    // No es IE
    dimensiones = [window.innerWidth, window.innerHeight];
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    //IE 6 en modo estandar (no quirks)
    dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
  } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
    //IE en modo quirks
    dimensiones = [document.body.clientWidth, document.body.clientHeight];
  }

  return dimensiones;
}

document.onclick = zonaPantalla;