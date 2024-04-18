let presupuestoDiario = parseInt(prompt("Ingresa tu presupuesto diario:"));
let costoComida = parseInt(prompt("Ingresa el costo de comer fuera:"));
let costoLibro = parseInt(prompt("Ingresa el costo de comprar un libro:"));
let objetivoAhorroDiario = parseInt(prompt("Ingresa tu objetivo de ahorro diario:"));

let puedeComerFuera = presupuestoDiario >= costoComida;
let puedeComprarLibro = presupuestoDiario >= costoLibro;
let puedeAhorrar = presupuestoDiario - costoComida - costoLibro >= objetivoAhorroDiario;


if (puedeComerFuera && puedeComprarLibro && puedeAhorrar) {
    console.log("Julian puede permitirse tanto comer fuera como comprar un libro hoy, y aún así alcanzar su objetivo de ahorro.");
} else if (puedeComerFuera && puedeComprarLibro) {
    console.log("Julian puede permitirse tanto comer fuera como comprar un libro hoy, pero no alcanzará su objetivo de ahorro.");
} else if (puedeComerFuera) {
    console.log("Julian puede permitirse comer fuera hoy, pero no comprar un libro ni alcanzar su objetivo de ahorro.");
} else if (puedeComprarLibro) {
    console.log("Julian puede permitirse comprar un libro hoy, pero no comer fuera ni alcanzar su objetivo de ahorro.");
} else {
    console.log("Julian no puede permitirse ni comer fuera ni comprar un libro hoy, tampoco alcanzará su objetivo de ahorro.");
}
