import { useState } from 'react';
import { AuthContext } from './AuthContext';

function readStoredUser() {
  const stored = localStorage.getItem('user');
  if (!stored) {
    return null;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

function AuthProvider({ children }) {
  // On lit le localStorage une seule fois, au premier rendu
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(readStoredUser);

  const login = (newToken, newUser) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const logout = async () => {
    try {
      // Révoque le token côté serveur (Sanctum le supprime de la table personal_access_tokens)
      await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    } finally {
      // Même si l'API ne répond pas, on déconnecte côté front
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
