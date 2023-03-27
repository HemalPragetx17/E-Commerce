import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignupFormOpen: false,
};

const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        toggleSignup(state, action) {
            state.isSignupFormOpen = action.payload;
        },
    },
});

export const { toggleSignup } = signupSlice.actions;
export default signupSlice.reducer;