
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />

                {/* esses dois pontos e a repetição do nome repositorio identifica que esta rota espera um parametro */}
                <Route path="/repositorio/:repositorio" element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;