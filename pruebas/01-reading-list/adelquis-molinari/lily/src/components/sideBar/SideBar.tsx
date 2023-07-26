import { GenreFilter } from "./genreFilter";

export function SideBar() {
  return (
    <div className=" w-64 h-screen  bg-[#F0EEE2] flex flex-col gap-3 p-3 mt-16 fixed">
      <GenreFilter />
    </div>
  );
}
