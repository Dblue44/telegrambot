import React from "react";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import {ButtonGroup, styled} from "@mui/material";
import Button from "@mui/material/Button"
import Container from "@mui/material/Container";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate()
    const gotoCreateCase = () => {
        navigate("/cases/create")
    }
    const gotoMyCases = () => {
        navigate("/cases/my")
    }
    const gotoCallOperator = () => {
        navigate("/")
    }
    const MainButton = styled(Button)(({ theme }) => ({
        fontSize: 22,
    }));
    return (
        <>
            <Container fixed>
                <ButtonGroup
                    orientation="vertical"
                    variant="contained"
                    aria-label="vertical outlined button group"
                >
                    <MainButton size="large" endIcon={<AddCircleOutlineIcon />} onClick={gotoCreateCase}>Создать заявку</MainButton>
                    <MainButton size="large" endIcon={<LibraryBooksIcon />} onClick={gotoMyCases}>Мои заявки</MainButton>
                </ButtonGroup>
            </Container>

        </>
    );
};

export default Main