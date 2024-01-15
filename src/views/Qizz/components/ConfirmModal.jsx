import React from "react";
import { closeIcon, infoIcon } from "../../../utils/Icons";

const ConfirmModal = ({ confirmHandler, attempted }) => {
  const len = attempted.reduce((acc, item) => {
    return item ? acc + 1 : acc;
  }, 0);

  return (
    <div className="top-0 left-0 absolute h-screen w-full bg-black bg-opacity-20 flex justify-center items-center z-50">
      <div className="z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full  max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => confirmHandler(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              {closeIcon}
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              {infoIcon}
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to end and submit ?
              </h3>
              <div className="mb-5">
                <h3>Total: 15</h3>
                <h3>Attempted: {len}</h3>
              </div>
              <button
                onClick={() => confirmHandler(true)}
                type="button"
                className={`text-white  bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2`}
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => confirmHandler(false)}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
