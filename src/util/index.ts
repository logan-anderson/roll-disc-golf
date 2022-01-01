import { Option } from "./interfaces";

export const rollDice: (dice: Option[][]) => string = (dice) => {
  let returnValue = [];
  dice.forEach((die) => {
    returnValue.push(roll(die));
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
