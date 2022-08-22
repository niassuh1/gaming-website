import Image from "next/image";
import { FC } from "react";
import { numberFormat } from "../../util/number-format";
import { MdVerified } from "react-icons/md";

interface StreamerItemProps {
  src: any;
  name?: string;
  followers?: number;
  verified?: boolean;
}

export const StreamerItem: FC<StreamerItemProps> = ({
  src,
  name,
  followers = 0,
  verified,
}) => {
  return (
    <li className="py-3 flex items-center gap-3">
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <Image width={48} height={48} alt="Top Streamer" src={src} />
      </div>

      <div>
        <h1 className="text-xl flex items-center gap-1">
          <span>{name}</span>
          {verified && <MdVerified className="text-primary-500" size={16} />}
        </h1>
        <h2 className="text-sm text-white/40">
          {numberFormat(followers)} Followers
        </h2>
      </div>
    </li>
  );
};
