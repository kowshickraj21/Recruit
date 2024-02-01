import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        setUser: (state,action) => {
            return action.payload;
        }
    },
})

export const { setUser } = user.actions;
export default user.reducer;