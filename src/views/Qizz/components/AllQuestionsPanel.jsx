import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AllQuestionsPanel = ({
  currentQuesIndex,
  setCurrentQuesIndex,
  allSelectedOptions,
}) => {
  const {markedReview} = useSelector((store)=>store.quiz); 
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    const temp = [...visited];
    temp[currentQuesIndex] = true;
    setVisited(temp);
  }, [currentQuesIndex]);


  return (
    <div className="mt-7 p-3 flex flex-col items-center">
      <div className="border grid grid-cols-4 gap-y-3 w-1/2 p-2 rounded-md">
        {Array.from({ length: 15 }).map((_, index) => {
          return (
            <div
              onClick={() => setCurrentQuesIndex(index)}
              className={`${
                markedReview[index] ? "bg-blue-400":
                allSelectedOptions[index] ? "bg-green-300"
                : visited[index]? "border-2 border-yellow-500":null
              } border w-6 h-6 rounded-md cursor-pointer`}
            ></div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col justify-evenly px-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
          <div className="ml-4 text-xs">Attempted</div>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <div className="ml-4 text-xs">Under Review</div>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 border border-yellow-500 rounded-full"></div>
          <div className="ml-4 text-xs">Visited</div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestionsPanel;
