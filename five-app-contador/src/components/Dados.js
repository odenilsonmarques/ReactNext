import { useState, useEffect } from "react";

function Dados() {

    // Guarda a lista de usuários recebida da API. Começamos com um array vazio porque ainda não temos usuários
    const [usuarios, setUsuarios] = useState([]);

    // Controla se a aplicação ainda está buscando os dados. Começamos com um true porque a busca ainda não aconteceu
    const [carregando, setCarregando] = useState(true);

    //Guarda uma mensagem de erro, caso a requisição falhe. Começameos com uma string vazia porque ainda nao ocorreu nenhum erro
    const [erro, setErro] = useState('');

    //Executa o efeito quando o componente é montado
    useEffect(() => {

        // funcção assincrona para buscar os usuários
        async function buscarDados() {

            try {
                //faz uma requisição http para a API
                // fetch() faz a requisição HTTP para o endereço informado.
                // await espera a conclusão daquela operação assíncrona antes de continuar a execução da função.
                // resposta recebe o objeto de resposta HTTP. Ainda não é a lista de usuários pronta para exibição.
                const resposta = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                //verifica se a resposta http indica um erro
                if (!resposta.ok) {
                    throw new Error("Não foi possível buscar os usuários.");
                }

                // Converte os dados recebidos em JSON para JavaScript.
                const dados = await resposta.json();

                // Guarda os usuários no estado.
                setUsuarios(dados);

            } catch (error) {
                // Se ocorrer um erro, guardamos uma mensagem para exibir na tela.
                setErro(error.message);
            } finally {
                // Independentemente do resultado, encerramos o estado de carregamento.
                setCarregando(false);
            }
        }
        // Executa a função que acabamos de criar
        buscarDados();

    }, []);


    // Se os dados ainda estiverem sendo buscados, mostramos esta mensagem.
    if (carregando) {
        return <h2>Carregando usuários...</h2>;
    }

    // Se ocorrer um erro, mostramos a mensagem e não tentamos exibir a lista.
    if (erro) {
        return <p>Erro: {erro}</p>;
    }

    // Quando os dados estiverem disponíveis, mostramos a lista.
    return (
        <div>
            <h1>Lista de usuários</h1>
            {usuarios.map((usuario) => (
                <div key={usuario.id}>
                    <h2>{usuario.name}</h2>
                    <p>E-mail: {usuario.email}</p>
                    <p>Cidade: {usuario.address.city}</p>
                </div>
            ))}
        </div>
    );
}

export default Dados;