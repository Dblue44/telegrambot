import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "../../Pages/Login/Login";
import CreateCaseContainer from "../../Pages/CreateCase/CreateCaseContainer";
import Menu from "../Menu/Menu";

function App() {
    return (
        <div className="App">
            <Menu />
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
