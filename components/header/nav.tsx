import { FC, PropsWithChildren } from "react";

interface NavProps {
  isOpen?: boolean;
}

export const Nav: FC<PropsWithChildren<NavProps>> = ({
  children,
  isOpen = false,
}) => {
  return <nav className="flex items-center gap-3 flex-auto">{children}</nav>;
};
