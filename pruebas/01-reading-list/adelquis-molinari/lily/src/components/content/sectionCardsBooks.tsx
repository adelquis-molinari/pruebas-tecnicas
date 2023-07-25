import { useFavoriteBooksStore } from "../../store/store";
import { CardBook } from "./cardBook";

export function SectionCardsBooks() {
  const data = useFavoriteBooksStore((state) => state.storeBooks);
  const isFavorite = useFavoriteBooksStore((state) => state.favoriteBooksIds);

  return (
    <main className="w-full grid grid-cols-5 gap-3 pl-80 pt-24 ">
      {data.map((b) => (
        <CardBook
          key={b.ISBN}
          cover={b.cover}
          title={b.title}
          ISBN={b.ISBN}
          isFavorite={isFavorite.includes(b.ISBN)}
        />
      ))}
    </main>
  );
}
