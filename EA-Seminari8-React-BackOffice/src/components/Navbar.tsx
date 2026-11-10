// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/">
        Backoffice
      </Link>

      <nav>
        <NavLink to="/authors">Autores</NavLink>
        <NavLink to="/books">Libros</NavLink>
        <NavLink to="/favorites">Favoritos</NavLink>
      </nav>
    </header>
  );
}
