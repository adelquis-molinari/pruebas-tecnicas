import { useState, useMemo } from "react";
import { useFavoriteBook } from "../../hooks/useFavoriteBook";

export function GenreFilter() {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const memoizedSelectedGenre = useMemo(() => selectedGenre, [selectedGenre]);

  const { data } = useFavoriteBook();
  const genres = useMemo(() => [...new Set(data.map((g) => g.genre))], [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedGenre) {
      alert("Selecciona un género antes de filtar");
    }
    console.log(selectedGenre);
  };

  return (
    <fieldset>
      <legend className="font-medium mb-2">Genero</legend>
      <form onSubmit={handleSubmit}>
        {genres.map((genre) => (
          <div key={genre} className="flex items-center mb-4">
            <input
              id={genre}
              type="radio"
              value={genre}
              name="genre"
              checked={selectedGenre === genre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800"
            />
            <label
              htmlFor={genre}
              className="ml-2 text-sm font-medium text-gray-500"
            >
              {genre}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow transition duration-150 ease-in-out  focus:outline-none focus:ring-0 active:bg-primary-700 bg-orange-100 hover:bg-orange-300 h-10"
        >
          Filtar
        </button>
      </form>
    </fieldset>
  );
}
