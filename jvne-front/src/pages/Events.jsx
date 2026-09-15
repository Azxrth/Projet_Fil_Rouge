import { useState, useEffect } from 'react';

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(() => setError('Erreur de chargement des événements'));
  }, []);

  return (
    <div>
      <h1>Catalogue d'événements</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {events.map((event) => (
        <div key={event.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h2>{event.title}</h2>
          <p>Genre : {event.genre}</p>
          <p>Date : {event.date_start}</p>
          <p>Prix : {event.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default Events;