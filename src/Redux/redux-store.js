import {combineReducers, createStore} from 'redux';
import caseReducer from "./case-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";

// let reducers = combineReducers({
//     casePage: caseReducer
// })
//
// let store = createStore(reducers);

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;