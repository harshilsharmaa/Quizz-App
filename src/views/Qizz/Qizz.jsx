import React, { useEffect, useRef, useState } from "react";
import Question from "./components/Question";
import Timer from "./components/Timer";
import axios from "axios";
import AllQuestionsPanel from "./components/AllQuestionsPanel";
import ConfirmModal from "./components/ConfirmModal";
import { useDispatch } from "react-redux";
import { addInfo } from "../../redux/slices/quizSlice";
import { useNavigate } from "react-router-dom";

const Qizz = () => {
  const [allQuestion, setAllQuestion] = useState([]);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [allSelectedOptions, setAllSelectedOptions] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

        setAllQuestion(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };



  const handlePrev = () => {
    if (currentQuesIndex > 0) {
      setCurrentQuesIndex(currentQuesIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentQuesIndex < 14) {
      setCurrentQuesIndex(currentQuesIndex + 1);
    }
  };

  const confirmHandler = (choice)=>{
    if(choice){
        dispatch(addInfo({allQuestion, allSelectedOptions}));
        navigate("/result")
    }
    else{
        setShowConfirmModal(false);
    }
  }

  useEffect(() => {
    fetchQustions();
  }, []);

  return (
    <>
        {
            showConfirmModal && <ConfirmModal confirmHandler={confirmHandler}/>
        }
      <div className=" w-screen border-b-2 flex justify-between items-center">
        <Timer />

        <div>
          <button onClick={()=>setShowConfirmModal(true)} className="mr-7 shadow-lg hover:shadow-md hover:bg-green-500 bg-green-400 text-white text-xl rounded-md px-5 py-1">
            Submit
          </button>
        </div>
      </div>

      <div className="flex bg-gray-50">
        <div className="border w-1/5">
          <AllQuestionsPanel
            currentQuesIndex={currentQuesIndex}
            setCurrentQuesIndex={setCurrentQuesIndex}
            allSelectedOptions={allSelectedOptions}
          />
        </div>
        <div className=" w-4/5">
          <Question
            question={allQuestion[currentQuesIndex]}
            index={currentQuesIndex + 1}
            setAllSelectedOptions={setAllSelectedOptions}
            allSelectedOptions={allSelectedOptions}
          />
          <div className="w-full flex justify-between">
            <button
              disabled={currentQuesIndex <= 0}
              onClick={() => handlePrev()}
              className=" my-4 ml-5 bg-blue-500 text-white rounded-lg px-4 py-3"
            >
              Previous
            </button>
            <button
              onClick={() => handleNext()}
              className="my-4 mr-9 bg-green-500 text-white rounded-lg px-4 py-3"
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qizz;
