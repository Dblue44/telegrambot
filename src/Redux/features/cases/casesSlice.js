import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

export const fetchAllMyCases = createAsyncThunk(
    "cases/fetchAllMyCases",
    async () => {
        try{
            // UserId пока любой передавать можно
            const { data } = await axios.get(`/0/odata/ITdsTelegramChat(08d48701-16b0-4fd5-a691-f8c72ecf7101)`);
            debugger;
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
        resetNewCaseInfo: (state, action) => {
            state.newCaseCategory = "";
            state.newCaseSubcategory = "";
            state.newCaseCriticality = false;
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

export const { setCaseCategory, setCaseSubcategory, setCaseCriticality, resetNewCaseInfo } = casesSlice.actions;
export default casesSlice.reducer