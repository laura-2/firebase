import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro"
import Principal from "./Principal";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro/>}/>
                
                <Route path="/login" element={<Login/>}/>
                
                <Route path="/principal" element={<Principal/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;