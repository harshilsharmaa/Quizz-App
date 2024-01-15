import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmail } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
// import logo from ""

const StartPage = () => {

    const user = useSelector((store)=>store.user);

    

    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(addEmail(email));
    }

    useEffect(()=>{
        console.log(user);
        if(user.email) navigate("/quiz");
    },[user])

  return (
    <div className='w-screen h-screen flex flex-col items-center '>

        <img className='mt-5 w-60' src={"/images/logo.webp"} alt="logo" srcset="" />

        <h2 className='headline text-6xl mt-4 text-red-400'>Quizzzz</h2>

        <form onSubmit={handleSubmit} className='mt-10 flex flex-col items-center justify-center md:w-1/2 w-2/3'>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} required={true} className='border rounded-lg px-3 py-4 md:w-[90%] w-[100%] text-xl font-semibold text-center' type="email" placeholder='Enter Your Email'/>
            <button type='submit' className='mt-6 border bg-green-500 text-white rounded-lg px-8 py-3 text-xl font-semibold'>Start</button>
        </form>
    </div>
  )
}

export default StartPage