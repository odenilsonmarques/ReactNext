import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1>Bem - vindo a página Home</h1>

            <Link to="/sobre">
                Ir para sobre
            </Link><br /><br />

            <Link to="/contato">
                Ir para contatos
            </Link>
        </div>
    )
}