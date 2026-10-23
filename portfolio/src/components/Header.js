import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                Odenilson marques
            </div>

            <nav className="navigation">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    Inicio
                </NavLink>

                <NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>
                    Sobre
                </NavLink>

                <NavLink to="/skill" className={({ isActive }) => isActive ? "active" : ""}>
                    skills
                </NavLink>

                <NavLink to="/projetos" className={({ isActive }) => isActive ? "active" : ""}>
                    Projetos
                </NavLink>

                <NavLink to="/Contato" className={({ isActive }) => isActive ? "active" : ""}>
                    Contato
                </NavLink>
            </nav>

            <div className="header-action">
                <Link to="/contato">Vamos conversar ?</Link>
            </div>
        </header>
    )
}

export default Header;