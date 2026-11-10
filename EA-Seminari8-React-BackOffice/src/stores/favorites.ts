// src/stores/favorites.ts
import { atom } from 'nanostores';

const STORAGE_KEY = 'favorite-books';

// Recuperar favoritos iniciales de localStorage si existen
function getInitialFavorites(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export const favoritesStore = atom<string[]>(getInitialFavorites());

// Cada vez que cambie el store, lo guardamos en localStorage
favoritesStore.listen((favorites) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch {
    // Si falla localStorage no interrumpimos la app
  }
});

// Funciones auxiliares para modificar el store de forma limpia
export function toggleFavorite(bookId: string) {
  const current = favoritesStore.get();
  if (current.includes(bookId)) {
    favoritesStore.set(current.filter((id) => id !== bookId));
  } else {
    favoritesStore.set([...current, bookId]);
  }
}