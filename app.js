// Laboratorio 08: DOM, eventos y objetos
console.log("app.js cargado");

// Ejercicio 2: seleccionar y modificar el DOM 
const titulo = document.querySelector("#titulo"); 
titulo.textContent = "Hola TECSUP"; 
titulo.style.color = "blue"; 
const mensaje = document.querySelector(".mensaje"); 
mensaje.classList.add("destacado"); 
const lista = document.querySelector("#lista"); 
const nuevo = document.createElement("li"); 
nuevo.textContent = "JavaScript";
lista.appendChild(nuevo);

// Ejercicio 3: evento click
const btnSumar = document.querySelector("#btnSumar");
const btnReiniciar = document.querySelector("#btnReiniciar");
const contador = document.querySelector("#contador");
let clics = 0;

btnSumar.addEventListener("click", (evento) => {
  clics = clics + 1;
  contador.textContent = clics;
  console.log(evento.type, evento.target);
});

btnReiniciar.addEventListener("click", () => {
  clics = 0;
  contador.textContent = clics;
});

// Ejercicio 4: eventos input y submit
const nombre = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");

nombre.addEventListener("input", () => {
  saludo.textContent = "Hola, " + nombre.value;
});

const formulario = document.querySelector("#formulario");
const correo = document.querySelector("#correo");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (!correo.value.includes("@")) {
    resultado.textContent = "Correo no valido: falta @";
    resultado.classList.add("error");
  } else {
    resultado.textContent = "Enviado: " + correo.value;
    resultado.classList.remove("error");
  }
});

// Ejercicio 5: clases y objetos
class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  descripcion() {
    return `${this.nombre} - S/ ${this.precio.toFixed(2)} (${this.stock} disponibles)`;
  }
}

const productos = [
  new Producto("Laptop Lenovo", 2850, 5),
  new Producto("Mouse Inalambrico", 45, 20),
  new Producto("Teclado Mecanico", 180, 8)
];

const listaProductos = document.querySelector("#productos");

productos.forEach((prod) => {
  const item = document.createElement("li");
  item.textContent = prod.descripcion();
  listaProductos.appendChild(item);
});