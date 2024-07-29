// Función para ingresar el souvenir
function ingresarSouvenir() {
    let nombre = prompt("Ingrese el nombre del souvenir:");
    let costo = parseFloat(prompt("Ingrese el costo del souvenir:"));
    let disponibilidad = prompt("¿Está disponible el souvenir? (si/no)").toLowerCase();
    let disponible = disponibilidad === 'si';

    // Verificar que el costo tenga un número válido
    if (isNaN(costo)) {
        alert("Error: El costo ingresado no es válido.");
        return null;
    }

    // Crear y devolver el objeto souvenir
    return {
        nombre: nombre,
        costo: costo,
        disponible: disponible
    };
}

// Función para verificar los tipos de datos
function verificarTipoDatos(souvenir) {
    if (typeof souvenir.nombre !== 'string') {
        console.log("Error: El nombre del souvenir debe ser una cadena de texto.");
    }
    if (typeof souvenir.costo !== 'number' || isNaN(souvenir.costo)) {
        console.log("Error: El costo del souvenir debe ser un número válido.");
    }
    if (typeof souvenir.disponible !== 'boolean') {
        console.log("Error: La disponibilidad del souvenir debe ser un valor booleano.");
    }
}

// Lista de souvenirs
const souvenirs = [];

//Preguntar al usuario si desa ingresar nuevos souvenirs
let continuarIngresando = true;
while (continuarIngresando) {
    let souvenir = ingresarSouvenir();
        souvenirs.push(souvenir);
    continuarIngresando = confirm("¿Desea ingresar otro souvenir?");
}

// Mostrar la lista de los souvenirs
console.log("Lista de Souvenirs:");
console.table(souvenirs);
