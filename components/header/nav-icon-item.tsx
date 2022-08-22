import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { Tooltip } from "../tooltip";

interface NavIconItemProps {
  href: string;
}

export const NavIconItem: FC<PropsWithChildren<NavIconItemProps>> = ({
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <a className="relative group p-2 hover:bg-white/10 flex rounded-md">
        {children}
      </a>
    </Link>
  );
};
