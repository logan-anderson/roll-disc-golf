import { createContext, FC, useContext, useState } from "react";
import { OptionType } from "../../util/interfaces";
import { DefaultOptionTypeValues } from "./options";

export type SetOptionsFunc = any;
export type SetLabelFunc = any;
export type SetProbFunc = any;
export type AddNewOptionFunc = any;
interface OptionsContextType {
  options: OptionType[];
  setOptions: SetOptionsFunc;
  setLabel: SetLabelFunc;
  setProb: SetProbFunc;
  setNewOptions: AddNewOptionFunc;
}

const OptionsContext = createContext(null as OptionsContextType);

export const OptionsContextProvider: FC = ({ children }) => {
  const [options, setOptions] = useState(DefaultOptionTypeValues);
  const setLabel = (label: string, index: [number, number]) => {
    setOptions((opts) => {
      const [first, second] = index;
      options[first].options[second].label = label;
      return opts;
    });
  };
  const setProb = (prob: number, index: [number, number]) => {
    setOptions((opts) => {
      const [first, second] = index;
      options[first].options[second].prob = prob;
      return opts;
    });
  };
  const setNewOptions = (index: number) => {
    setOptions((opts) => {
      opts[index].options.push({ label: "", prob: 0 });
      return opts;
    });
  };
  return (
    <OptionsContext.Provider
      value={{ options, setOptions, setLabel, setProb, setNewOptions }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions: () => OptionsContextType = () => {
  return useContext(OptionsContext);
};
