import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { addEmail } = userSlice.actions;
export default userSlice.reducer;
