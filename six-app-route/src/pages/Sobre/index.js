import { Link } from "react-router-dom"

export default function Sobre() {
    return (
        <div>
            <h1>Bem - vindo a página Sobre</h1>
            <Link to="/">
                Ir para a pagina inicial
            </Link>
        </div>
    )
}