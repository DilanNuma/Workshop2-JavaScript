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

// Lista de souvenirs
let souvenirs = [];

// Preguntar al usuario si desa ingresar nuevos souvenirs
const continuarIngresando = true;
while (continuarIngresando) {
    let souvenir = ingresarSouvenir();
    if (souvenir !== null) {
        souvenirs.push(souvenir);
    }
    continuarIngresando = confirm("¿Desea ingresar otro souvenir?");
}

// Mostrar la lista de los souvenirs
console.log("Lista de Souvenirs:");
console.table(souvenirs);
