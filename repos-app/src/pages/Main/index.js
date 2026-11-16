// O useState é um Hook do React que permite criar e controlar estados dentro de componentes funcionais.
import { useState } from "react";

//importamos nossa instância do Axios.
import api from '../../services/api';


function Main() {

    //usuario:guarda o valor inicial
    //setUsuario:permiti atualizar este valor
    const [usuario, setUsuario] = useState('');

    // Estado responsável por armazenar os dados recebidos
    // Começa como null porque ainda não pesquisamos nenhum usuário
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);


    //função responsável por capturar o que foi digitado
    function handleInputChange(event) {

        // event: representa o evento ocorrido no campo.
        // event.target: representa o elemento que disparou o evento (nosso input).
        // event.target.value: contém o texto digitado.
        // setUsuario(): atualiza nosso estado
        setUsuario(event.target.value);
    }



    // função responsável por pesquisar um usuário no GitHub.
    async function handleSubmit(event) {
        // impede que o formulario recarregue a pagina.
        event.preventDefault();

        //verifica se o campo está vazio
        if (!usuario.trim()) {
            alert('Digite um nome de usuário');
            return;
        }

        try {
            //faz a reuisição para a API
            const response = await api.get(`/users/${encodeURIComponent(usuario.trim())}`);

            // Armazena os dados recebidos no estado.
            setUsuarioEncontrado(response.data);

            console.log(response.data);

        } catch (error) {
            //Caso o usuário não for encontrado ou ocorra outro erro.
            console.log(error);

            setUsuarioEncontrado(null);

            alert('Não foi possivel encontrar esse usuário.');

        }
    }


    // JSX responsável por renderizar a interface da página.
    return (
        <div className="container">
            <h1>GitHub Explorer</h1>

            <p>Pesquise usuários e explore seus repositórios</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o nome do usuário"
                    value={usuario}
                    // executa nossa função quando o usuário digita e atualiza o estado.
                    onChange={handleInputChange}
                />

                <button type="submit">
                    Pesquisar
                </button>
            </form>

            {/* Exibe os dados somente quando existir um usuário encontrado */}
            {usuarioEncontrado && (
                <div>

                    <img
                        src={usuarioEncontrado.avatar_url}
                        alt="Avatar do usuário"
                        width="100"
                    />

                    <h2>{usuarioEncontrado.name || usuarioEncontrado.login}</h2>

                    <p>Login: {usuarioEncontrado.login}</p>

                    <p>Biografia: {usuarioEncontrado.bio || 'Não informada'}</p>

                    <p>
                        Repositórios públicos: {usuarioEncontrado.public_repos}
                    </p>

                    <a
                        href={usuarioEncontrado.html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Acessar perfil no GitHub
                    </a>

                </div>
            )}

        </div>
    );
}

export default Main