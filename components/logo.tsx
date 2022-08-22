import { FC, SVGProps } from "react";

export const Logo: FC<SVGProps<SVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 134.24 190.68"
    >
      <g fill="currentColor" id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M57,0h0a0,0,0,0,1,0,0V155.87a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V57A57,57,0,0,1,57,0Z" />
          <path d="M77.27,34.81h0a57,57,0,0,1,57,57v41.93a57,57,0,0,1-57,57h0a0,0,0,0,1,0,0V34.81A0,0,0,0,1,77.27,34.81Z" />
        </g>
      </g>
    </svg>
  );
};
