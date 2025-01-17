import { useFavoriteBooksStore } from "../../store/store";
import { Star } from "../icons";

export function FavoriteStar({
  toggleFavoriteSideBar,
}: {
  toggleFavoriteSideBar: () => void;
}) {
  const star = useFavoriteBooksStore((store) => store.favoriteBooksIds);
  return (
    <button className="flex relative  " onClick={toggleFavoriteSideBar}>
      <Star width={24} height={24} />
      <span className="absolute left-4 bottom-2 font-bold text-lg text-red-400">
        {star.length}
      </span>
    </button>
  );
}
