import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout, checkIsAuth } from "../../Redux/features/auth/authSlice";

import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(checkIsAuth);

    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            dispatch(logout());
            window.localStorage.removeItem("bpmcsrf");
        }
    };

    return (
        <div className={styles.Menu}>
            <Container fixed>
                <div className={styles.inner}>
                    <Link className={styles.logo} to="/">
                        <div>Creatio</div>
                    </Link>
                    <div className={styles.buttons}>
                        {isAuth ? (
                            <>
                                <Button
                                    onClick={onClickLogout}
                                    variant="contained"
                                    color="error"
                                >
                                    Выйти
                                </Button>
                            </>
                        ) : (
                            <>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Link to="/login">
                                    <Button variant="outlined">Войти</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Menu;