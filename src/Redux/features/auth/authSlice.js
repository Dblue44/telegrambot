import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, {setBPMCSRF} from "../../../utils/axios";

export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async (values) => {
        try{
            const { data, headers } = await axios.post("/ServiceModel/AuthService.svc/Login", values)
            if (data?.Code !== 0) {
                return {
                    message: data?.Message,
                    status: "error"
                };
            }
            const bpmcsrf = headers.get("set-cookie")[2].split(";")[0].split("=")[1];
            window.localStorage.setItem("bpmcsrf", bpmcsrf);
            setBPMCSRF(data.bpmcsrf);
            var ans = {
                stats: "success",
                message: "Авторизация пройдена успешно",
            }
            return ans;
        } catch (error) {
            return {
                stats: "error",
                message: "Ошибка авторизации",
            }
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
            //state.userId = action.payload.userId;
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

export const getUserId = (state) => state.auth.userId;
export const checkIsAuth = (state) => Boolean(state.auth.bpmcsrf);
export const { logout } = authSlice.actions;
export default authSlice.reducer;