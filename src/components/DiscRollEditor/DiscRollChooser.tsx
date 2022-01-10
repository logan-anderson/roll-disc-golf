// list component from https://dev.to/larainfo/tailwind-css-simple-list-group-examples-30p

import { SaveIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { useOptions } from "../state/DiscOptionsTypeProvider";
import { DefaultOptionTypeValues, LOCALSTORAGEKEY } from "../state/options";
import { ListItem } from "./ListItem";

export const DiscRollChooser: React.FC = () => {
  const { options, saveOptions, setOptions } = useOptions();
  return (
    <div>
      <div className="m-5 flex flex-row-reverse">
        <div className="flex flex-col">
          <button
            onClick={() => {
              window.localStorage.removeItem(LOCALSTORAGEKEY);
              setOptions(DefaultOptionTypeValues);
            }}
            type="button"
            className="m-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Restore default selections
            <TrashIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={() => {
              saveOptions();
            }}
            type="button"
            className="m-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Selection to Device
            <SaveIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      {options.map((_, i) => {
        return <DiscShotChooser key={i} index={i} />;
      })}
    </div>
  );
};

const DiscShotChooser: React.FC<{ index: number }> = ({ index }) => {
  const { setNewOptions, options } = useOptions();
  const shots = options[index];
  return (
    <div className="my-8">
      <h2 className="text-xl text-white text-center mb-4">{shots.label}</h2>
      <div className="mx-auto w-5/6 bg-white rounded-lg shadow-lg lg:w-2/3">
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
