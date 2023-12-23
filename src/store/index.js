import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
    isSignup: false,
    isLoggedIn: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        signupToggle(state) {
            if (state.isLogin) state.isLogin = false;
            state.isSignup = !state.isSignup;
        },
    }
})

export const modalActions = modalSlice.actions;

const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
    },
});

export default store;
