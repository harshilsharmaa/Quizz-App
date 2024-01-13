import  { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import quizSlice from "./slices/quizSlice";

const store = configureStore({
    reducer:{
        user: userSlice,
        quiz: quizSlice
    }
})

export default store