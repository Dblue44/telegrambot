import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

export const fetchAllMyCases = createAsyncThunk(
    "cases/fetchAllMyCases",
    async ( UserId ) => {
        try{
            const { data } = await axios.get(`/cases/${UserId}`);
            // @odata.context и value
            return data;
        } catch (error) {
            return error.response.data;
        }
    });

const initialState = {
    cases: [],
    currentCase: {},
    newCaseCategory: "",
    newCaseSubcategory: "",
    newCaseCriticality: false,
    currentPage: 1,
    pageSize: 20,
    totalCases: 0,
    isLoading: false,
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

export const { setCaseCategory, setCaseSubcategory, setCaseCriticality } = casesSlice.actions;
export default casesSlice.reducer