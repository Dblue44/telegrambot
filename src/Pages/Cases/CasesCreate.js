import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import {
    FormControl,
    formControlClasses, FormControlLabel,
    InputLabel,
    MenuItem,
    paperClasses,
    Select,
    styled, Switch
} from "@mui/material";
import styles from "./Case.module.css";

const CasesCreate = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        defaultValues: {
            Theme: "",
            Problem: "",
        },
        mode: "onChange",
    });

    const StyledPaper = styled(Paper)(() => ({
        [`&.${paperClasses.root}`]: {
            width: '300px',
            padding: '30px',
        }
    }))

    const StyledFormControl = styled(FormControl)(() => ({
        [`&.${formControlClasses.root}`]: {
            marginTop: '20px'
        }
    }))

    return (
        <StyledPaper classes={{root: styles.root}}>
            <Typography variant="h5">
                Создание заявки
            </Typography>
            <form onSubmit={() => {handleSubmit(props.onSubmit)}}>
                <StyledFormControl fullWidth>
                    <InputLabel id="category-label">Категория</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        value={props.category}
                        label="Категория"
                        onChange={props.chooseCategory}
                    >
                        {props.categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))}
                    </Select>
                </StyledFormControl>
                {Boolean(props.category) &&
                    <StyledFormControl fullWidth>
                        <InputLabel id="subCategory-label">Подкатегория</InputLabel>
                        <Select
                            labelId="subCategory-label"
                            id="subCategory"
                            value={props.subCategory}
                            label="Подкатегория"
                            onChange={props.chooseSubCategory}
                        >
                            {props.subcategories.filter((el) => el.category === props.category).map((currentSubCategory) => (
                                <MenuItem key={currentSubCategory.id} value={currentSubCategory.id}>{currentSubCategory.name}</MenuItem>
                            ))}
                        </Select>
                    </StyledFormControl> }
                <FormControlLabel control={<Switch onChange={props.setCriticality}/>} label="Заявка критична?" labelPlacement="start"/>
                <TextField
                    id="Theme-text"
                    label="Тема заявки"
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.Theme?.message)}
                    helperText={errors.Theme?.message}
                    {...register("Theme", { required: "Укажите тему заявки" })}
                />
                <TextField
                    id="Problem-text"
                    label="Описание проблемы"
                    multiline
                    maxRows={3}
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.Problem?.message)}
                    helperText={errors.Problem?.message}
                    {...register("Problem", { required: "Опишите вашу проблему" })}
                />
                <Button
                    disabled={!isValid}
                    type="submit"
                    size="large"
                    variant="contained"
                    color="success">

                    Success
                </Button>

            </form>
        </StyledPaper>
    )
}
export default CasesCreate;