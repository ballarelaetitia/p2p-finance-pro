function calculateLoan() {
  const amount = parseFloat(document.getElementById('loanAmount').value);
  const years = parseFloat(document.getElementById('loanYears').value);
  const rate = parseFloat(document.getElementById('loanRate').value);
  const monthlyRate = rate / 100 / 12;
  const n = years * 12;
  const monthly = monthlyRate === 0 ? amount / n : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  const total = monthly * n;
  document.getElementById('loanResult').innerHTML = `<p>Mensualité estimée : <strong>€ ${monthly.toFixed(2)}</strong></p><p>Total remboursé : <strong>€ ${total.toFixed(2)}</strong></p>`;
}