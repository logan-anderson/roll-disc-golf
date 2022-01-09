import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useState, useRef, SVGProps } from "react";
import { useOutsideRef } from "../../hooks/useOutsideRef";
import { Option } from "../../util/interfaces";

const errorStyles =
  "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500";
const normalStyles =
  "focus:ring-blue-500 focus:border-blue-500 border-gray-300 ";
export const ListItem: React.FC<{ item: Option }> = ({ item }) => {
  const [edit, setEditMode] = useState(false);
  const [temp, setTemp] = useState(item.label || "");
  const wrapperRef = useRef(null);
  useOutsideRef(wrapperRef, () => {
    setTemp((t) => {
      const error = !t;
      if (!error) {
        setEditMode(false);
      }
      return t;
    });
  });
  const error = !temp;
  return (
    <li className="flex justify-between p-3" ref={wrapperRef}>
      <div className="flex flex-row justify-around w-full">
        <div className="flex flex-row justify-start">
          <div className="my-auto">Shot Type:</div>
          <p>{!edit && temp}</p>
          {edit && (
            <div>
              <label htmlFor="shot" className="sr-only">
                Shot
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setTemp(e.target.value);
                  }}
                  value={temp}
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
          <p>{!edit && temp}</p>
          {edit && (
            <div>
              <label htmlFor="shot" className="sr-only">
                Shot
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={(e) => {
                    setTemp(e.target.value);
                  }}
                  value={temp}
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
      </div>
      <button
        onClick={() => {
          if (!error) {
            setEditMode((edit) => !edit);
          }
        }}
      >
        <EditSVG />
      </button>
    </li>
  );
};

const EditSVG: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-blue-600 hover:text-blue-900 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);
