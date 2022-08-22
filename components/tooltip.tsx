import { FC, PropsWithChildren } from "react";

type ArrowDirection = "up" | "down" | "left" | "right";
type OriginDirection = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  arrowDirection?: ArrowDirection;
  origin?: OriginDirection;
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  arrowDirection = "up",
  origin = "top",
}) => {
  const transitionOrigin: { [key in OriginDirection]: string } = {
    top: "origin-top",
    bottom: "origin-top",
    left: "origin-left",
    right: "origin-right",
  };

  const position: { [key in ArrowDirection]: string } = {
    up: "left-[calc(50%-8px)] -translate-x-1/2 ml-2 top-[calc(100%+10px)]",
    down: "bottom",
    left: "top-0 bottom-0 my-auto ml-2 left-[calc(100%)]",
    right: "top-0 bottom-0 my-auto ml-2 right-[calc(100%+10px)]",
  };
  return (
    <span
      className={`absolute h-fit text-sm font-bold select-none
          text-black bg-white p-1 rounded-md w-fit 
            ${position[arrowDirection]} items-center 
            transition-transform ease-in-out scale-0 group-hover:scale-100 ${transitionOrigin[origin]}
            z-[10000]
            `}
    >
      {arrowDirection == "up" && (
        <div className="bg-white absolute w-3.5 h-3.5 -top-1 left-0 right-0 mx-auto rounded-sm -rotate-45 -z-10" />
      )}
      {arrowDirection == "down" && (
        <div className="bg-white absolute w-3.5 h-3.5 -bottom-1 left-0 right-0 mx-auto rounded-sm -rotate-45 -z-10" />
      )}
      {arrowDirection == "left" && (
        <div className="bg-white absolute w-2 h-2 top-0 bottom-0 -left-1 my-auto rounded-sm -rotate-45 -z-10" />
      )}
      {children}
    </span>
  );
};
