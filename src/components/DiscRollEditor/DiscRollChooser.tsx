// list component from https://dev.to/larainfo/tailwind-css-simple-list-group-examples-30p

import { PlusCircleIcon } from "@heroicons/react/solid";
import { OptionType } from "../../util/interfaces";
import { ListItem } from "./ListItem";

export const DiscRollChooser: React.FC<{ optionTypes: OptionType[] }> = ({
  optionTypes,
}) => {
  return (
    <>
      {optionTypes.map((x) => {
        return <DiscShotChooser key={x.label} shots={x} />;
      })}
    </>
  );
};

const DiscShotChooser: React.FC<{ shots: OptionType }> = ({ shots }) => {
  return (
    <div className="my-8">
      <h2 className="text-xl text-white text-center mb-4">{shots.label}</h2>
      <div className="mx-auto w-2/3 bg-white rounded-lg shadow-lg lg:w-2/5">
        <ul className="divide-y-2 divide-gray-400">
          {shots.options.map((x) => {
            return <ListItem key={x.label} item={x} />;
          })}
        </ul>
      </div>
      <div>
        <PlusCircleIcon className="h-7 w-7 mx-auto mt-3 fill-blue-700" />
      </div>
    </div>
  );
};
