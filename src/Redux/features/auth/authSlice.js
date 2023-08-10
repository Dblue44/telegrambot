import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async (values) => {
        try{
            const { data } = await axios.post("/auth/login", values)
            if (data.bpmcsrf){
                window.localStorage.setItem("bpmcsrf", data.bpmcsrf);
            }
            return data;
        } catch (error) {
            return error.response.data;
        }
});

const initialState = {
    userId: null,
    bpmcsrf: null,
    isLoading: false,
    status: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            state.userId = null;
            state.bpmcsrf = null;
            state.status = null;
        },
    },
    extraReducers: {
        // Login user
        [fetchAuth.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.bpmcsrf = action.payload.bpmcsrf;
            state.userId = action.payload.userId;
            state.status = action.payload.message;
        },
        [fetchAuth.rejected]: (state, action) => {
            state.isLoading = false;
            state.bpmcsrf = null;
            state.userId = null;
            state.status = action.payload.message;
        }
    },
});

export const checkIsAuth = (state) => Boolean(state.auth.bpmcsrf);
export const { logout } = authSlice.actions;
export default authSlice.reducer;

