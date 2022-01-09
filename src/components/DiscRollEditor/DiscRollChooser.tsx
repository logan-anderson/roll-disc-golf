// list component from https://dev.to/larainfo/tailwind-css-simple-list-group-examples-30p

import { PlusCircleIcon } from "@heroicons/react/solid";
import { OptionType } from "../../util/interfaces";
import { useOptions } from "../state/DiscOptionsTypeProvider";
import { ListItem } from "./ListItem";

export const DiscRollChooser: React.FC = () => {
  const { options } = useOptions();
  console.log({ options });
  return (
    <>
      {options.map((_, i) => {
        return <DiscShotChooser key={i} index={i} />;
      })}
    </>
  );
};

const DiscShotChooser: React.FC<{ index: number }> = ({ index }) => {
  const { setNewOptions, options } = useOptions();
  const shots = options[index];
  return (
    <div className="my-8">
      <h2 className="text-xl text-white text-center mb-4">{shots.label}</h2>
      <div className="mx-auto w-2/3 bg-white rounded-lg shadow-lg lg:w-2/5">
        <ul className="divide-y-2 divide-gray-400">
          {shots.options.map((x, i) => {
            return (
              <ListItem
                key={i}
                item={x}
                label={shots.label}
                index={[index, i]}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <PlusCircleIcon
          className="h-7 w-7 mx-auto mt-3 fill-blue-700"
          onClick={(_) => {
            setNewOptions(index);
          }}
        />
      </div>
    </div>
  );
};
