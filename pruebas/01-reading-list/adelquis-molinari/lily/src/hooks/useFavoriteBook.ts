import { useFavoriteBooksStore } from "../store/store";

export function useFavoriteBook() {

  const addfavoriteBook = useFavoriteBooksStore(
    (store) => store.addFavoriteBook
  );
  const removefavoriteBook = useFavoriteBooksStore(
    (store) => store.removeFavoriteBook
  );
  
  const data = useFavoriteBooksStore((state) => state.storeBooks);
  const isFavorite = useFavoriteBooksStore((state) => state.favoriteBooksIds);

  return {
    addfavoriteBook,
    removefavoriteBook,
    data,
    isFavorite
  };
}