function obtenerRecomendacion(p) {
  if (p === "relajarse") 
    return "Manzanilla, perfecta para relajarse gracias a sus propiedades de apigeina que se une a receptores GABA, con efectos ansiolíticos y propiedades sedantes. Consúmela en forma de té, infusión o suplemento.";
  if (p === "respiratorias") 
    return "Malvilla, es expectorante que ayuda a eliminar el moco y secreciones respiratorias, antiinflamatoria, emoliente ya que hidrata y suaviza la piel y cicatrizante. Úsala en forma de té, infusión, crema o pomada.";
  if (p === "digestión") 
    return "Sábila, es antiinflamatoria, cicatrizante, hidratante y antimicrobiana. Además, la puedes aplicar en gel o crema, pero antes consulta con un profesional de la salud.";
  if (p === "piel") 
    return "Tepezcohuite, estimula la producción de colágeno, acelera la curación, reduce las cicatrices y mejora la elasticidad. Aplícala como crema o pomada.";
  if (p === "menopausia") 
    return "Pasiflora, calma la ansiedad, estrés, reduce el dolor por sus propiedades analgésicas y antiinflamatorias; la puedes consumir como té, cápsulas o tinturas.";
  return "Consulta con un experto.";
}
document.getElementById('encuestaForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const formData = new FormData(this);
  const problema = formData.get('problema');

  const recomendacion = obtenerRecomendacion(problema);

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Recomendación Personalizada", 14, 20);
  
  doc.setFontSize(14);
  doc.text(`Problema seleccionado:`, 14, 35);
  doc.setFontSize(12);
  doc.text(problema.charAt(0).toUpperCase() + problema.slice(1), 14, 43);
  
  doc.setFontSize(14);
  doc.text("Recomendación:", 14, 60);
  doc.setFontSize(12);
  doc.text(recomendacion, 14, 68, { maxWidth: 180 });

  doc.save('recomendacion.pdf');
});
