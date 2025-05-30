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
  if (p.includes("relajarse")) return "Manzanilla, perfecta para relajarse gracias a sus propiedades de apigeina que se une a receptores GABA, con efectos ansiolíticos y propiedades sedantes. Consumela en forma de té, infusión o suplemento.";
  if (p.includes("respiratorias")) return "Malvilla, es expectorante que ayuda a eliminar el moco y secreciones respiratorias, antiinflamatoria, emoliente ya que hidrata y suaviza la piel y cicatrizante. Usala en forma de té, infusión, crema o pomada.";
  if (p.includes("digestión")) return "Sábila, es antiinflamatoria, cicatrizante, hidratante y antimicrobiana. Además que la puedes aplucar en gel o crema pero antes consultar con un profesional de la salud.";
  if (p.includes("piel")) return "Tepezcohuite, estimula la producción de colageno, acelera la curación, reduce las cicatrices y mejora la elasticidad. Aplicala como crema o pomada.";
  if (p.includes("menopausia")) return "Pasiflora, calma la ansiedad, estrés, reduce el dolor por sus propiedades analgésicas y a antiinflamatorias; la puedes consumir como té, capsulas o tinturas.";
  return "Consulta con un experto.";
}
