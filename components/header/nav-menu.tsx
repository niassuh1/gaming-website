import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment, PropsWithChildren } from "react";
import { RiMenu3Fill } from "react-icons/ri";

export const NavMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Menu as="div" className="md:hidden flex items-center relative">
        <Menu.Button className="p-2 hover:bg-white/10 rounded-md">
          <RiMenu3Fill size={20} />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-in-out"
          enterFrom="opacity-0 duration-200"
          enterTo="opacity-100"
          leave="transition ease-in-out"
          leaveFrom="opacity-100 duration-200"
          leaveTo="opacity-0"
        >
          <Menu.Items className="bg-black rounded-md shadow-md shadow-[#000000]/40 absolute flex flex-col items-center gap-3 right-0 top-[calc(100%+2px)] w-fit p-2">
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="hidden md:flex items-center gap-3 ">{children}</div>
    </>
  );
};
