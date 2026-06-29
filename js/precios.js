// precios.js - Tagliabene / Cuervo Blanco
const SHEET_ID = '1tBJkxy2J3OpNGRUL6lrIerv4tqwoqVNecQFsbkmugfQ'; 
const SHEET_URL = `https://google.com{SHEET_ID}/export?format=csv`;

async function traerPreciosVivos() {
  try {
    const res = await fetch(SHEET_URL);
    const csv = await res.text();
    
    csv.split('\n').forEach(fila => {
      const columnas = fila.split(',');
      const idHTML = columnas[0]?.trim();  // Columna A (ID)
      const precioX = columnas[1]?.trim(); // Columna B (Precio)
      
      // Filtro para ignorar la fila de títulos y evitar celdas vacías
      if (idHTML && idHTML !== "ID" && precioX) {
        const elemento = document.getElementById(idHTML);
        if (elemento) {
          elemento.innerText = precioX;
        }
      }
    });
  } catch (err) {
    console.error("Error al cargar la carta desde la nube:", err);
  }
}

// Se ejecuta en segundo plano cuando la página ya cargó
window.addEventListener('load', traerPreciosVivos);
