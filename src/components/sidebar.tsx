import { useState } from "react";
import { DiscRollChooser } from "./DiscRollEditor/DiscRollChooser";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export const Sidebar: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <aside
        className={`bg-teal-700 flex-shrink-0 w-full flex flex-col transition-all duration-500 overflow-x-hidden  absolute float-left top-0 left-0 bottom-0 ${
          !open && "w-0"
        }`}
      >
        <nav className={`w-full flex-1 flex flex-col ${!open && "hidden"}`}>
          <div className="h-16"></div>
          <div>
            <DiscRollChooser />
          </div>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex items-center p-4 text-semibold text-gray-100 bg-slate-700 sticky top-0">
          <button
            className="p-1 mr-4 z-50"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="sticky">
              <MenuIcon
                className={`h-6 w-6 fill-white transition-all duration-500  ${
                  !open ? "" : "hidden"
                }`}
              />
              <XIcon
                className={`h-6 w-6 fill-white transition-all duration-500  ${
                  open ? "" : "hidden"
                }`}
              />
            </div>
          </button>
          Disc Roller
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};
