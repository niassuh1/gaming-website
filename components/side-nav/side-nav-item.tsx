import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { IconType } from "react-icons";

interface SideNavItemProps {
  icon: IconType;
  href: string;
}

export const SideNavItem: FC<PropsWithChildren<SideNavItemProps>> = ({
  icon: Icon,
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <a className="relative p-4 hover:bg-white/[8%] rounded-full transition-colors ease-out group">
        <Icon size={24} />
        {children}
      </a>
    </Link>
  );
};
