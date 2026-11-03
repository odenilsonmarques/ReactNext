
// Importamos dois Hooks do React:
// useState: permite criar e controlar um estado (uma informação que pode mudar).
// useEffect: permite executar efeitos quando o componente é renderizado
// ou quando determinadas dependências mudam.
import { useState, useEffect } from "react";

// Criamos um componente chamado App.
// Um componente é uma função que retorna o que queremos mostrar na tela.
function App() {

  // Criamos um estado chamado contador, que começa com o valor 0.
  //
  // contador: guarda o valor atual do contador.
  // setContador: é a função que usamos para alterar esse valor.
  // useState(0): define que o valor inicial será 0.
  //
  // Quando usamos setContador para atualizar o estado,
  // o React renderiza o componente novamente.
  const [contador, setContador] = useState(0);

  // O useEffect permite executar um código depois que o React
  // atualiza a interface, conforme as dependências informadas.
  useEffect(() => {

    // Exibimos uma mensagem no console do navegador.
    // O valor de contador é o valor atual disponível nesta execução do efeito.
    console.log('o contador mudou:', contador);

  // Este array informa ao React que o efeito depende de contador.
  // O efeito executa na montagem inicial e novamente quando contador muda.
  }, [contador]);

  // Este alert está comentado, porque começa com //.
  // Portanto, não será executado.
  // Se removermos as barras, o alert será executado durante a renderização.
  // Isso não é recomendado: efeitos como esse devem ser tratados adequadamente.
  // alert('teste')

  // O return define a interface que o componente vai mostrar na tela.
  return (
    <div>

      {/* Mostramos na tela o valor atual guardado em contador. */}
      <h2>Contador: {contador}</h2>

      {/* Criamos um botão.
          Quando o usuário clica nele, a função do onClick é executada. */}
      <button onClick={() => setContador(contador + 1)}>

        {/* Este é o texto que aparece dentro do botão. */}
        incrementar

      </button>
    </div>
  );
}

// Exportamos o componente App para que ele possa ser importado
// e utilizado em outras partes da aplicação.
export default App;