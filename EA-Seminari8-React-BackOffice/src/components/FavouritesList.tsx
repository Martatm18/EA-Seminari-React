// src/components/FavouritesList.tsx
import { useStore } from '@nanostores/react';
import { Link } from 'react-router-dom';
import { favoritesStore } from '../stores/favorites';
import { useApiList } from '../hooks/useApiList';
import { bookService } from '../services/book.service';
import { FavouriteButton } from './FavouriteButton';
import { formatPrice, languageName, truncate } from '../utils/format';
import type { Book } from '../models';

function authorNames(book: Book) {
  return book.authors.length > 0 ? book.authors.map((author) => author.name).join(', ') : null;
}

export function FavouritesList() {
  const favorites = useStore(favoritesStore);
  const { items: books, loading, error } = useApiList(bookService.getBooks);

  // Filtramos solo los libros cuyos IDs están en el store de favoritos
  const favoriteBooks = books.filter((book) => favorites.includes(book._id));

  return (
    <>
      <div className="page-header">
        <h1>Libros Favoritos</h1>
        <Link className="button secondary" to="/books">
          Ver todos los libros
        </Link>
      </div>

      {error && <p className="alert">{error}</p>}
      {loading && <p className="muted">Cargando...</p>}

      {!loading && favoriteBooks.length === 0 && (
        <p className="muted">No tienes ningún libro marcado como favorito todavía.</p>
      )}

      {!loading && favoriteBooks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Título</th>
              <th>Autores</th>
              <th>Idioma</th>
              <th>Precio</th>
              <th>Favorito</th>
            </tr>
          </thead>
          <tbody>
            {favoriteBooks.map((book) => (
              <tr key={book._id}>
                <td>
                  <img
                    className="cover"
                    src={`https://picsum.photos/seed/${book._id}/60/80`}
                    alt={`Portada de ${book.title}`}
                  />
                </td>
                <td>{book.title}</td>
                <td>{authorNames(book) ?? <span className="muted">Sin autores</span>}</td>
                <td>{languageName(book.language)}</td>
                <td>{formatPrice(book.price)}</td>
                <td>
                  <FavouriteButton bookId={book._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}