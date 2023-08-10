import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

export const fetchAllMyCases = createAsyncThunk(
    "cases",
    async ({ UserId }) => {
        const { data } = await axios.get(`0/odata/Case?$filter=Contact eq '${UserId}'`).catch((err) => {
            console.log(err);
        });
        // @odata.context и value
        return data;
    });

const initialState = {
    cases: [],
    newCaseCategory: null,
    newCaseSubcategory: null,
    newCaseCriticality: false,
    newCaseTheme: null,
    newCaseProblem: null,
    loading: false,
}

export const casesSlice = createSlice({
    name: "cases",
    initialState,
    reducers: {
        setCaseCategory: (state, action) => {
            state.newCaseCategory = action.payload
        },
        setCaseSubcategory: (state, action) => {
            state.newCaseSubcategory = action.payload
        },
        setCaseCriticality: (state, action) => {
            state.newCaseCriticality = action.payload
        },
        setCaseTheme: (state, action) => {
            state.newCaseTheme = action.payload
        },
        setCaseProblem: (state, action) => {
            state.newCaseProblem = action.payload
        },
    },
    extraReducers: {
        [fetchAllMyCases.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchAllMyCases.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cases = action.payload.cases;
        },
        [fetchAllMyCases.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export const { setCaseTheme, setCaseProblem, setCaseCategory, setCaseSubcategory, setCaseCriticality } = casesSlice.actions;
export default casesSlice.reducer