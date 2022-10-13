// 18.11 EJERCICIO 11
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  // Metodo
  this.obtDetalles = function obtDetalles() {
    console.log("Nombre: " + this.nombre + "\nEdad: " + this.edad);
  };
}

// Test
var person1 = new Persona('Maria', 19);
person1.obtDetalles();

function Estudiante(nombre, edad, curso, grupo) {
  Persona.call(this, nombre, edad);
  this.curso = curso;
  this.grupo = grupo;

  this.registrar = function registrar() {

  };

  this.obtDetalles = function obtDetalles() {
    console.log("Nombre: " + this.nombre
      + "\nEdad: " + this.edad
      + "\nCurso: " + this.curso
      + "\nGrupo: " + this.grupo);
  };
}

// Test
var estudiante1 = new Estudiante('Jesus', 15, '11', 'A');
estudiante1.obtDetalles();

function Profesor(nombre, edad, asignatura, nivel) {
  Persona.call(this, nombre, edad);
  this.asignatura = asignatura;
  this.nivel = nivel;

  this.asignar = function asignar() {

  };

  this.obtDetalles = function obtDetalles() {
    console.log("Nombre: " + this.nombre
      + "\nEdad: " + this.edad
      + "\nAsignatura: " + this.asignatura
      + "\nNivel: " + this.nivel);
  };
}

// Test
var profesor1 = new Profesor('Bob', 32, 'Matematicas', '11');
profesor1.obtDetalles();