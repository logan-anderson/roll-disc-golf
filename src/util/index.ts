import { Option, OptionType } from "./interfaces";

export const rollDice: (dice: OptionType[]) => string = (dice) => {
  let returnValue = [];
  dice.forEach((die) => {
    returnValue.push(`${die.label}: ` + roll(die.options) + `\n`);
  });

  return returnValue.join(", ");
};

const roll = (options: Option[]) => {
  let picked = "ERROR";
  const random = Math.random();
  let total = 0;
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    total = total + option.prob;
    if (total > random) {
      picked = option.label;
      break;
    }
  }
  return picked;
};
export const EPS = 0.00001;
export const validateOption: (opt: OptionType) => string = (opt) => {
  const sum: number = opt.options.reduce((x, curr) => x + curr.prob, 0);

  if (Math.abs(1 - sum) <= EPS) {
    return "";
  }

  if (sum > 0) {
    return "Can not have a probability greater then 1";
  }
  if (sum < 0) {
    return "Can not have a probability less then 1";
  }

  return "";
};
