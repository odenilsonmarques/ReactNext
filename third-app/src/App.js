import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {

      // URL da API que será consultada.
      // Essa API retorna uma lista de posts em formato JSON.
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      
      // O fetch() é uma função nativa do JavaScript utilizada para fazer
      // requisições HTTP (GET, POST, PUT, DELETE, etc.).
      // Neste caso, estamos fazendo uma requisição GET para buscar os dados da API.
      //
      // Como a resposta da internet não é imediata, o fetch() retorna uma Promise.
      // Uma Promise representa uma operação assíncrona que será concluída no futuro,
      // quando a resposta da API chegar.
      fetch(url)

        // O primeiro .then() é executado quando a Promise do fetch é resolvida,
        // ou seja, quando o servidor responde à requisição.
        //
        // A variável "r" representa o objeto Response retornado pela API.
        // Porém, o corpo da resposta ainda não está em formato JavaScript.
        //
        // O método r.json() lê o conteúdo da resposta e converte o JSON recebido
        // em um objeto ou array JavaScript.
        //
        // Como essa conversão também leva um pequeno tempo, r.json() também
        // retorna uma Promise.
        .then((r) => r.json())

        // Este segundo .then() só é executado quando o JSON já foi convertido.
        //
        // A variável "json" contém os dados prontos para serem utilizados
        // dentro da aplicação.
        .then((json) => {

          // Atualiza o estado "nutri" com os dados recebidos da API.
          //
          // Quando chamamos setNutri(), o React salva esses dados no estado
          // e automaticamente renderiza novamente o componente para exibir
          // as novas informações na tela.
          setNutri(json);

          console.log(json); // Exibe os dados no console para depuração.
        });

    }

    loadApi();

  }, []);


  // O return define o que será renderizado na tela.
  //
  // Em React, utilizamos JSX (JavaScript XML), que permite escrever
  // uma sintaxe parecida com HTML dentro do JavaScript.
  //
  // Quando o componente é executado, o React lê esse JSX e o converte
  // para elementos reais do DOM do navegador.
  return (
    <div className='container'>

      {/* Cabeçalho da aplicação */}
      <header>

        {/* Texto que será exibido dentro do cabeçalho */}
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className='post'>

            {/* Título do post */}
            <strong className='titulo'>{item.titulo}</strong>

             {/* Imagem do post */}
            <img src={item.capa} alt={item.titulo}  className='capa'/>

            {/* Subtítulo do post */}

            <p>
              {item.subtitulo}
            </p>
           
            {/* Botão para acessar o link do post */}
            <a href={item.link} target='_blank' rel='noopener noreferrer' className='botao'>Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
