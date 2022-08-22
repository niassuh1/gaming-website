import {
  ButtonHTMLAttributes,
  ElementType,
  FC,
  PropsWithChildren,
} from "react";

type ButtonStyle = "style1" | "style2";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonStyle;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
  buttonStyle = "style1",
  className = "",
}) => {
  const style: { [key in ButtonStyle]: string } = {
    style1: "bg-primary-600 hover:bg-primary-700",
    style2: "bg-white/10 hover:bg-white/[15%]",
  };
  return (
    <button
      className={`${style[buttonStyle]} px-3 py-1.5 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
