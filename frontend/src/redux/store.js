import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer";
import styleReducer from "./reducers/styleReducer";
import projectReducer from "./reducers/projectReducer";

const store = configureStore({
    reducer: {
                appReducer,
                projectReducer,
                styleReducer
                                }
});

export default store;