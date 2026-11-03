import { Link } from "react-router-dom"

export default function Contato() {
    return (
        <div>
            <h1>Bem - vindo a página Contato</h1>
            <span>Email:odmarques@gmail.com</span><br />

            <Link to="/">
                Ir para a pagina inicial
            </Link>
        </div>
    )
}