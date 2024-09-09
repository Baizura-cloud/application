import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value:0,
    },

    reducers: {
        incremented: state =>{
            state.value += 1
        },
        decremented: state =>{
            state.value -=1
        },
        multiplication: state =>{
            state.value *=1
        },
    }
})

export const {incremented, decremented, multiplication} = counterSlice.actions
