import { Menu } from "@headlessui/react";
import Link from "next/link";
import { FC } from "react";
import {
  RiMore2Fill,
  RiSearchLine,
  RiStackLine,
  RiUser3Line,
} from "react-icons/ri";
import { Button } from "../button";
import { Tooltip } from "../tooltip";
import { Nav } from "./nav";
import { NavIconItem } from "./nav-icon-item";
import { NavMenu } from "./nav-menu";

export const Header: FC = () => {
  return (
    <>
      <header className="flex fixed left-20 w-[calc(100%-5rem)] items-center p-3 h-fit gap-4 bg-black-300 shadow-md shadow-black-dark/40 z-[100]">
        <Nav isOpen={false}>
          <NavIconItem href="/">
            <RiStackLine size={20} />
            <Tooltip>Browse</Tooltip>
          </NavIconItem>

          <NavIconItem href="/">
            <RiMore2Fill size={20} />
            <Tooltip>More</Tooltip>
          </NavIconItem>

          <div className="flex-1 flex" />

          <NavIconItem href="/">
            <RiSearchLine size={20} />
            <Tooltip>Search</Tooltip>
          </NavIconItem>
        </Nav>

        <NavMenu>
          <Link href="/">
            <a className="button-primary bg-white/10 hover:bg-white/20 w-32 md:w-fit text-sm">
              Login
            </a>
          </Link>
          <Link href="/">
            <a className="button-primary bg-primary-600 text-black-dark hover:bg-primary-700 w-32 md:w-fit text-sm">
              Sign Up
            </a>
          </Link>
        </NavMenu>
      </header>
      <div className="h-[60px]" />
    </>
  );
};
