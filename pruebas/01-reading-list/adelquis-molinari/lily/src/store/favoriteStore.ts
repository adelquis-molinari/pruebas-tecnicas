import { create } from "zustand";

interface BookFavoriteStore {
  bookFavorite: string[]
}


export const useFavoriteStore = create((set)=>{
  bookFavorite: []
})