import { Link } from "react-router-dom"

export default function Erro() {
    return (
        <div>
            <h1>404 - página nçao encontrada !</h1>
            <Link to="/">
                Ir para a pagina inicial
            </Link>
        </div>
    )
}