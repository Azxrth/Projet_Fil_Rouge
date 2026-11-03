import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatDate, formatPrice } from '../utils/format';

function EventDetail() {
  const { id } = useParams();
  // On mémorise pour quel id le résultat a été chargé
  const [result, setResult] = useState({ id: null, event: null, error: null });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/events/${id}`)
      .then((res) => {
        if (res.status === 404) {
          throw new Error("Cet événement n'existe pas");
        }
        if (!res.ok) {
          throw new Error("Erreur de chargement de l'événement");
        }
        return res.json();
      })
      .then((data) => setResult({ id, event: data, error: null }))
      .catch((err) => setResult({ id, event: null, error: err.message }));
  }, [id]);

  // Valeurs dérivées : tant que le résultat ne correspond pas à l'id de l'URL, on charge
  const loading = result.id !== id;
  const { event, error } = result;

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="message-error">{error}</p>
        <Link to="/" className="back-link">← Retour au catalogue</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" className="back-link">← Retour au catalogue</Link>

      <div className="event-visual event-hero">{event.genre}</div>

      <div className="event-detail">
        <section>
          <div className="event-detail-header">
            <h1 className="event-detail-title">{event.title}</h1>
            <span className="badge">{event.genre}</span>
          </div>

          <ul className="event-infos">
            <li><strong>Date :</strong> {formatDate(event.date_start)}</li>
            <li><strong>Lieu :</strong> {event.location}</li>
            <li>
              <strong>Places :</strong>{' '}
              {event.stock > 0 ? `${event.stock} disponibles` : 'Complet'}
            </li>
          </ul>

          {event.description && (
            <>
              <h2>Description</h2>
              <p>{event.description}</p>
            </>
          )}
        </section>

        <aside className="purchase-box">
          <p className="purchase-label">À partir de</p>
          <p className="purchase-price">{formatPrice(event.price)}</p>
          {/* Le tunnel d'achat Stripe arrivera dans un prochain sprint */}
          <button className="btn" disabled>Acheter un billet</button>
          <p className="purchase-note">Achat bientôt disponible</p>
        </aside>
      </div>
    </div>
  );
}

export default EventDetail;
