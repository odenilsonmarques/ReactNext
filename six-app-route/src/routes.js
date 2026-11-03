// Importamos os componentes responsáveis pelo sistema de rotas da aplicação.

// BrowserRouter: É o componente que habilita a navegação entre páginas utilizando, a URL do navegador, sem recarregar toda a aplicação.

// Routes: É um contêiner que agrupa todas as rotas da aplicação. Ele analisa a URL atual e decide qual componente deve ser renderizado.

// Route: Representa uma rota individual. Cada Route associa um caminho (path) a um componente (element).
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'

// Importação dos componentes que representam cada página da aplicação.
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Produto from './pages/Produto';
import Erro from './pages/Erro'

const AppRoutes = () => {
    return (

        // BrowserRouter envolve toda a aplicação que utilizará rotas.
        // Ele monitora as alterações da URL e informa ao React qual
        // componente deve ser exibido.
        <BrowserRouter>


            {/* Cabeçalho compartilhado entre as páginas */}
            <Header />


            {/* 
                O componente Routes agrupa todas as rotas.

                Sempre que a URL mudar, o React Router percorre
                as rotas declaradas abaixo e renderiza apenas
                aquela que corresponde ao endereço acessado.
            */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />


                {/*
                    Exemplo de rota dinâmica.
                    ":id" representa um parâmetro da URL.
                    Exemplo:
                    /produto/10
                    /produto/25
                    /produto/150

                    Dentro do componente Produto é possível recuperar
                    esse valor utilizando o hook useParams() definido no componente produto.
                */}
                <Route path="/produto/:id" element={<Produto />} />


                {/*
                    Rota coringa (wildcard).

                    O caractere "*" captura qualquer URL que não
                    corresponda às rotas declaradas acima.

                    Geralmente é utilizada para exibir uma página
                    personalizada de erro 404 (Página não encontrada).
                */}
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
