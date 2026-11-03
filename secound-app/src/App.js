import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador !')

  function changeNome() {
    setAluno('teste');
  }

  return (
    <div>
      <h1>Estudo sobre use state</h1>
      <span>Aluno:{aluno}</span>
      <br /><br />

      <button onClick={changeNome}>
        Clique aqui
      </button>
    </div>
  );
}

export default App;
