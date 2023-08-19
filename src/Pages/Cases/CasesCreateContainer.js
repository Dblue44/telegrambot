import React from "react";
//import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {toast} from "react-toastify";
//import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import CasesCreate from "./CasesCreate";
import {setCaseCategory, setCaseSubcategory, setCaseCriticality } from "../../Redux/features/cases/casesSlice";

const CategoriesPO = [
    { id: 1, name: "ПО. ЭДО"},
    { id: 2, name: "ПО. CЭД"},
    { id: 3, name: "ПО. РЦ"},
    { id: 4, name: "Сервис деск"},
    { id: 5, name: "Финансы"},
    { id: 6, name: "Розница"},
    { id: 7, name: "Продажи ОПТ"},
    { id: 8, name: "Кадры"},
    { id: 9, name: "Закупки"},
    { id: 10, name: "Бухгалтерия"},
    { id: 11, name: "Qlikview"},
]
const CategoriesTech = [
    { id: 12, name: "Оборудование. ЦО"},
    { id: 13, name: "Оборудование. РЦ"},
    { id: 14, name: "Магазины"},
]
const SubCategories = [
    {id: 1, name: "Администрирование", category: 1},
    {id: 2, name: "СЭД ПО", category: 2},
    {id: 3, name: "Транспорт", category: 3},
    {id: 4, name: "Акспта", category: 3},
    {id: 5, name: "Voice", category: 3},
    {id: 6, name: "СканСити", category: 3},
    {id: 7, name: "WMS", category: 3},
    {id: 8, name: "Отчёты и OLAP", category: 3},
    {id: 9, name: "Администрирование Creatio", category: 4},
    {id: 10, name: "Axapta. Статистика и отчётность", category: 5},
    {id: 11, name: "Axapta. Казначейство", category: 5},
    {id: 12, name: "ТСД", category: 6},
    {id: 13, name: "ЕГИАС", category: 6},
    {id: 14, name: "POS", category: 6},
    {id: 15, name: "Ценники", category: 6},
    {id: 16, name: "Отчёты", category: 6},
    {id: 17, name: "Axapta", category: 6},
    {id: 18, name: "Заказы ОКЕЙ", category: 7},
    {id: 19, name: "Кадры Axapta", category: 8},
    {id: 20, name: "Кадры 1С", category: 8},
    {id: 21, name: "Лифлеты", category: 9},
    {id: 22, name: "ЧЕСТНЫЙ ЗНАК", category: 9},
    {id: 23, name: "Ценники", category: 9},
    {id: 24, name: "УПД", category: 9},
    {id: 25, name: "Склады ответхранения", category: 9},
    {id: 26, name: "ОКЕЙ", category: 9},
    {id: 27, name: "МЕРКУРИЙ", category: 9},
    {id: 28, name: "Материалы", category: 9},
    {id: 29, name: "Локальные", category: 9},
    {id: 30, name: "Категорийный менеджмент", category: 9},
    {id: 31, name: "Импорт", category: 9},
    {id: 32, name: "ЕГИАС", category: 9},
    {id: 33, name: "Отчёты и OLAP", category: 9},
    {id: 34, name: "EDI", category: 9},
    {id: 35, name: "Axapta. РЦ", category: 10},
    {id: 36, name: "Axapta. Офис", category: 10},
    {id: 37, name: "Axapta. Интеграфия с 1С Окей", category: 10},
    {id: 38, name: "Qlikview", category: 11},
    {id: 39, name: "ЭЦП", category: 12},
    {id: 40, name: "Электронная почта", category: 12},
    {id: 41, name: "Расходные материалы", category: 12},
    {id: 42, name: "ПК и Ноутбук", category: 12},
    {id: 43, name: "Печать и сканирование", category: 12},
    {id: 44, name: "Каналы и сетевая связанность", category: 12},
    {id: 45, name: "Wi-Fi", category: 12},
    {id: 46, name: "Web домены", category: 12},
    {id: 47, name: "Электронная почта", category: 13},
    {id: 49, name: "ТСД РЦ", category: 13},
    {id: 50, name: "Расходные материалы", category: 13},
    {id: 51, name: "ПК и Ноутбук", category: 13},
    {id: 52, name: "Печать и сканирование", category: 13},
    {id: 53, name: "Каналы и сетевая связанность", category: 13},
    {id: 54, name: "Wi-Fi", category: 13},
    {id: 55, name: "POS РЦ", category: 13},
    {id: 56, name: "Расходные материалы", category: 14},
    {id: 57, name: "ПК и Ноутбук", category: 14},
    {id: 58, name: "Печать и сканирование", category: 14},
    {id: 59, name: "Каналы и сетевая связанность", category: 14},
    {id: 60, name: "Wi-Fi", category: 14},
    {id: 61, name: "Доступ", category: 15}
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
                CategoriesPO={CategoriesPO}
                CategoriesTech={CategoriesTech}
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