import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Chargement...');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/ping')
      .then((res) => res.json())
      .then((data) => setMessage(data.status))
      .catch(() => setMessage('Erreur de connexion au back'));
  }, []);

  return (
    <div>
      <h1>JVNE</h1>
      <p>Statut de l'API : {message}</p>
    </div>
  );
}

export default App;