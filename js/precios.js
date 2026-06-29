const URL =
  "https://script.google.com/macros/s/AKfycbyRTQ8fvl76sBY0LX5tYKmJuwFPnD-7pvMt1kjP4P73r-_7q-paS3hwevbpw02ntseY/exec";

async function cargarPrecios() {
    try {
        const respuesta = await fetch(URL);
        const precios = await respuesta.json();

        for (const id in precios) {
            const elemento = document.getElementById(id);

            if (elemento) {

                const precio = precios[id];

                if (typeof precio === "number") {
                    elemento.textContent =
                        "$" + precio.toLocaleString("es-AR");
                } else {
                    elemento.textContent = precio;
                }
            }
        }

        console.log("✅ Precios actualizados");
    }
    catch(error){
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", cargarPrecios);
