import { useState } from 'react';
import api from '../../services/api';

function Repositorio() {
    //Guarda o texto que o usuário digita no input
    const [novoRepo, setNovoRepo] = useState('');


    //Guarda a lista de repositório encontrado para exibir nos cards
    const [repositorios, setRepositorios] = useState([]);

    function handleInputChange(event) {
        setNovoRepo(event.target.value);
    }


    async function handleSubmit(event) {
        event.preventDefault();

        const repoFormatado = novoRepo.trim();

        if (!repoFormatado) {
            alert('Digite o nome do repositório (ex: facebook/react)');
            return;
        }

        //Verifica se o  repositório já foi adicionado para evitar duplicidade
        const jaExiste = repositorios.some(
            (repo) => repo.full_name.toLowerCase() === repoFormatado.toLowerCase()
        );

        if (jaExiste) {
            alert('Este repositório já está na sua lista');
            return;
        }

        try {
            //Na API do GitHub, a rota de um repositório específico é /repos/dono/nome-repo
            const response = await api.get(`/repos/${repoFormatado}`);

            //Mantém os repositórios anteriores e adiciona o novo
            setRepositorios([...repositorios, response.data]);

            // Limpa o campo de texto após adicionar
            setNovoRepo('');

        } catch (error) {
            console.log(error);
            alert('Repositório não encontrado. Use o formato: usuario/repositirio');
        }
    }

    return (
        <div className="container">
            <h1>Meus Repositórios</h1>
            <p>Adicione repositórios no formato <strong>usuario/repositorio</strong></p>

            {/* Conectamos a função handleSubmit a este formulario  */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ex: facebook/react"
                    value={novoRepo}
                    onChange={handleInputChange}
                />

                <button type="submit">
                    Adicionar
                </button>
            </form>

            {/* LIat de card dos repositórios adicionados */}
            <div className="cards-container">
                {repositorios.map((repo) => (
                    <div key={repo.id} className="card">
                        <img
                            src={repo.owner.avatar_url}
                            alt={repo.owner.login}
                            width="50"
                        />
                        <h3>{repo.full_name}</h3>
                        <p>{repo.description || 'Sem descrição informada'}</p>
                        <p>
                            Estrelas: {repo.stargazers_count} | Forks: {repo.forks_count}
                        </p>

                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Acessar no GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Repositorio;