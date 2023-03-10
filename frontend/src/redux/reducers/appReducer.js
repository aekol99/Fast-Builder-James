import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    welcomed: true,
    activePage: 'prject'
};

export const appReducer = createSlice({
    name: 'appReducer',
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            return {...state, activePage: action.paylad}
        }
    }
});


export const { setActivePage } = appReducer.actions
export default appReducer.reducer;