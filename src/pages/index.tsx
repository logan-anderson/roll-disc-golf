import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { rollDice } from "../util";
import { Option } from "../util/interfaces";

export default function Home() {
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
        <h1>Disc Dice</h1>
        <div>{display}</div>
        <div>
          <button
            onClick={() => {
              setDisplay(
                rollDice([
                  { options: throwOptions, label: "Throw Type" },
                  { options: discOptions, label: "Disc Type" },
                ])
              );
            }}
          >
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}
