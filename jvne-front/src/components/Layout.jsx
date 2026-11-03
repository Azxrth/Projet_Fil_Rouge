import { Link, NavLink, Outlet, useMatch } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Layout() {
  const { user, isAuthenticated, logout } = useAuth();
  // Sur la fiche événement, la barre d'achat prend le bas de l'écran mobile : pas d'onglets
  const isEventPage = useMatch('/events/:id');

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-brand">JVNE</Link>

          {/* Liens du haut : visibles uniquement sur tablette / desktop */}
          <div className="nav-links">
            <NavLink to="/" end className="nav-link">Catalogue</NavLink>

            {isAuthenticated ? (
              <>
                {/* Zone réservée : deviendra un lien avec le tunnel d'achat */}
                <span className="nav-disabled">Mes billets</span>
                <span className="nav-user">Bonjour {user?.name}</span>
                <button className="nav-logout" onClick={logout}>Déconnexion</button>
              </>
            ) : (
              <NavLink to="/login" className="nav-link">Connexion</NavLink>
            )}
          </div>
        </nav>
      </header>

      <main className={isEventPage ? 'main' : 'main main-with-tabbar'}>
        <Outlet />
      </main>

      {/* Barre d'onglets en bas : visible uniquement sur mobile (wireframe mobile) */}
      {!isEventPage && (
        <nav className="tabbar">
          <NavLink to="/" end className="tabbar-item">Catalogue</NavLink>
          <span className="tabbar-item tabbar-disabled">Mes billets</span>
          {isAuthenticated ? (
            <button className="tabbar-item" onClick={logout}>Déconnexion</button>
          ) : (
            <NavLink to="/login" className="tabbar-item">Connexion</NavLink>
          )}
        </nav>
      )}
    </div>
  );
}

export default Layout;
