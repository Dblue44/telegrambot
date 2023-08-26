import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginContainer from "../../Pages/Login/LoginContainer";
import CreateCaseContainer from "../../Pages/Cases/CasesCreateContainer";
import MainContainer from "../../Pages/Main/MainContainer";
import CasesContainer from "../../Pages/Cases/CasesContainer";
import Menu from "../Menu/Menu";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
//import {useEffect} from "react";
//import {useDispatch} from "react-redux";
//import {fetchCreatioData} from "../../Redux/features/auth/authSlice";
//import Button from "@mui/material/Button";
//import Loading from "../Main/Loading";


function App() {
    //const dispatch = useDispatch();

    // const getData = async () => {
    //     try{
    //         const data = await dispatch(fetchCreatioData());
    //         console.log(data);
    //     } catch (err) {
    //         toast.error("Не удалось подключиться к системе")
    //     }
    // };
    // const CreatioLogin = async () => {
    //     try{
    //         const data = await dispatch(fetchAuth());
    //     } catch (err) {
    //         toast.error("Не удалось подключиться к системе")
    //     }
    // };
    //
    // useEffect(() => {
    //
    // }, [])

    return (
        <>
            {/*<Loading />*/}
            {/*<Button onClick={getData} >ПОЛУЧИТЬ ДАННЫЕ</Button>*/}
            <div className="App">
                <Menu />
                <Routes>
                    <Route path="/" element={<MainContainer />}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/cases/create" element={<CreateCaseContainer/>}/>
                    <Route path="/cases/my" element={<CasesContainer/>}/>
                </Routes>

                <ToastContainer position='bottom-right' />
            </div>
        </>
    );
}

export default App;
