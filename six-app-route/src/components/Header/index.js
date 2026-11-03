
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Minha Aplicação usando o recurs de Cabeçalho</h1>

            <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/sobre">Sobre</Link><br/>
                <Link to="/contato">Contato</Link><br/>
            </nav>
        </header>
    );
}

export default Header;
