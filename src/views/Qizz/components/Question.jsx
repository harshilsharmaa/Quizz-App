import React, { useEffect, useState } from "react";

const Question = ({
  question,
  index,
  allSelectedOptions,
  setAllSelectedOptions,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (item) => {
    if (selectedOption === item) {
      setSelectedOption(null);
      const temp = [...allSelectedOptions];
      temp[index - 1] = null;
      setAllSelectedOptions(temp);
    } else {
      setSelectedOption(item);
      const temp = [...allSelectedOptions];
      temp[index - 1] = item;
      setAllSelectedOptions(temp);
    }
  };

  useEffect(() => {
    if (allSelectedOptions[index - 1]) {
      setSelectedOption(allSelectedOptions[index - 1]);
    }
  }, [question]);

  return (
    <div className="flex flex-col justify-center w-full p-5">
      <div className="">
        <p
          className="font-semibold text-2xl text-gray-600"
          dangerouslySetInnerHTML={{
            __html: `Q ${index} : ${question?.question}`,
          }}
        />
      </div>
      <h5>Options:</h5>
      <div className="w-[80%] ml-5 mt-4 grid grid-cols-2 gap-x-6 gap-y-5">
            {question?.allOptions?.length > 0 &&
              question?.allOptions.map((item, index) => {
                return (
                  <p
                    onClick={() => handleOptionClick(item)}
                    className={`${
                      selectedOption == item && "bg-blue-100  hover:bg-blue-100"
                    } font-semibold border rounded-lg px-4 py-4 cursor-pointer hover:bg-gray-100`}
                    key={item + index}
                    dangerouslySetInnerHTML={{
                      __html: `${String.fromCharCode(index + 65)} : ${item}`,
                    }}
                  />
                );
              })}

      </div>
    </div>
  );
};

export default Question;
