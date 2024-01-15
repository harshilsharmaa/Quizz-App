import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Result = () => {
  const { info } = useSelector((store) => store.quiz);
  const [percentage, setPercentage] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const calculateResult = () => {
    let points = 0;
    const { allQuestion, allSelectedOptions } = info;

    for (let i = 0; i < allQuestion.length; i++) {
      if (allQuestion[i].correct_answer == allSelectedOptions[i]) {
        points++;
      }
    }
    setCorrectAnswers(points);
    const percantageCalc = Math.round((points / allQuestion.length) * 100);
    setPercentage(percantageCalc);
  };

  useEffect(() => {
    console.log(info);
    if (info?.allQuestion && info?.allSelectedOptions) {
      calculateResult();
    }
  }, [info]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="my-10 text-center">
        <h3
          className={`${
            percentage < 33 ? "text-red-500" : "text-green-500"
          } text-8xl font-semibold`}
        >
          {percentage} <span className="text-4xl">%</span>
        </h3>

        <p className="mt-3 text-lg">{correctAnswers} out of 15</p>
      </div>

      <div>
        <Link to="/quiz" className="bg-blue-400 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-sm">
          Play Again
        </Link>
      </div>

      <div className="my-10 flex flex-col w-2/3">
        {info?.allQuestion?.length > 0 &&
          info?.allQuestion.map((item, index) => {
            return (
              <div className="mt-4 flex flex-col justify-center p-5">
                <div className="">
                  {!info.allSelectedOptions[index] && (
                    <div className="text-center w-full flex items-center ">
                      <h4 className="bg-red-500 px-2 py-1 text-xs text-white rounded-md">
                        Not Attempted
                      </h4>
                    </div>
                  )}
                  <p
                    className="font-semibold text-2xl text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: `Q ${index + 1} : ${item?.question}`,
                    }}
                  />
                </div>
                <h5 className="mt-4">Options:</h5>
                <div className="w-[80%] ml-5 mt-4 grid grid-cols-2 gap-x-6 gap-y-5">
                  {item?.allOptions?.length > 0 &&
                    item?.allOptions.map((ele, i) => {
                      return (
                        <fieldset
                          className={`${
                            ((info.allSelectedOptions[index] == ele &&
                              ele == item.correct_answer) ||
                            (ele == item.correct_answer) ) && "bg-green-100"
                          } ${
                            info.allSelectedOptions[index] == ele &&
                            ele != item.correct_answer &&
                            "bg-red-100"
                          } border rounded-lg px-4 py-4 cursor-pointer flex justify-between relative`}
                        >
                          {((info.allSelectedOptions[index] == ele &&
                            ele == item.correct_answer) ||
                            (ele == item.correct_answer)) && (
                              <legend className="border rounded-md px-2 py-1 text-xs bg-gray-200">
                                Correct answer
                              </legend>
                            )}

                          {info.allSelectedOptions[index] == ele &&
                            ele != item.correct_answer && (
                              <legend className="border rounded-md px-2 py-1 text-xs bg-gray-200">
                                Your answer
                              </legend>
                            )}

                          <p
                            className={`font-semibold `}
                            key={item + index}
                            dangerouslySetInnerHTML={{
                              __html: `${String.fromCharCode(i + 65)} : ${ele}`,
                            }}
                          />
                        </fieldset>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Result;
