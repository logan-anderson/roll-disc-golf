import { useState } from "react";
import { rollDice } from "../util";
import { OptionType } from "../util/interfaces";

export const DiscRoller: React.FC<{ options: OptionType[] }> = ({
  options,
}) => {
  const [display, setDisplay] = useState("No roll");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 className="text-3xl">Disc Dice</h1>
        <div className="my-3">{display}</div>
        <div>
          <button
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => {
              setDisplay(rollDice(options));
            }}
          >
            Roll
          </button>
        </div>
      </div>
    </div>
  );
};
