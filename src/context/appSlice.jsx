import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userdata:[]
}

export const appSlice = createSlice({
    name:'global',
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.userdata = action.payload;
        }
    }
})

export const { saveData } = appSlice.actions
export default appSlice.reducer