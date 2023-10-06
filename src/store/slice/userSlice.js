import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    users:[],
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers:{
        setUsers: (state, actions) =>{
            state.users = actions.payload;
        },
    },
});

export const {setUsers} = userSlice.actions;

export function fetchUsers(){
    return (dispatch, getstate) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(data => {
            dispatch(setUsers(data));
            
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
