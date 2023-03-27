import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginFormOpen: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        toggleLogin(state, action) {
            state.isLoginFormOpen = action.payload;
        },
    },
});

export const { toggleLogin } = loginSlice.actions;
export default loginSlice.reducer;