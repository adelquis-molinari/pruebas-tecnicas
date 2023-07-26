import { PropsBook } from "../../../type";
import { useFavoriteBook } from "../../hooks/useFavoriteBook";

export function FavoritesSection(props: PropsBook) {
  const { removefavoriteBook } = useFavoriteBook();

  const removeList = () => {
    removefavoriteBook(ISBN);
    return;
  };
  const { ISBN, cover, title } = props;

  return (
    <li className="flex gap-2 my-2 justify-between" key={ISBN}>
      <img className="w-14 h-20 object-cover" src={cover} alt={cover} />
      <h3 className="text-lg font-semibold">{title}</h3>
      <button onClick={removeList} type="button" className="bg-orange-300 h-10">
        remove Favorite
      </button>
    </li>
  );
}
