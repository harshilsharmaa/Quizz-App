import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {},
    reducers: {
        addInfo: (state, action) => {
            state.info = action.payload;
        }
    }
});

export const { addInfo } = quizSlice.actions;
export default quizSlice.reducer;
