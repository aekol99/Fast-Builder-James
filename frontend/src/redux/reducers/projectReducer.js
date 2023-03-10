import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    prjectId: 'prid_1784258xc84128',
    activeBuildingTab: 0,
    selectorPosition: {x: 20, y: 20}
};

export const projectReducer = createSlice({
    name: 'projectReducer',
    initialState,
    reducers: {
        setActiveBuildingTab: (state, action) => {
            return {...state, activeBuildingTab: action.payload}
        }
    }
});


export const { setActiveBuildingTab } = projectReducer.actions
export default projectReducer.reducer;