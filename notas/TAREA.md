# Tarea: Mi componente interactivo

## Componente elegido
Lista interactiva de películas por ver, donde el usuario puede registrar nuevas películas indicando su título y género, visualizarlas dinámicamente en pantalla y eliminarlas individualmente.

## Codigo principal
```js
class Pelicula {
  constructor(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
  }

  descripcion() {
    return `${this.titulo} (${this.genero})`;
  }
}

const listaPeliculas = document.querySelector("#listaPeliculas");
const formPelicula = document.querySelector("#formPelicula");
const inputTitulo = document.querySelector("#tituloPelicula");
const inputGenero = document.querySelector("#generoPelicula");

function renderizarPelicula(pelicula) {
  const li = document.createElement("li");
  li.textContent = pelicula.descripcion();

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.className = "btn-borrar";
  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnBorrar);
  listaPeliculas.appendChild(li);
}

formPelicula.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nuevaPelicula = new Pelicula(inputTitulo.value.trim(), inputGenero.value.trim());
  renderizarPelicula(nuevaPelicula);
  formPelicula.reset();
});
```

## Pruebas realizadas
| Accion | Resultado esperado | Cumple (Si/No) |
|---|---|---|
| Cargar la página por primera vez | Se muestran las 2 películas iniciales ("Interestelar" y "El Padrino") con su botón Borrar | Sí |
| Escribir título y género y presionar "Agregar" | Se crea un nuevo objeto `Pelicula`, se añade a la lista sin recargar y se limpia el formulario | Sí |
| Hacer clic en el botón "Borrar" de una película | El elemento `<li>` correspondiente se elimina inmediatamente del DOM | Sí |

## Por que disene asi mi clase
Elegí los atributos `titulo` y `genero` porque representan los datos mínimos necesarios para identificar y clasificar cualquier película dentro de una lista pendiente. El método `descripcion()` centraliza el formato de texto que se muestra en la interfaz, evitando repetir concatenaciones cada vez que se renderiza un nuevo elemento en el DOM.