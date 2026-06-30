const URL =
  "https://script.google.com/macros/s/AKfycbyRTQ8fvl76sBY0LX5tYKmJuwFPnD-7pvMt1kjP4P73r-_7q-paS3hwevbpw02ntseY/exec";

async function cargarPrecios() {
    try {
        const cache = localStorage.getItem("precios");
        if (cache) {
            aplicarPrecios(JSON.parse(cache));
        }

        const respuesta = await fetch(URL);
        const precios = await respuesta.json();
        localStorage.setItem("precios", JSON.stringify(precios));
        aplicarPrecios(precios);

        console.log("✅ Precios actualizados");
    } catch(error) {
        console.error("❌ Error al cargar precios:", error);
    }
}

function aplicarPrecios(precios) {
    for (const id in precios) {
        const idLimpio = id.trim();
        const elemento = document.getElementById(idLimpio);
        if (elemento) {
            const precio = precios[id];
            elemento.textContent = typeof precio === "number"
                ? "$" + precio.toLocaleString("es-AR")
                : precio;
            elemento.classList.add("cargado");
        }
    }
}

cargarPrecios();
