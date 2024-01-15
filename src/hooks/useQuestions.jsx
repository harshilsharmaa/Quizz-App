import React from "react";
import axios from "axios";

const useQuestions = () => {
  const fetchQustions = async () => {
    try {
      const { data } = await axios.get("https://opentdb.com/api.php?amount=15");
      if (data?.results) {
        const newArray = data.results.map((item) => {
          const { incorrect_answers, correct_answer } = item;

          const optionsSet = new Set([...incorrect_answers, correct_answer]);
          const options = Array.from(optionsSet);

          for (let i = options.length - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [options[i], options[randomIndex]] = [
              options[randomIndex],
              options[i],
            ];
          }
          item.allOptions = options;

          return item;
        });

        return data?.results
      }

    } catch (error) {
      console.log(error);
    }
  };

  return {fetchQustions};
};

export default useQuestions;
