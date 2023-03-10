import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectorPosition: {x: null, y: null},
    activeTab: 0,
    activeCategory: "text",
    searchValue: ""
};

export const styleReducer = createSlice({
    name: 'styleReducer',
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            return {...state, activeTab: action.payload}
        },
        setActiveCategory: (state, action) => {
            return {...state, activeCategory: action.payload}
        },
        setSearchValue: (state, action) => {
            return {...state, searchValue: action.payload}
        }
    }
});


export const { setActiveTab, setActiveCategory, setSearchValue } = styleReducer.actions
export default styleReducer.reducer;