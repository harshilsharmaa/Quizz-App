import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTimeOver } from "../../../redux/slices/quizSlice";

const Timer = () => {
  const [minutes, setMinutes] = useState(29);   //29
  const [seconds, setSeconds] = useState(60);

  const dispatch = useDispatch();

  const timerRef = useRef(null);

  const startTimer = () => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    timerRef.current = timer;
  };

  const stopTimer = ()=>{
    dispatch(setTimeOver());
    clearInterval(timerRef.current);
  }

  useEffect(() => {
    if (seconds <= 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    }
    if (minutes <= 0 && seconds <= 0) {
        stopTimer();
    }
  }, [seconds]);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="bg-red-500 text-white text-3xl rounded-br-lg px-5 py-3">
      00 : {minutes < 10 ? `0${minutes}` : minutes} :{" "}
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
