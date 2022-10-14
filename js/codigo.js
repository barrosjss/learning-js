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
function informacion(elEvento) {
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
      muestraInformacion(['Raton', 'Navegador [' + coordenadaXrelativa + ', ' + coordenadaYrelativa + ']', 'Pagina [' + coordenadaXabsoluta + ', ' + coordenadaYabsoluta + ']']);
      break;
    case 'keypress':
      document.getElementById('info').style.backgroundColor = '#CCE6FF';
      var caracter = evento.charCode || evento.keyCode;
      var letra = String.fromCharCode(caracter);
      var codigo = letra.charCodeAt(0);
      muestraInformacion(['Teclado', 'Caracter [' + letra + ']', 'Codigo [' + codigo + ']']);
      break;
    case 'click':
      document.getElementById('info').style.backgroundColor = '#FFFFCC';
      break;
  }
}

function muestraInformacion(mensaje) {
  document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
  for (var i = 1; i < mensaje.length; i++) {
    document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
  }
}

document.onmousemove = informacion;
document.onkeypress = informacion;

document.onclick = informacion;