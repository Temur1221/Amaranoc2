import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: [], 
      toggleFavorite: (id) => set((state) => {
        const isFavorite = state.favorites.includes(id);
        return {
          favorites: isFavorite
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id]
        };
      }),
    }),
    {
      name: 'houses-favorites-storage',
    }
  )
);