
let resultado = 0

function financiera(precio, cuotas) {

    if (cuotas >=12){
        interes = (precio * 0.5);
        resultado = (precio + interes)/cuotas;
        
    }else{
        if (cuotas >=6){
            interes = (precio * 0.25);
            resultado = (precio + interes) / cuotas;
            
        }else{
            if (cuotas >=3){
            interes = (precio * 0.10);
            resultado = (precio + interes) / cuotas;
        }else{
            resultado = precio / cuotas;
        }

        }
        
    }
}



let nombreIngresado   = prompt("Ingresar su nombre");

let nombreProducto  = prompt("Ingresar el producto a comprar");

let precioProducto  = parseInt(prompt("Ingresar el precio de dicho producto"));

let cantidadCuotas = parseInt(prompt("Ingresar la cantidad de cuotas en a pagar"));



financiera(precioProducto,cantidadCuotas);

alert("Gracias por usar el simulador de cuotas " + nombreIngresado + "\n El Producto seleccionado por usted es: " + nombreProducto + "\n El Precio de dicho producto es: " + precioProducto + "\n El Precio en " + cantidadCuotas +" cuotas que debe pagar es: " + resultado );
