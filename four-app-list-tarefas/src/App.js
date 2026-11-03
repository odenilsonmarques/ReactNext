import { useState } from "react";

function App() {
  const [input, setInput] = useState('');

  // usando useState como array
  const [tarefas, setTarefa] = useState([
    'estudar informática',
    'estudar portugues'
  ]);

  function CadastrarTarefa(e) {
    e.preventDefault();
    alert('teste');

    setTarefa([...tarefas, input])
    setInput('');

  }

  return (
    <div>
      <h1>Bem - vindo ao APP de cadastro de tarefas</h1>
      <form onSubmit={CadastrarTarefa}>
        <label>Digite o nome da tarefa</label><br />
        <input
          valeu={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="estudar java..." /><br /><br />

        <button type="submit">Cadastrar </button>
      </form><br /><br />

      <h4>Lista de tarefas</h4>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
