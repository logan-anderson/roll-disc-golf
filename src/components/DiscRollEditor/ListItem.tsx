import {
  ExclamationCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { useState, useRef, SVGProps } from "react";
import { useOutsideRef } from "../../hooks/useOutsideRef";
import { Option } from "../../util/interfaces";
import { useOptions } from "../state";

const errorStyles =
  "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500";
const normalStyles =
  "focus:ring-blue-500 focus:border-blue-500 border-gray-300 ";
export const ListItem: React.FC<{
  item: Option;
  label: string;
  index: [number, number];
}> = ({ item, label, index }) => {
  const [edit, setEditMode] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(item.label);
  const [currentProb, setCurrentProb] = useState(item.prob || 0);
  const { setLabel, setProb, deleteOption } = useOptions();

  const wrapperRef = useRef(null);
  useOutsideRef(wrapperRef, () => {
    setCurrentLabel((t) => {
      const error = !t;
      if (!error) {
        setEditMode(false);
      }
      return t;
    });
  });
  const error = !currentLabel;
  return (
    <li className="flex justify-between p-3" ref={wrapperRef}>
      <div className="flex flex-col lg:flex-row justify-around w-full">
        <div className="flex flex-row justify-start mb-2">
          <div className="my-auto">{label}: </div>
          <p>{!edit && currentLabel}</p>
          {edit && (
            <div>
              <label htmlFor="shot" className="sr-only">
                {label}
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setLabel(e.target.value, index);
                    setCurrentLabel(e.target.value);
                  }}
                  value={currentLabel}
                  type="text"
                  name="shot"
                  id="shot"
                  className={`block w-full pr-10 sm:text-sm rounded-md ${
                    error ? errorStyles : normalStyles
                  }`}
                  aria-invalid={error ? "true" : "false"}
                  // aria-describedby="email-error"
                />
                {error && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  Must provide a disc name
                </p>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-row justify-start">
          <div className="my-auto">Probability: </div>
          <p>{!edit && currentProb}</p>
          {edit && (
            <div>
              <label htmlFor="probability" className="sr-only">
                Probability
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setProb(Number(e.target.value), index);
                    setCurrentProb(Number(e.target.value));
                  }}
                  value={currentProb}
                  step={0.1}
                  type="number"
                  name="probability"
                  id="probability"
                  className={`block w-full pr-10 sm:text-sm rounded-md ${
                    error ? errorStyles : normalStyles
                  }`}
                  aria-invalid={error ? "true" : "false"}
                  // aria-describedby="email-error"
                />
                {/* TODO: add errors back in to probability */}
                {/* {error && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )} */}
              </div>
              {/* {error && (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  Must provide a disc name
                </p>
              )} */}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row">
        <button
          className="hover:bg-gray-400 rounded-md"
          onClick={() => {
            deleteOption(index);
          }}
        >
          <TrashIcon className="h-5 w-5 text-red-500" />
        </button>
        <button
          className="hover:bg-gray-400 rounded-md"
          onClick={() => {
            if (!error) {
              setEditMode((edit) => !edit);
            }
          }}
        >
          <PencilIcon className="w-6 h-6 text-blue-600 hover:text-blue-900 " />
        </button>
      </div>
    </li>
  );
};
