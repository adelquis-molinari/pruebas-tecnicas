import { HeaderApp } from "./components/header";
import { SideBar } from "./components/sideBar";
interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  return (
    <>
      <HeaderApp />
      <SideBar />
      <main>{props.children}</main>
    </>
  );
}
