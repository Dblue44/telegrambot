import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

import {checkIsAuth, fetchCreatioLogin} from "../../Redux/features/auth/authSlice";
import {useDispatch, useSelector} from 'react-redux';

import Login from "./Login";

const LoginApiComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const isAuth = useSelector(checkIsAuth);

    useEffect(() => {
        if (isAuth) navigate('/')
    }, [isAuth, navigate])

    const onSubmit = async () => {
        try {
            const data = await dispatch(fetchCreatioLogin());
            // eslint-disable-next-line default-case
            switch(data.payload.status) {
                case "error":
                    if (data.payload.error) {
                        toast.error(data.payload.error);
                    } else {
                        toast.warn("Неверный логин или пароль")
                    }
                    return;
                case "success":
                    toast.success(data.payload.message);
                    return;
            }
        } catch (err){
            toast.error("Не удалось подключиться к серверу")
        }
    };

    return (
        <Login
            onSubmit={onSubmit.bind(this)}
        />
    )
}

export default LoginApiComponent;