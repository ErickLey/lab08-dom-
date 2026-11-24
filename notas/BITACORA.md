# Bitacora de JavaScript interactivo 
  
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. 
Navegador usado: Microsoft Edge 
  
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|---|---|---|
| textContent desde consola | Cambió el título a "Hola desde la consola" | No |
| textContent desde app.js | Cambió el título a "Hola TECSUP" | Sí |
| style.color | El color del texto del título cambió a azul | Sí |
| classList.add("destacado") | Se aplicó un fondo amarillo al párrafo del mensaje | Sí |
| createElement + appendChild | Se agregó un tercer elemento ("JavaScript") a la lista | Sí |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|---|---|---|
| click | Un clic izquierdo sobre el botón "Sumar 1" | 1 |
| dblclick | Dos clics seguidos (doble clic) sobre el botón | 1 |
| mouseover | Pasar el puntero del mouse por encima del botón | 1 |

En la consola, `evento.type` mostró el nombre exacto del evento ejecutado (por ejemplo, `"click"`), mientras que `evento.target` mostró la etiqueta HTML completa del botón que recibió la acción (`<button id="btnSumar">Sumar 1</button>`).
  
  
## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|---|---|---|
| Escribir en el campo nombre | El párrafo del saludo se actualizó letra por letra en tiempo real | No |
| Enviar sin preventDefault | El mensaje "Enviado" apareció un instante y luego desapareció vaciando el campo | Sí |
| Enviar con preventDefault, correo sin @ | Apareció el mensaje "Correo no valido: falta @" en color rojo | No |
| Enviar con preventDefault, correo con @ | Apareció el mensaje "Enviado: " seguido del correo en color normal | No |
  
## Ejercicio 5: Clases y objetos 
| Concepto | Que es en el codigo | Ejemplo del ejercicio |
|---|---|---|
| Clase | Plantilla o molde que define propiedades y métodos para crear objetos | `class Producto { ... }` |
| Constructor | Método especial que inicializa los valores iniciales al instanciar un objeto | `constructor(nombre, precio, stock)` |
| Propiedad | Dato o característica propia almacenada dentro de cada objeto | `this.nombre`, `this.precio`, `this.stock` |
| Método | Función definida dentro de la clase que opera con los datos del objeto | `descripcion()` |
| Instancia | Objeto concreto creado a partir de una clase usando `new` | `new Producto("Laptop Lenovo", 2850, 5)` |

Una clase actúa como un plano general que define qué datos y comportamientos tendrá un elemento, mientras que un objeto (instancia) es cada elemento real y específico creado a partir de ese plano con sus propios valores en memoria.