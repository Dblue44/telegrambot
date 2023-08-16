import React from "react";

//import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

import {toast} from "react-toastify";
//import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import CasesCreate from "./CasesCreate";
import {setCaseCategory, setCaseSubcategory, setCaseCriticality } from "../../Redux/features/cases/casesSlice";

const Categories = [
    { id: 1, name: "Категория 1"},
    { id: 2, name: "Категория 2"},
    { id: 3, name: "Категория 3"},
    { id: 4, name: "Категория 4"},
    { id: 5, name: "Категория 5"},
    { id: 6, name: "Категория 6"},
    { id: 7, name: "Категория 7"},
]

const SubCategories = [
    {id: 1, name: "Подкатегория 1", category: 1},
    {id: 2, name: "Подкатегория 2", category: 1},
    {id: 3, name: "Подкатегория 3", category: 1},
    {id: 4, name: "Подкатегория 4", category: 2},
    {id: 5, name: "Подкатегория 5", category: 2},
    {id: 6, name: "Подкатегория 6", category: 3},
]
const CasesCreateApiComponent = () => {
    const dispatch = useDispatch();
    const category = useSelector((store) => store.cases.newCaseCategory);
    const subCategory = useSelector((store) => store.cases.newCaseSubcategory);
    const criticality = useSelector((store) => store.cases.newCaseCriticality)

    const chooseCategory = (event) => {
        if (category !== event.target.value){
            dispatch(setCaseCategory(event.target.value));
            dispatch(setCaseSubcategory(""));
        }
    }

    const chooseSubCategory = (event) => {
        dispatch(setCaseSubcategory(event.target.value));
    }

    const setCriticality = (event) => {
        dispatch(setCaseCriticality(event.target.checked));
    }

    const createCase = async () => {
        try {

        } catch (error) {
            toast.error("Не удалось создать заявку")
        }
    }

    return (
        <>
            <CasesCreate
                categories={Categories}
                subcategories={SubCategories}
                category={category}
                chooseCategory={chooseCategory}
                subCategory={subCategory}
                chooseSubCategory={chooseSubCategory}
                criticality={criticality}
                setCriticality={setCriticality}
                onSubmit={createCase.bind(this)}/>
        </>
    );
}
export default CasesCreateApiComponent;