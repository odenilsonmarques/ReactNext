import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import './Repositorio.css';

function Repositorio() {

  // Estado responsável por armazenar os dados do repositório
  // retornados pela API do GitHub.
  // Inicialmente não temos nenhum dado, por isso usamos null.
  const [repositorio, setRepositorio] = useState(null);


  // Recupera o parâmetro "repositorio" que foi enviado pela URL.
  // Exemplo:
  // /repositorio/odenilsonmarques/vitrine/
  // Nesse caso:
  // repositorio = "odenilsonmarques/vitrine"
  // Aqui estamos dizendo Pegue da URL o parâmetro chamado repositorio
  // Pega o parâmetro "repositorio" da URL e armazena em uma variável chamada "repositorioUrl".
  const { repositorio: repositorioUrl } = useParams();


  // Executa quando a página de detalhes é carregada.
  //
  // Como o array de dependências contém "repositorio",
  // o efeito também será executado caso esse parâmetro seja alterado.
  useEffect(() => {

    async function loadRepository() {

      // Consulta a API do GitHub utilizando o nome do repositório
      // recebido através da URL.
      const response = await api.get(
        `repos/${decodeURIComponent(repositorioUrl)}`
      );

      // Salva os dados retornados pela API no estado.
      setRepositorio(response.data);
    }

    loadRepository();

  }, [repositorioUrl]);




  return (
    <div className="container">

      <h1>{repositorio?.name}</h1>

      <p>{repositorio?.description}</p>

      <p>
        Linguagem: {repositorio?.language}
      </p>

      <p>
        ⭐ Estrelas: {repositorio?.stargazers_count}
      </p>

      <p>
        🍴 Forks: {repositorio?.forks_count}
      </p>

      <p>
        🐛 Issues abertas: {repositorio?.open_issues_count}
      </p>

    </div>
  );
}

export default Repositorio;