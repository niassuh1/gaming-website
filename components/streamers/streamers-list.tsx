import { FC, PropsWithChildren } from "react";

export const StreamersList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className="flex flex-col divide-y divide-white/20">{children}</ul>;
};
