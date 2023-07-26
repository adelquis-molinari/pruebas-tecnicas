import { HeaderApp } from "./components/header/headerApp";
import { SideBar } from "./components/sideBar/SideBar";
import { FavoritesSection } from "./components/content/favoritesSection";
import { Props } from "../type";
import { useState } from "react";

export function Layout(props: Props) {
  const [favoriteSideBar, setFavoriteSideBar] = useState<boolean>(false);

  const toggleFavoriteSideBar = () => setFavoriteSideBar(!favoriteSideBar);

  return (
    <>
      <HeaderApp toggleFavoriteSideBar={toggleFavoriteSideBar} />
      <SideBar />
      <main>{props.children}</main>
      {favoriteSideBar && <FavoritesSection />}
    </>
  );
}
