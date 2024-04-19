
let clima = prompt("¿Cuál es el pronóstico del clima? (soleado/lluvioso/nublado)").toLowerCase();
let espacioMaleta = parseFloat(prompt("¿Cuánto espacio disponible queda en tu maleta? (en litros)"));
let pesoPermitido = parseFloat(prompt("¿Cuál es el límite de peso permitido para tu equipaje? (en kg)"));


// si el pronóstico indica lluvia, Julian considerará llevar un paraguas.
// Además, si Julian tiene espacio adicional y el peso de su equipaje lo permite, 
// podría decidir llevar una cámara o algún otro artículo que no sea esencial pero deseable.

const articulosLlevados = []

if (clima == "lluvioso" && espacioMaleta >= 2 && pesoPermitido >= 0.5) {
    articulosLlevados.push("un paraguas");
} else if (clima == "soleado" && espacioMaleta >= 5 && pesoPermitido >= 1) {
    articulosLlevados.push("tu cámara");
} else if (clima == "nublado" && espacioMaleta >= 1 && pesoPermitido >= 0.2) {
    articulosLlevados.push("un libro");
} else {
    console.log("Datos invalidos");
}

if (true) {
    console.log("Estos son los articulos que puedes llevar: ");
    articulosLlevados.forEach(articulos => {
        console.log(articulos)
    })
}
