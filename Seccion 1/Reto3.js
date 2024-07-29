// Solicita al usuario el presupuesto inicial y el costo del colchón salvavidas
let totalPresupuestoInicial = parseInt(prompt("Ingrese el total de su presupuesto inicial: "));
let colchon = parseInt(prompt("Ingrese el valor del colchon salvavidas: "));

// Crea un objeto para el presupuesto asignado a diferentes categorías
const presupuesto = {
    alojamiento: parseInt(prompt("Ingrese su presupuesto para el alojamiento: ")),
    transporte: parseInt(prompt("Ingrese su presupuesto para el transporte: ")),
    comida: parseInt(prompt("Ingrese su presupuesto para las comidas: "))
};

// Calcular el presupuesto final 
let presupuestoFinal = totalPresupuestoInicial - (presupuesto.alojamiento + presupuesto.transporte + presupuesto.comida);
console.log(`Tu presupuesto final es de: ${presupuestoFinal}`);
alert(`Tu presupuesto final es de: ${presupuestoFinal}`);

// Inicializa un arreglo para almacenar los artículos adicionales
let articulosList = [];

// ingresar múltiples artículos y los almacena en el arreglo
let continuarIngresando = true;
while (continuarIngresando) {
    let articulo = articuloExtra(); // Llama a la función para ingresar un artículo
    articulosList.push(articulo); // Añade el artículo al arreglo
    continuarIngresando = confirm("¿Desea ingresar otro articulo?"); // Pregunta si desea ingresar otro artículo
}

// Verifica si el presupuesto final es suficiente para el colchón salvavidas
if (presupuestoFinal >= colchon) {
    alert(`Puedes llevar artículos extra. Recuerda que cuentas con: ${presupuestoFinal}`);
    console.log(`Puedes considerar llevar artículos extra. Recuerda que cuentas con: ${presupuestoFinal}`);
} else {
    console.log("Evita gastos adicionales para no sobrepasar tu presupuesto");
}

// Evalúa cada artículo adicional para ver si su valor se ajusta al presupuesto final
articulosList.forEach(element => {
    if (element.valorArticulo < presupuestoFinal) {
        console.log("Puedes llevar este articulo");
        console.log(`${element.nombreArticulo} ${element.valorArticulo}`);
    } else {
        console.log("El valor de los artículos excede tu presupuesto");
    }
});

// Función para solicitar detalles del artículo adicional
function articuloExtra() {
    let nombreArticulo = prompt("Ingrese el nombre del articulo:"); // Solicita el nombre del artículo
    let valorArticulo = parseInt(prompt("Ingrese el valor del articulo: ")); // Solicita el valor del artículo y lo convierte a número entero
    
    return {
        nombreArticulo, // Devuelve el nombre del artículo
        valorArticulo   // Devuelve el valor del artículo
    };
}

// Muestra los artículos adicionales en formato de tabla en la consola
console.log("Articulos Extra: ");
console.table(articulosList);
