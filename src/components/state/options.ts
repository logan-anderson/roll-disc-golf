import { Option, OptionType } from "../../util/interfaces";

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

export const DefaultOptionTypeValues: OptionType[] = [
  { options: throwOptions, label: "Throw Type" },
  { options: discOptions, label: "Disc Type" },
];
