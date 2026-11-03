import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatPrice } from '../utils/format';

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events')
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch(() => setError('Erreur de chargement des événements'));
  }, []);

  return (
    <div>
      <h1>Catalogue</h1>

      {error && <p className="message-error">{error}</p>}

      <div className="event-grid">
        {events.map((event) => (
          <article key={event.id} className="event-card">
            <div className="event-visual">{event.genre}</div>

            <div className="event-card-header">
              <h2 className="event-card-title">{event.title}</h2>
              <span className="badge">{event.genre}</span>
            </div>

            <p className="event-card-meta">
              {formatDate(event.date_start)}
              <br />
              {event.location}
            </p>

            <div className="event-card-footer">
              <span className="event-card-price">{formatPrice(event.price)}</span>
              <Link to={`/events/${event.id}`} className="btn">Voir</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Events;
