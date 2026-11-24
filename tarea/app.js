// Clase propia distinta de Producto
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

// Objetos iniciales de prueba
const iniciales = [
  new Pelicula("Interestelar", "Ciencia Ficción"),
  new Pelicula("El Padrino", "Drama")
];

iniciales.forEach((p) => renderizarPelicula(p));