// src/components/FavouriteButton.tsx
import { useStore } from '@nanostores/react';
import { favoritesStore, toggleFavorite } from '../stores/favorites';

interface FavouriteButtonProps {
  bookId: string;
}

export function FavouriteButton({ bookId }: FavouriteButtonProps) {
  const favorites = useStore(favoritesStore);
  const isFavorite = favorites.includes(bookId);

  return (
    <button
      type="button"
      className={`button ${isFavorite ? 'primary' : 'secondary'}`}
      onClick={() => toggleFavorite(bookId)}
      aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      title={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
    >
      {isFavorite ? '★ Favorito' : '☆ Marcar favorito'}
    </button>
  );
}