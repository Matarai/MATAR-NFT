import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: "idle",
    error: null,
    sidebarStatus: false,
    currentLanguage: "english",
    rltStatus: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.status = "success";
            state.data = action.payload;
        },
        sidebarStatus: (state, action) => {
            state.sidebarStatus = !state.sidebarStatus;
            state.sidebar = action.payload;
        },
        selectedLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        },
        rltSidebarStatus: (state, action) => {
            state.rltStatus = action.payload;
        }
    },
});

// Actions
export const { loginSuccess, sidebarStatus, selectedLanguage, rltSidebarStatus } = loginSlice.actions;

export default loginSlice.reducer;