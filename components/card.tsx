import { FC, PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  className,
}) => {
  return <div className={`bg-black-300 ${className}`}>{children}</div>;
};
