import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios, {setBPMCSRF} from "../../../utils/axios";

export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async (values) => {
        try {
            const {data, headers} = await axios.post("/ServiceModel/AuthService.svc/Login", values)
            if (data?.Code !== 0) {
                return {
                    message: data?.Message,
                    status: "error"
                };
            }
            const bpmcsrf = headers.get("set-cookie")[2].split(";")[0].split("=")[1];
            window.localStorage.setItem("bpmcsrf", bpmcsrf);
            setBPMCSRF(data.bpmcsrf);
            return {
                status: "success",
                message: "Авторизация пройдена успешно",
            };
        } catch (error) {
            return {
                status: "error",
                message: "Ошибка авторизации",
            }
        }
    });
export const fetchCreatio = createAsyncThunk(
    "auth/Creatio",
    (UserId) => {
        return {
            message: "Успешная авторизация в Creatio",
            status: "success"
        }
    });
export const fetchCreatioData = createAsyncThunk(
    "auth/CreatioData",
    (UserId) => {
        return {
            message: "Успешное получение данных от Creatio",
            status: "success"
        }
    });

const initialState = {
    userId: null,
    bpmcsrf: null,
    isLoadingCreatio: true,
    isLoadingData: false,
    success: false,
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
            //state.userId = action.payload.userId;
            state.status = action.payload.message;
        },
        [fetchAuth.rejected]: (state, action) => {
            state.isLoading = false;
            state.bpmcsrf = null;
            state.userId = null;
            state.status = action.payload.message;
        },
        [fetchCreatio.pending]: (state) => {
            state.isLoadingCreatio = true;
        },
        [fetchCreatio.fulfilled]: (state, action) => {
            state.isLoadingCreatio = false;
        },
        [fetchCreatio.rejected]: (state, action) => {
            state.isLoadingCreatio = false;
        },
        [fetchCreatioData.pending]: (state) => {
            state.isLoadingData = true;
        },
        [fetchCreatioData.fulfilled]: (state, action) => {
            state.isLoadingData = false;
        },
        [fetchCreatioData.rejected]: (state, action) => {
            state.isLoadingData = false;
        }
    },
});

export const getUserId = (state) => state.auth.userId;
export const checkIsAuth = (state) => Boolean(state.auth.bpmcsrf);
export const checkCreatioLoading = (state) => (state.auth.isLoadingCreatio);
export const checkCreatioDataLoading = (state) => (state.auth.isLoadingData);
export const {logout} = authSlice.actions;
export default authSlice.reducer;