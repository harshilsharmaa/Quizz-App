import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Result = () => {

    const {info} = useSelector((store)=>store.quiz);
    const [percentage, setPercentage] = useState(0);

    const calculateResult = ()=>{
        let points = 0;
        const {allQuestion, allSelectedOptions} = info;

        for(let i =0;i<allQuestion.length;i++){
            if(allQuestion[i].correct_answer==allSelectedOptions[i]){
                points++;
            }
        }
        const percantageCalc = Math.round((points/allQuestion.length)*100);
        setPercentage(percantageCalc)
        console.log(points)
    }

    useEffect(()=>{
        console.log(info)
        if(info?.allQuestion && info?.allSelectedOptions){
            calculateResult();
        }
    },[info])

  return (
    <div>
        <h3>{percentage}%</h3>
    </div>
  )
}

export default Result