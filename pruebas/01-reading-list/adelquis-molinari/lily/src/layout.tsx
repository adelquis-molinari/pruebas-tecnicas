import { HeaderApp } from "./components/header";
import { SideBar } from "./components/sideBar";
interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  return (
    <>
      <HeaderApp />
      <div className="flex">
        <SideBar />
        <main>{props.children}</main>
      </div>
    </>
  );
}
