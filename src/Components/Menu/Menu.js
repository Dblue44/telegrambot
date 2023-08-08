import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../Redux/slices/auth";

import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            dispatch(logout());
            window.localStorage.removeItem("BPMCSRF");
        }
    };

    return (
        <div className={styles.Menu}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <Link className={styles.logo} to="/">
                        <div>TELEGRAM BOT</div>
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