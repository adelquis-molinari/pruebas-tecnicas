import { Star } from "../icons";
export function FavoriteStar() {
  return (
    <div className="flex relative">
      <Star width={24} height={24} />
      <span className="absolute left-4 bottom-2 font-bold text-lg text-red-400"></span>
    </div>
  );
}
