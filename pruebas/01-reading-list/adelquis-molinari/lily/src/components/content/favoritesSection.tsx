import { useFavoriteBook } from "../../hooks/useFavoriteBook";

export function FavoritesSection() {
  const { isFavorite, data, removefavoriteBook } = useFavoriteBook();
  const favoriteBooks = data.filter((book) => isFavorite.includes(book.ISBN));

  return (
    <div className=" top-20 right-8 bg-[#F0EEE2] w-1/3 h-3/4 fixed p-6">
      <ul>
        {favoriteBooks.map((book) => {
          const removeList = () => {
            removefavoriteBook(ISBN);
            return;
          };
          const { ISBN, cover, title } = book;
          return (
            <li className="flex gap-2 my-2 justify-between" key={ISBN}>
              <img className="w-14 h-20 object-cover" src={cover} alt={cover} />
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                onClick={removeList}
                type="button"
                className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-orange-300 h-10"
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
