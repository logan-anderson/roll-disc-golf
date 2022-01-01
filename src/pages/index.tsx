import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { rollDice } from "../util";
import { Option } from "../util/interfaces";

export default function Home() {
  const throwOptions: Option[] = [
    {
      label: "Backhand",
      prob: 0.3,
    },
    {
      label: "Forehand",
      prob: 0.3,
    },
    {
      label: "Roller",
      prob: 0.2,
    },
    {
      label: "Overhand",
      prob: 0.2,
    },
  ];
  const stableOptions: Option[] = [
    {
      label: "Over Stable",
      prob: 0.33,
    },
    {
      label: "Under Stable",
      prob: 0.33,
    },
    {
      label: "Neutral",
      prob: 0.34,
    },
  ];

  const discOptions: Option[] = [
    {
      label: "Putter",
      prob: 0.25,
    },
    {
      label: "Midrange",
      prob: 0.25,
    },
    {
      label: "Fairway Diver",
      prob: 0.25,
    },
    {
      label: "Distance Diver",
      prob: 0.25,
    },
  ];

  const [display, setDisplay] = useState("No roll");

  return (
    <div>
      <h1>Disc Dice</h1>
      <div>{display}</div>
      <div>
        <button
          onClick={() => {
            setDisplay(rollDice([throwOptions, stableOptions, discOptions]));
          }}
        >
          Roll
        </button>
      </div>
    </div>
  );
}
