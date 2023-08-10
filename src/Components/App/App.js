import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginContainer from "../../Pages/Login/LoginContainer";
import MainContainer from "../../Pages/Main/MainContainer";
//import CasesContainer from "../../Pages/Case/CasesContainer";
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
                <Route path="/cases" element={<MainContainer/>}/>
            </Routes>

            <ToastContainer position='bottom-right' />
        </div>
    );
}

export default App;
