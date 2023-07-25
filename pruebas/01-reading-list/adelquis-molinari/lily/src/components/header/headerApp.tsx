import { FavoriteStar } from "./favoriteStar";
export function HeaderApp() {
  return (
    <header className=" fixed flex w-full h-16 items-center justify-around border-b-2 border-[#F0EEE2]  bg-[#FAF8EC] bg-opacity-75 ">
      <div></div>
      <h1 className="text-2xl font-semibold">Lily Books App </h1>
      <FavoriteStar />
    </header>
  );
}
