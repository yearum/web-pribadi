import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import { userSlice } from "./slice/userSlice";

const store = configureStore({
    reducer:{
        counterSlice: counterSlice.reducer,
        userSlice: userSlice.reducer,
    },
});

export default store;

