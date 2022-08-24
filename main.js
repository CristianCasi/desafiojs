let precioProducto;
let nombreProducto;
let add;
let sumador = 0;
let listaProductos = [];

do{
    nombreProducto = prompt ("ingrese producto");
    precioProducto = parseFloat(prompt("ingrese precio"));
    producto(nombreProducto, precioProducto);

    calc(precioProducto);

    add = prompt("Desea agregar otro producto? (s/n)").toLowerCase();

function producto(nombreProducto,precioProducto){
  alert("Producto: " + nombreProducto + " Precio: $" + precioProducto);}

function calc(precioProducto){
    sumador = sumador + precioProducto;
}

}while(add=== "s")

alert("El precio a pagar es $" + sumador);

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio
    }
}/* Arrays */
const agregarProd = () => {
    let nombre = prompt("Nombre del producto");
    let precio = parseFloat(prompt("Cual es el precio?"));
    let prod = new Producto(nombre,precio);
    listaProductos.push(prod);
}

listaProductos.push(new Producto("productoUno", 1));
listaProductos.push(new Producto("ProductoDos", 2));
listaProductos.push(new Producto("ProductoTres", 3));
listaProductos.push(new Producto("ProductoCuatro", 4));

console.log(listaProductos)


for (let i=0; i<listaProductos.length; i++) {
}

for (const producto of listaProductos) {
    console.log(`El producto es ${producto.nombre} y su valor es de ${producto.precio}`)
    for(const prop in producto) {
        console.log(`Producto: ${prop} valdria: ${producto[prop]}` )
    }
}