// function solicitarNombre(){
//     let nombreIngresado   = prompt("Ingresar nombre");
//     alert("El nombre ingresado es " + nombreIngresado);
// } 

// solicitarNombre();

// //Declaración de variable para guardar el resultado de la suma
// let resultado = 0;
// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//     alert("el resultado es "+mensaje)
// }
// //Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);            
// mostrar(resultado); 


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");

console.log(producto1.nombre);
console.log(producto1.vendido);

producto1.sumaIva();
producto2.sumaIva();
producto1.vender();

console.log(producto1.nombre);
console.log(producto1.vendido);