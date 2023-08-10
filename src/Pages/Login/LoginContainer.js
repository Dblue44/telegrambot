import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

import { fetchAuth, checkIsAuth } from "../../Redux/features/auth/authSlice";
import {useDispatch, useSelector} from 'react-redux';

import Login from "./Login";

const LoginApiComponent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const isAuth = useSelector(checkIsAuth);
    const { status } = useSelector((state) => state.auth)

    useEffect(() => {
        if (status) toast.warn(status)
        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const onSubmit = async (values) => {
        try {
            const data = await dispatch(fetchAuth(values));
            if (data.payload instanceof Array){
                const array = data.payload;
                if (array.length === 1){
                    toast.warn(array[0]?.msg)
                } else {
                    toast.warn("Неверный формат логина и пароля")
                }
            }
            if (data.payload instanceof Object){
                if (data.payload.error){
                    toast.error(data.payload.error);
                }
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