import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import styles from "./Login.module.css";
import { fetchAuth, selectIsAuth } from "../../Redux/slices/auth";

const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            login: "Test",
            password: "Test123",
        },
        mode: "onChange",
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));
        debugger;
        if (!data.payload) {
            return alert("Не удалось авторизоваться");
        }

        if ("BPMCSRF" in data.payload) {
            window.localStorage.setItem("BPMCSRF", data.payload.token);
        }
    };

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <Paper classes={{ root: styles.root }}>
            <Typography classes={{ root: styles.title }} variant="h5">
                Вход в аккаунт Creatio
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={styles.field}
                    label="Логин"
                    error={Boolean(errors.login?.message)}
                    helperText={errors.login?.message}
                    {...register("login", { required: "Укажите логин" })}
                    fullWidth
                />
                <TextField
                    className={styles.field}
                    label="Пароль"
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register("password", { required: "Укажите пароль" })}
                    fullWidth
                />
                <Button
                    disabled={!isValid}
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                >
                    Войти
                </Button>
            </form>
        </Paper>
    );
}

export default Login;