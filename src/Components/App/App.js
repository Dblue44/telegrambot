import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginContainer from "../../Pages/Login/LoginContainer";
import CreateCaseContainer from "../../Pages/Cases/CasesCreateContainer";
import MainContainer from "../../Pages/Main/MainContainer";
import CasesContainer from "../../Pages/Cases/CasesContainer";
import Menu from "../Menu/Menu";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllMyCases} from "../../Redux/features/cases/casesSlice";
import Button from "@mui/material/Button";

function App() {
    const myCases = useSelector((store) => store.cases.cases);
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const data = await dispatch(fetchAllMyCases("213"));
            return data;
        } catch (err) {
            toast.error("Не удалось подключиться к серверу")
        }
    };


    return (
        <div className="App">
            <Menu />
            <Button onClick={getData}>Получить заявки</Button>
            <Routes>
                <Route path="/" element={<MainContainer />}/>
                <Route path="/login" element={<LoginContainer/>}/>
                <Route path="/cases/create" element={<CreateCaseContainer/>}/>
                <Route path="/cases/my" element={<CasesContainer/>}/>
            </Routes>

            <ToastContainer position='bottom-right' />
        </div>
    );
}

export default App;
