// Creo la clase para productos
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Creo la lista vacia para los productos y variables para el prompt
listaProductos = [];
let nombreProducto = "";
let precioProducto = 0;

// Creo la funcion para calcular el total
function calcularTotal(lista) {
  precioTotal = 0;

  lista.forEach((producto) => {
    precioTotal += producto.precio;
  });

  return precioTotal;
}

do {
  nombreProducto = prompt("Ingrese el nombre del producto:");
  // Por comodidad hago un chequeo previo para no agregar "salir" al array antes de ejecutar el while
  if (nombreProducto.toLowerCase() != "salir") {
    precioProducto = parseInt(prompt("Ingrese el precio del producto:"));
    listaProductos.push(new Producto(nombreProducto, precioProducto));
  }
} while (nombreProducto.toLowerCase() != "salir");

alert(
  `El total a pagar por los ${
    listaProductos.length
  } productos es de: $${calcularTotal(listaProductos)}`
);
