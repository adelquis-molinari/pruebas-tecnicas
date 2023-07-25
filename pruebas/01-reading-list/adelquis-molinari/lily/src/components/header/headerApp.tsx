import { FavoriteStar } from "./favoriteStar";
export function HeaderApp() {
  return (
    <header className=" fixed flex w-full h-16 items-center justify-around border-b-2 border-amber-500  bg-amber-100 bg-opacity-75 ">
      <div></div>
      <h1 className="text-2xl font-semibold">Lily Books App </h1>
      <FavoriteStar />
    </header>
  );
}
