import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginContainer from "../../Pages/Login/LoginContainer";
import CreateCaseContainer from "../../Pages/Cases/CasesCreateContainer";
import MainContainer from "../../Pages/Main/MainContainer";
import CasesContainer from "../../Pages/Cases/CasesContainer";
import Menu from "../Menu/Menu";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function App() {
    return (
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
    );
}

export default App;
