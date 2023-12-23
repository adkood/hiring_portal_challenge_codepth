import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
    isSignup: false,
    isLoggedIn: false,
    render: 0,
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        signupToggle(state) {
            state.isSignup = !state.isSignup;
        },
        isLoggedInToggle(state) {
            state.isLoggedIn = !state.isLoggedIn;
        },
        changeRender(state) {
            state.render = state.render+1;
        }
    }
})

export const modalActions = modalSlice.actions;

const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
    },
});

export default store;
