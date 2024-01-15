import React, { useEffect, useRef, useState } from "react";
import Question from "./components/Question";
import Timer from "./components/Timer";
import axios from "axios";
import AllQuestionsPanel from "./components/AllQuestionsPanel";
import ConfirmModal from "./components/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addInfo,
  clearAll,
  markItReview,
  unmarkReview,
} from "../../redux/slices/quizSlice";
import { useNavigate } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import ShimmerUi from "./components/ShimmerUi";

const Quiz = () => {
  const { markedReview, timeOver } = useSelector((store) => store.quiz);
  const [allQuestion, setAllQuestion] = useState(null);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [allSelectedOptions, setAllSelectedOptions] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {fetchQustions} = useQuestions();

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
  const handleMarkReview = () => {
    if (markedReview[currentQuesIndex]) {
      dispatch(unmarkReview(currentQuesIndex));
    } else {
      dispatch(markItReview(currentQuesIndex));
    }
  };

  const submitExam = ()=>{
    dispatch(addInfo({ allQuestion, allSelectedOptions }));
    navigate("/result");
  }

  const confirmHandler = (choice) => {
    if (choice) {
      submitExam();
    } else {
      setShowConfirmModal(false);
    }
  };


  const getQuestions = async()=>{
    const data = await fetchQustions();
    setAllQuestion(data);
    console.log(data);
  } 

  useEffect(() => {
    dispatch(clearAll());
    getQuestions();
  }, []);

  useEffect(()=>{
    if(timeOver){
      submitExam();
    }
  },[timeOver])

  if(!allQuestion){
    return <ShimmerUi/>
  }

  return (
    <>
      {showConfirmModal && (
        <ConfirmModal
          confirmHandler={confirmHandler}
          allQuesLength={allQuestion?.length}
          attempted={allSelectedOptions}
        />
      )}
      <div className=" w-screen border-b-2 flex justify-between items-center">
        <Timer />

        <div>
          <button
            onClick={() => setShowConfirmModal(true)}
            className="mr-7 shadow-lg hover:shadow-md hover:bg-green-500 bg-green-400 text-white text-xl rounded-md px-5 py-1"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="flex">
        <div className=" w-1/5">
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
          <div className="absolute bottom-0 right-0 w-4/5 flex justify-between">
            <button
              disabled={currentQuesIndex <= 0}
              onClick={() => handlePrev()}
              className=" my-4 ml-5 bg-blue-500 text-white rounded-lg px-4 py-3"
            >
              Previous
            </button>
            <div className="my-4 mr-8">
              <button
                onClick={() => handleMarkReview()}
                className="mr-6 bg-blue-500 text-white rounded-lg px-4 py-3"
              >
                {markedReview[currentQuesIndex] ? "Unmark" : "Mark for Review"}
              </button>
              <button
                onClick={() => handleNext()}
                className=" bg-green-500 text-white rounded-lg px-4 py-3"
              >
                Save and Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
