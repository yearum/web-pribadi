import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    counter: 10,
};

export const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        increment: (state) => {
            console.log(state.counter = state.counter + 1, "<<<<<")
        },
        decrement: (state) => {
            console.log(state.counter = state.counter -= 1)
        },
        addByAmount: (state, actions) => {
            console.log("Aku Bisa Gila", actions)
        }
    },
});
export const { increment, decrement, addByAmount} = counterSlice.actions;
