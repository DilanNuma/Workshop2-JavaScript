
let nivelEnergia = parseInt(prompt("Ingrese su nivel de energía en una escala del 1 al 10: "));
let clima = prompt("Ingrese el clima de hoy, teniendo en cuenta las siguientes opciones (soleado, lluvioso, nublado)"); 
let cargaTrabajo = confirm("Tiene trabajo pendiente?");  // true si tiene trabajo pendiente, false si no


if (nivelEnergia <= 3 || !clima || cargaTrabajo) {
    console.log("Hoy no es un buen día para correr. Julian debería tomar un día libre.");
} else if (nivelEnergia >= 8 && clima === "soleado") {
    console.log("¡El día está perfecto para correr! Julian debería aprovecharlo.");
} else {
    console.log("Julian puede trabajar en sus proyectos personales hoy.");
}
