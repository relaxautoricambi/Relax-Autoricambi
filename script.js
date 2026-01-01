document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const targa = document.querySelector('input[name="Targa"]').value;
  const ricambio = document.querySelector('select[name="Tipo ricambio"]').value;
  const descrizione = document.querySelector('textarea[name="Descrizione"]').value;
  const email = document.querySelector('input[type="email"]').value;

  const messaggio = `Richiesta ricambio - Relax Autoricambi%0A
Targa: ${targa}%0A
Ricambio: ${ricambio}%0A
Descrizione: ${descrizione}%0A
Email cliente: ${email}`;

  const numero = "393784170210"; // Tuo numero WhatsApp reale

  window.open(`https://wa.me/${numero}?text=${messaggio}`, "_blank");
});
