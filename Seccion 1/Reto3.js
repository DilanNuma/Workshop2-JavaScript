let totalPresupuestoInicial = parseInt(prompt("Ingrese el total de su presupuesto inicial: "))
let colchon = parseInt(prompt("Ingrese el valor del colchon salvavidas: "))

const presupuesto = {
    alojamiento: parseInt (prompt("Ingrese su presupuesto para el alojamiento: ")),
    transporte: parseInt (prompt("Ingrese su presupuesto para el transporte: ")),
    comida: parseInt (prompt("Ingrese su presupuesto para las comida: "))
}

let presupuestoFinal = (totalPresupuestoInicial - (presupuesto.alojamiento + presupuesto.transporte + presupuesto.comida));
console.log(`Tu presupuesto final es de: ${presupuestoFinal}`);



alert(`Tu presupuesto final es de: ${presupuestoFinal}`)


let articulosList = [];

let continuarIngresando = true;
while (continuarIngresando) {
    let articulo = articuloExtra();
    articulosList.push(articulo);
    continuarIngresando = confirm("¿Desea ingresar otro articulo?");
}

if (presupuestoFinal >= colchon){
    alert(`Puedes llevar articulos extra. Recuerda que cuentas con: ${presupuestoFinal}`)
    console.log(`Puedes considerar llevar articulos extra. Recuerda que cuentas con: ${presupuestoFinal}`)
}else console.log("Evita gastos adicionales para no sobrepasar tu presupuesto");

articulosList.forEach(element => {
    if (element.valorArticulo < presupuestoFinal ){
        console.log("Puedes llevar este articulo");
        console.log(`${element.nombreArticulo} ${element.valorArticulo}`);
    } else console.log("El valor de los articulos excede tu presupuesto");
});

function articuloExtra() {
    let nombreArticulo = prompt("Ingrese el nombre del articulo:");
    let valorArticulo = parseInt(prompt("Ingrese el valor del articulo: "))
    
    return {
        nombreArticulo,
        valorArticulo
    };
}
console.log("Articulos Extra: ");
console.table(articulosList)