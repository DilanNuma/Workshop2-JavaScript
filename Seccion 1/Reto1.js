alert("El Viaje de Julian")

//Objeto que almacena los paises y el presupuesto minimo para ir a cada uno
let destino = {
    pais: ["Mexico", "Brasil", "Bolivia"],
    presupuestoPais: {
        Mexico: 100000,
        Brasil: 250000,
        Bolivia: 150000
    }
};
// eleccion almacena el pais ingresado por el usuario y dias la cantidad de dias que durará el viaje
const eleccion = prompt(`Elige tu destino: ${destino.pais}`)
let dias = parseInt (prompt("Ingrese la cantidad de días que durará ti viaje: "));

//Objeto para preguntar presupuesto de alojameiento, transporte y actividades a realizar
let presupuesto = {
alojamiento: parseInt (prompt("Ingrese su presupuesto para el alojamiento: ")),
transporte: parseInt (prompt("Ingrese su presupuesto para el transporte: ")),
actividades: parseInt (prompt("Ingrese su presupuesto para las actividades: "))
}

// presupuestoTotal calcular el presupuesto ingresado anteriormente, lo suma entre si y lo multiplica por los días que durará el viaje
let presupuestoTotal = (presupuesto.actividades + presupuesto.alojamiento + presupuesto.transporte) * dias

// Mostrar al usuario 
console.log(`Tu destino es ${eleccion} \ Te vas a quedar ${dias} días \ Tu presupuesto total es: ${presupuestoTotal}`);

//Condicion para determinar si el presupuesto que tiene el usuario alcanza o no para el viaje
if (presupuestoTotal < destino.presupuestoPais[eleccion]){
console.log("No puedes viajar")
}else console.log(`Puedes viajar. Bienvenido a ${eleccion}`);