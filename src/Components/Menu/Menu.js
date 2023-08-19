import React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { checkIsAuth } from "../../Redux/features/auth/authSlice";

import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = () => {
    //const dispatch = useDispatch();
    const isAuth = useSelector(checkIsAuth);

    // const onClickLogout = () => {
    //     if (window.confirm("Вы действительно хотите выйти?")) {
    //         dispatch(logout());
    //         window.localStorage.removeItem("bpmcsrf");
    //     }
    // };

    return (
        <Container fixed sx={{paddingTop: "1em", paddingBottom: "1em"}}>
            <div className={styles.inner}>
                <Link className={styles.logo} to="/">
                    <div>Супермаркет ДА!</div>
                </Link>
                <div className={styles.buttons}>
                    {!isAuth &&
                        <>
                            <Link to="/login">
                                <Button variant="outlined">Войти</Button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </Container>
    );
};

export default Menu;