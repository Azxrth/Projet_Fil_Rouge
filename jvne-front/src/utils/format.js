// Laravel renvoie "2026-11-15 22:00:00" : Safari ne sait pas lire ce format (espace au milieu),
// on le convertit en ISO "2026-11-15T22:00:00" que tous les navigateurs comprennent.
export function formatDate(value) {
  const date = new Date(value.replace(' ', 'T'));
  return date.toLocaleString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// "15.00" (chaîne renvoyée par MySQL) → "15,00 €"
export function formatPrice(value) {
  return Number(value).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}
