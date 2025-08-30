document.querySelectorAll('[data-action="go-back"]').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = '../portfolio.html'; // Caminho relativo para o index do portfólio
  });
});
