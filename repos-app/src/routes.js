import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;