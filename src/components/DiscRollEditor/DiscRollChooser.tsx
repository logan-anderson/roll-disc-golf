// list component from https://dev.to/larainfo/tailwind-css-simple-list-group-examples-30p

import { SaveIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { ExclamationIcon } from "@heroicons/react/outline";
import { validateOption } from "../../util";
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
  const errorMessage = validateOption(shots);
  return (
    <div className="my-8">
      <h2 className="text-xl text-white text-center mb-4">{shots.label}</h2>
      {errorMessage && (
        <div className="mx-auto w-5/6 lg:w-2/3">
          <div className="mx-auto inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationIcon
                    className="h-6 w-6 text-red-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    ERROR: {errorMessage}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`mx-auto w-5/6 bg-white rounded-lg shadow-lg lg:w-2/3 ${
          errorMessage && "border-4 border-red-500"
        }`}
      >
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
          className="h-7 w-7 mx-auto mt-3 text-indigo-600 hover:text-indigo-700"
          onClick={(_) => {
            setNewOptions(index);
          }}
        />
      </div>
    </div>
  );
};
