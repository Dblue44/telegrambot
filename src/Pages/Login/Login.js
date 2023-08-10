import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css";


const Login = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            UserName: "",
            UserPassword: "",
        },
        mode: "onChange",
    });


    return (
        <Paper classes={{ root: styles.root }}>
            <Typography classes={{ root: styles.title }} variant="h5">
                Вход в аккаунт Creatio
            </Typography>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <TextField
                    className={styles.field}
                    label="Логин"
                    error={Boolean(errors.UserName?.message)}
                    helperText={errors.UserName?.message}
                    {...register("UserName", { required: "Укажите логин" })}
                    fullWidth
                />
                <TextField
                    className={styles.field}
                    label="Пароль"
                    error={Boolean(errors.UserPassword?.message)}
                    helperText={errors.UserPassword?.message}
                    {...register("UserPassword", { required: "Укажите пароль" })}
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