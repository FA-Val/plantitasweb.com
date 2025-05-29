document.getElementById("encuestaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const f = e.target;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const datos = {
    conocimiento: f.conocimiento.value,
    aprendizaje: f.aprendizaje.value,
    favorita: f.favorita.value,
    frecuencia: f.frecuencia.value,
    preparacion: f.preparacion.value,
    confianza: f.confianza.value,
    interes: Array.from(f.querySelectorAll('input[name="interes"]:checked')).map(el => el.value),
    problema: f.problema.value
  };

  const planta = obtenerRecomendacion(datos.problema);

  doc.setFontSize(14);
  doc.text("Resultados de la Encuesta de Plantas Medicinales", 10, 10);
  let y = 20;
  for (let [clave, valor] of Object.entries(datos)) {
    if (Array.isArray(valor)) valor = valor.join(", ");
    doc.text(`${clave}: ${valor}`, 10, y);
    y += 10;
  }

  y += 10;
  doc.setFontSize(12);
  doc.text("🌿 Recomendación personalizada:", 10, y);
  y += 10;
  doc.text(`Planta sugerida: ${planta}`, 10, y);

  doc.save("respuestas_encuesta.pdf");
});

function obtenerRecomendacion(p) {
  if (p.includes("relajarse")) return "Pasiflora";
  if (p.includes("respiratorias")) return "Malvilla";
  if (p.includes("digestión")) return "Manzanilla";
  if (p.includes("heridas")) return "Sábila";
  if (p.includes("piel")) return "Tepezcohuite";
  if (p.includes("menopausia")) return "Pasiflora";
  return "Consulta con un experto.";
}
