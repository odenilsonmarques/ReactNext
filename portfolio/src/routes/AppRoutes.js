import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

function AppRoutes() {
    return (
        // O BrowserRouter é quem habilita o sistema de navegação do React Router
        <BrowserRouter>
            {/* Route é o conjunto das rotas da aplicação */}
            <Routes>
                {/* Route são as rotas individuais */}
                <Route path="/" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
        </ BrowserRouter>
    );
}

export default AppRoutes;