function realizarTransformacoes() {
  // Oculta a div convite suavemente
  document.getElementById('convite').style.opacity = '0';
  // Define um pequeno atraso antes de exibir a div da carta para garantir que a transição ocorra
  setTimeout(function() {
    // Exibe a div da carta suavemente
    document.getElementById('letter').style.opacity = '1';
  }, 500); // Tempo da transição em milissegundos (0.5 segundos)
}