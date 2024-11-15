// Definir productos del menú
const productos = {
    "Hamburguesas Clasica": 5,
    "Hamburguesas de Pollo": 7,
    "Hamburguesas de Lentejas": 3,
    "Perro Clasico": 3,
    "Perro Especial": 5,
    "Salchiqueso": 4,
    "Pizza Personal": 1.5,
    "Pizza Mediana": 5,
    "Pizza Familiar": 8
};

// Crear un objeto para llevar el conteo y el total de cada producto
let factura = {};

// Función para añadir productos a la factura
function añadirProducto(nombre) {
    if (!factura[nombre]) {
        // Si el producto no está en la factura, añadirlo
        factura[nombre] = { precio: productos[nombre], cantidad: 1, subtotal: productos[nombre] };
    } else {
        // Si ya existe, aumentar la cantidad y actualizar el subtotal
        factura[nombre].cantidad += 1;
        factura[nombre].subtotal = factura[nombre].precio * factura[nombre].cantidad;
    }

    // Actualizar la factura en el HTML
    actualizarFactura();
}

// Función para actualizar la visualización de la factura
function actualizarFactura() {
    const facturaBody = document.getElementById("factura-body");
    facturaBody.innerHTML = ""; // Limpiar la factura

    let total = 0;

    // Recorrer los productos en la factura y crear filas para cada uno
    for (const nombre in factura) {
        const { precio, cantidad, subtotal } = factura[nombre];
        total += subtotal;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>$${precio}</td>
            <td>${cantidad}</td>
            <td>$${subtotal}</td>
        `;
        facturaBody.appendChild(fila);
    }

    // Actualizar el total en el HTML
    document.getElementById("total").innerText = `Total: $${total}`;
}

// Añadir eventos a los botones "Añadir" de cada producto
document.querySelectorAll(".btn-warning").forEach((boton, index) => {
    const nombresProductos = Object.keys(productos);
    boton.addEventListener("click", () => añadirProducto(nombresProductos[index]));
});