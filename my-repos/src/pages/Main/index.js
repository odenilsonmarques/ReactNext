// Importa os hooks useState e useEffect do React.
// O useState é utilizado para criar e controlar estados dentro do componente.
// O useEffect Permite executar uma função depois que o componente é renderizado ou quando algum valor utilizado pelo componente é alterado.
import { useState, useEffect } from 'react';

// Importa os ícones do GitHub e do símbolo de adição (+)
// da biblioteca react-icons.
import { FaBars, FaGithub, FaPlus, FaTrash } from 'react-icons/fa';

// Importa a configuração da API criada em outro arquivo.
// Esse objeto geralmente já possui a URL base configurada.
import api from '../../services/api';


import {Link} from 'react-router-dom';

// Importa o arquivo de estilos da página.
import './Main.css';

// Componente principal da página.
function Main() {

  /*
    Estado responsável por armazenar o valor digitado no campo de texto.

    - newRepo: valor atual do input.
    - setNewRepo: função utilizada para atualizar esse valor.

    O valor inicial é uma string vazia ('').
  */
  const [newRepo, setNewRepo] = useState('');

  // Estado responsável por armazenar a lista de repositórios.
  //
  // Ao criar o estado, verificamos se já existem repositórios
  // salvos no localStorage.
  //
  // 1. localStorage.getItem() busca os dados salvos.
  // 2. Se existirem dados, JSON.parse() transforma a string
  //    novamente em um array de objetos.
  // 3. Se não existirem dados, utilizamos um array vazio.
  //
  // Dessa forma, quando a aplicação for aberta novamente,
  // o estado já será inicializado com os repositórios salvos.
  const [repositorios, setRepositorios] = useState(() => {

    const repositoriosSalvos = localStorage.getItem('repositorios');

    if (repositoriosSalvos) {
      return JSON.parse(repositoriosSalvos);
    }

    return [];
  });




  // Executa sempre que o estado "repositorios" for alterado.
  // O useEffect observa as variáveis informadas no segundo parâmetro.
  // Como "repositorios" está na lista de dependências abaixo,
  // sempre que adicionarmos ou removermos um repositório,
  // este efeito será executado novamente.
  useEffect(() => {

    // O localStorage permite armazenar informações no navegador
    // para que elas continuem disponíveis mesmo depois que a página
    // seja atualizada.
    // O localStorage trabalha com valores do tipo texto (string).
    // Por isso, utilizamos JSON.stringify() para transformar
    // o array de objetos em uma string antes de salvá-lo.
    localStorage.setItem('repositorios', JSON.stringify(repositorios));

  }, [repositorios]);


  /*
    Função executada quando o formulário é enviado.

    O parâmetro "e" representa o evento do formulário.
  */
  async function handleSubmit(e) {

    // Impede o comportamento padrão do formulário,
    // que seria recarregar a página.
    e.preventDefault();


    // Remove espaços em branco do início e do fim da string.
    // Exemplo:
    // "   react   " -> "react"
    // "     " -> ""
    //o returno encerra a função, sem ele o código continuaria a ser executado mesmo com o input vazio
    if (newRepo.trim() === '') {
      alert('Digite o nome de um repositório.');
      return;
    }



    // Verifica se já existe um repositório na lista com o mesmo nome
    // digitado pelo usuário.
    //
    // O método find() percorre o array "repositorios" procurando
    // o primeiro item que atende à condição informada.
    const repositorioJaExiste = repositorios.find(
      (repo) => repo.name === newRepo
    );

    // Se find() encontrar um repositório, a variável
    // "repositorioJaExiste" receberá o objeto encontrado.
    //
    // Caso nenhum repositório seja encontrado, ela receberá undefined.
    if (repositorioJaExiste) {
      alert('Este repositório já foi adicionado.');
      setNewRepo(''); // Limpa o campo de texto
      return;
    }






    // Tenta buscar o repositório na API do GitHub.
    try {
      /*
        Faz uma requisição para a API do GitHub utilizando o nome
        digitado pelo usuário no input.
  
        Exemplo:
        newRepo = "facebook/react"
  
        Requisição:
        GET /repos/facebook/react
      */
      const response = await api.get(`repos/${newRepo}`);

      /*
        Cria um objeto contendo apenas os dados que queremos salvar.
  
        response.data.full_name retorna algo como:
        "facebook/react"
      */
      const data = {
        name: response.data.full_name,
      };

      /*
        Atualiza o estado adicionando o novo repositório ao array existente.
  
        O operador ... (spread) copia todos os itens atuais do array
        e adiciona o novo objeto ao final.
      */
      setRepositorios([...repositorios, data]);

      // Limpa o campo de texto após adicionar o repositório.
      setNewRepo('');

      // Exibe no console todos os dados retornados pela API.
      console.log(response.data);


    } catch (error) {
      // O bloco catch é executado sempre que ocorrer algum erro durante a requisição.
      // Aqui podemos tratar diferentes situações, como:
      // 404 -> Repositório não encontrado.
      // 500 -> Erro interno do servidor.
      // Sem internet -> Não foi possível conectar à API.

      if (error.response.status === 404) {

        alert('Repositório não encontrado.');

      } else {

        alert('Ocorreu um erro inesperado.');

      }
    }
  }

  /*
    Função executada sempre que o usuário digita algo no input.

    O evento contém o valor atual do campo em e.target.value.
    Esse valor é salvo no estado newRepo.
  */
  function handleAddRepository(e) {
    setNewRepo(e.target.value);
  }

  // Função responsável por remover um repositório da lista.
  //
  // Ela recebe como parâmetro o nome do repositório que deverá ser removido.
  // Para isso, utilizamos o método filter(), que percorre todo o array
  // de repositórios e cria um NOVO array contendo apenas os itens que
  // atendem à condição informada.
  //
  // Neste caso, mantemos apenas os repositórios cujo nome seja diferente
  // do repositório selecionado para exclusão.
  //
  // Exemplo:
  //
  // Lista original:
  // [
  //   { name: "facebook/react" },
  //   { name: "vuejs/vue" },
  //   { name: "angular/angular" }
  // ]
  //
  // Repositório removido:
  // "vuejs/vue"
  //
  // Nova lista gerada pelo filter():
  // [
  //   { name: "facebook/react" },
  //   { name: "angular/angular" }
  // ]
  //
  // Por fim, atualizamos o estado utilizando setRepositorios().
  // Como o estado foi alterado, o React renderiza novamente a interface
  // e o repositório deixa de ser exibido na tela.
  function handleDeleteRepository(nomeRepositorio) {

    const novaLista = repositorios.filter((repo) => {
      return repo.name !== nomeRepositorio;
    });

    setRepositorios(novaLista);

  }


  // JSX responsável por renderizar a interface da página.
  return (
    <div className="container">

      {/* Título da página com o ícone do GitHub */}
      <h1>
        <FaGithub size={28} />
        {' '}
        Meus Repositórios
      </h1>

      {/* Formulário para adicionar um novo repositório */}
      <form onSubmit={handleSubmit}>

        <input
          id="nome"
          type="text"
          name="nome"

          // O valor do input é controlado pelo estado newRepo.
          value={newRepo}

          // Atualiza o estado sempre que o usuário digita algo.
          onChange={handleAddRepository}
        />

        {/* Botão responsável por enviar o formulário */}
        <button type="submit" className="btn-submit">

          {/* Ícone de adição (+) */}
          <FaPlus size={16} />

        </button>

      </form>


      <ul className="lista-repositorios">

        {repositorios.map(repo => (

          <li key={repo.name}>

            <span>{repo.name}</span>

            <div className="acoes">
              <button type="button" onClick={() => handleDeleteRepository(repo.name)}>
                <FaTrash size={16} />
              </button>

              <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                <FaBars size={20} />
              </Link>
            </div>


          </li>

        ))}

      </ul>

    </div>
  );
}

// Exporta o componente para que ele possa ser utilizado em outras partes da aplicação.
export default Main;