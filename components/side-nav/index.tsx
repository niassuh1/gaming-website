import { FC } from "react";
import { SideNavItem } from "./side-nav-item";
import { RiHome5Line, RiGroup2Line } from "react-icons/ri";
import { TbVideo } from "react-icons/tb";
import { Logo } from "../logo";
import { Tooltip } from "../tooltip";

export const SideNav: FC = () => {
  return (
    <nav className="flex flex-col h-screen w-20 fixed left-0 z-[100] items-center p-3 py-4 gap-4 shadow-lg shadow-black-dark/50 bg-black">
      <Logo className="w-10 h-10 text-primary-500" />
      <h1 className="text-xs font-bold uppercase tracking-widest">Gamify</h1>
      <SideNavItem icon={RiHome5Line} href="/">
        <Tooltip arrowDirection="left" origin="left">
          Home
        </Tooltip>
      </SideNavItem>
      <SideNavItem icon={TbVideo} href="/streams">
        <Tooltip arrowDirection="left" origin="left">
          Streams
        </Tooltip>
      </SideNavItem>
      <SideNavItem icon={RiGroup2Line} href="/">
        <Tooltip arrowDirection="left" origin="left">
          Subscriptions
        </Tooltip>
      </SideNavItem>
    </nav>
  );
};
