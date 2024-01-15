import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        timeOver: false,
        markedReview: []
    },
    reducers: {
        addInfo: (state, action) => {
            state.info = action.payload;
        },
        markItReview: (state, action)=>{
            state.markedReview[action.payload] = 1;
        },
        unmarkReview: (state, action)=>{
            state.markedReview[action.payload] = null
        },
        setTimeOver: (state, action)=>{
            state.timeOver = true;
        },
        clearAll: (state, action)=>{
            state.info = null;
            state.timeOver = false;
            state.markedReview = []
        }
    }
});

export const { addInfo, markItReview, unmarkReview, setTimeOver, clearAll } = quizSlice.actions;
export default quizSlice.reducer;
