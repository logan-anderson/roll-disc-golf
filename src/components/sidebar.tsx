import { useState } from "react";
import { DiscRollChooser } from "./DiscRollEditor/DiscRollChooser";
import type { Option } from "../util/interfaces";

const throwOptions: Option[] = [
  {
    label: "Wild",
    prob: 0.12,
  },
  {
    label: "Backhand",
    prob: 0.11,
  },
  {
    label: "Forehand",
    prob: 0.11,
  },
  {
    label: "Roller",
    prob: 0.11,
  },
  {
    label: "Overhand",
    prob: 0.11,
  },
  {
    label: "Wild",
    prob: 0.11,
  },
  {
    label: "Over Stable",
    prob: 0.11,
  },
  {
    label: "Under Stable",
    prob: 0.11,
  },
  {
    label: "Neutral",
    prob: 0.11,
  },
];

const discOptions: Option[] = [
  {
    label: "Putter",
    prob: 0.2,
  },
  {
    label: "Midrange",
    prob: 0.2,
  },
  {
    label: "Fairway Diver",
    prob: 0.2,
  },
  {
    label: "Distance Diver",
    prob: 0.2,
  },
  {
    label: "Wild",
    prob: 0.2,
  },
];

export const Sidebar: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex overflow-x-hidden h-screen">
      <aside
        className={`bg-teal-700 flex-shrink-0 w-full flex flex-col transition-all duration-500 overflow-x-hidden  absolute float-left top-0 left-0 bottom-0 ${
          !open && "w-0"
        }`}
      >
        <nav className={`w-full flex-1 flex flex-col ${!open && "hidden"}`}>
          <div className="h-16"></div>
          <div>
            <DiscRollChooser
              optionTypes={[
                { options: throwOptions, label: "Throw Type" },
                { options: discOptions, label: "Disc Type" },
              ]}
            />
          </div>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex items-center p-4 text-semibold text-gray-100 bg-slate-700">
          <button
            className="p-1 mr-4 z-50"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              className={`h-6 w-6 fill-white transition-all duration-300 ${
                open ? "" : "hidden"
              }`}
            >
              <title>remove-delete-glyph</title>
              <polygon points="512 86.78 425.22 0 256 169.22 86.78 0 0 86.78 169.22 256 0 425.22 86.78 512 256 342.78 425.22 511.99 512 425.22 342.78 256 512 86.78" />
            </svg>
          </button>
          Disc Roller
        </header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};
