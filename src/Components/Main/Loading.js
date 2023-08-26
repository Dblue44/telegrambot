import React from "react";
import {Step, StepLabel, StepContent, Stepper, CircularProgress} from "@mui/material";
import Container from "@mui/material/Container";

const Loading = (props) => {
    return (
        <Container maxWidth="xl" sx={{ justifyContent: 'center', display: 'grid', marginTop: "10em"}}>
            <Stepper nonLinear orientation="vertical" activeStep={props.activeStep}>
                {props.steps.map((label, index) => (
                    <Step key={label} completed={props.compelted[index]}>
                        <StepLabel>
                            {label}
                        </StepLabel>
                        <StepContent>
                            {index === props.activeStep && <CircularProgress color="success" />}
                        </StepContent>
                    </Step>
                    ))}
                <Step key={0} completed={true}>
                    <StepLabel>
                        Получение данных Telegram
                    </StepLabel>
                </Step>
                <Step key={1} completed={true}>
                    <StepLabel>
                        Авторизация в системе
                    </StepLabel>
                </Step>
                <Step key={2} completed={true}>
                    <StepLabel>
                        Загрузка заявок
                    </StepLabel>
                </Step>
            </Stepper>
        </Container>
    );
};

export default Loading;
