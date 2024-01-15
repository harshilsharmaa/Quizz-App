import React from "react";

const ShimmerUi = () => {
  return (
    <div className="w-screen h-screen">
      <div className="border-b flex justify-between items-center">
        <div className="glow bg-gray-200 h-14 w-56 text-white text-3xl rounded-br-lg px-5 py-3"></div>

        <div>
          <div className="glow mr-7 h-9 w-40 bg-gray-200 text-white text-xl rounded-md px-5 py-1"></div>
        </div>
      </div>

      <div className="flex">
        <div className=" w-1/5">
          <div className="mt-7 p-3 flex flex-col items-center">
            <div className="border grid grid-cols-4 gap-y-3 w-1/2 p-2 rounded-md">
              {Array.from({ length: 15 }).map((_, index) => {
                return (
                  <div
                    className={`border glow bg-gray-200 w-6 h-6 rounded-md cursor-pointer`}
                  ></div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-col justify-evenly px-4">
              <div className="flex items-center">
                <div className="w-3 h-3 glow bg-gray-200 rounded-full"></div>
                <div className="ml-4 text-xs w-14 glow bg-gray-200 h-3"></div>
              </div>
              <div className="flex items-center mt-1">
                <div className="w-3 h-3 glow bg-gray-200 rounded-full"></div>
                <div className="ml-4 text-xs w-12 h-3 glow bg-gray-200"></div>
              </div>
              <div className="flex items-center mt-1">
                <div className="w-3 h-3 border glow bg-gray-200 rounded-full"></div>
                <div className="ml-4 text-xs glow bg-gray-200 w-16 h-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-4/5">
          <div className="flex flex-col justify-center w-full p-5">
            <div className="">
              <div
                className="font-semibold text-2xl text-gray-600 glow bg-gray-200 h-8 w-[90%] rounded-md"
              ></div>
              <div
                className="mt-1 font-semibold text-2xl text-gray-600 glow bg-gray-200 h-8 w-[30%] rounded-md"
              ></div>
            </div>
            <div className="mt-3 glow bg-gray-200 h-4 rounded-md w-14"></div>
            <div className="w-[80%] ml-5 mt-4 grid grid-cols-2 gap-x-6 gap-y-5">
              <div
                className={`glow bg-gray-100 font-semibold border rounded-lg px-4 py-4 cursor-pointer`}
              ></div>
              <div
                className={`glow bg-gray-100 font-semibold border rounded-lg px-4 py-4 cursor-pointer`}
              ></div>
              <div
                className={`glow bg-gray-100 font-semibold border rounded-lg px-4 py-4 cursor-pointer`}
              ></div>
              <div
                className={`glow bg-gray-100 font-semibold border rounded-lg px-4 py-4 cursor-pointer`}
              ></div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-4/5 flex justify-between">
            <div className="glow my-4 w-28 h-10 ml-5 bg-gray-200 text-white rounded-lg px-4 py-3"></div>
            <div className="my-4 mr-8 flex ">
              <div className="glow mr-6 w-28 bg-gray-200 text-white rounded-lg px-4 py-3"></div>
              <div className=" glow w-32 bg-gray-200 text-white rounded-lg px-4 py-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUi;
