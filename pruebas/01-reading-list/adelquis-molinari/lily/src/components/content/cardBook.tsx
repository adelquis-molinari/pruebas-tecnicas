import { PropsBook } from "../../../type";
import { useFavoriteBook } from "../../hooks/useFavoriteBook";

export function CardBook(props: PropsBook) {
  const { addfavoriteBook, removefavoriteBook } = useFavoriteBook();

  const { cover, title, isFavorite, ISBN } = props;

  const toggleFavorite = () => {
    if (isFavorite) {
      removefavoriteBook(ISBN);
      return;
    }
    addfavoriteBook(ISBN);
  };

  return (
    <div className="block rounded-lg w-64">
      <img
        className=" w-64 h-80 object-cover object-top shadow transition duration-150 ease-in-out"
        src={cover}
        alt={title}
      />
      <div className="p-6">
        <h5 className=" mb-2 text-xl font-medium leading-tight text-neutral-800">
          {title}
        </h5>
        <button
          type="button"
          className={`inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] ${
            isFavorite ? "bg-orange-300" : "bg-primary"
          }  `}
          onClick={toggleFavorite}
        >
          {isFavorite ? "remove Favorite" : "add Favorite"}
        </button>
      </div>
    </div>
  );
}
