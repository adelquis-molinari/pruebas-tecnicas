import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fechDataBooks } from "../service";
import { favoriteBooksState } from '../../type';



export const useFavoriteBooksStore = create(
  persist <favoriteBooksState> ((set) => ({
    storeBooks: fechDataBooks(),
    favoriteBooksIds: [],
    addFavoriteBook: (ISBN: string) =>
      set((state) => ({ favoriteBooksIds: [...state.favoriteBooksIds, ISBN] })),
    removeFavoriteBook: (ISBN: string) =>
      set((state) => ({
        favoriteBooksIds: state.favoriteBooksIds.filter(
          (ISBNID) => ISBNID !== ISBN
        ),
      })),
  }), {
    name: "favoriteBooks",
  })
);