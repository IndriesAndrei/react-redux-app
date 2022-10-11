import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';

export default configureStore({
    reducer: {
        // we add here all the slices/reducers
        counter: counterReducer,
        // user: userReducer
    },
});