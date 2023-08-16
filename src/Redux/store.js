import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import caseReducer from "./features/cases/casesSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        cases: caseReducer,
    },
});

export default store;