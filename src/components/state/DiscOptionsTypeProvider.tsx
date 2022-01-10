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
  deleteOption: any;
}

const OptionsContext = createContext(null as OptionsContextType);

export const OptionsContextProvider: FC = ({ children }) => {
  const [options, setOptions] = useState(DefaultOptionTypeValues);
  const setLabel = (label: string, index: [number, number]) => {
    setOptions((opts) => {
      const [first, second] = index;
      const tmp: OptionType[] = [
        ...opts.slice(0, first),
        {
          label: opts[first].label,
          options: [
            ...opts[first].options.slice(0, second),
            { ...opts[first].options[second], label: label },
            ...opts[first].options.slice(second + 1),
          ],
        },
        ...opts.slice(first + 1),
      ];
      return tmp;
    });
  };
  const setProb = (prob: number, index: [number, number]) => {
    setOptions((opts) => {
      const [first, second] = index;
      const tmp: OptionType[] = [
        ...opts.slice(0, first),
        {
          ...opts[first],
          options: [
            ...opts[first].options.slice(0, second),
            { ...opts[first].options[second], prob: prob },
            ...opts[first].options.slice(second + 1),
          ],
        },
        ...opts.slice(first + 1),
      ];
      return tmp;
    });
  };
  const setNewOptions = (index: number) => {
    setOptions((opts) => {
      const tmp: OptionType[] = [
        ...opts.slice(0, index),
        {
          ...opts[index],
          options: [...opts[index].options, { label: "New item", prob: 0 }],
        },
        ...opts.slice(index + 1),
      ];
      return tmp;
    });
  };
  const deleteOption = (index: [number, number]) => {
    setOptions((opts) => {
      const [first, second] = index;
      const tmp: OptionType[] = [
        ...opts.slice(0, first),
        {
          label: opts[first].label,
          options: [
            ...opts[first].options.slice(0, second),
            ...opts[first].options.slice(second + 1),
          ],
        },
        ...opts.slice(first + 1),
      ];
      return tmp;
    });
  };
  return (
    <OptionsContext.Provider
      value={{
        options,
        setOptions,
        setLabel,
        setProb,
        setNewOptions,
        deleteOption,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions: () => OptionsContextType = () => {
  return useContext(OptionsContext);
};
