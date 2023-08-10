import React from "react";
import {Navigate} from "react-router-dom";
import { checkIsAuth } from "../Redux/features/auth/authSlice";
import {useSelector} from "react-redux";
export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector(checkIsAuth);
        if (!isAuth) return <Navigate to='/login' />
        return <Component {...props} />;
    }
    return RedirectComponent;
};

