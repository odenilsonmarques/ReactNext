import { useState } from "react";

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  // useState na forma de objeto para guardar as informação 
  const [user, setUser] = useState({});

  function enviarDados(e) {
    e.preventDefault();

    alert('Cadastro realizado com sucesso !');

    //chamando o objeto quando formulario for chamado
    setUser({
      nome: nome,
      email: email,
      telefone: telefone,
    })
  }

  return (
    <div>
      <h1>Cadastro de usuário </h1>

      <form onSubmit={enviarDados}>

        <label>Nome</label><br />
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome" /><br /><br />

        <label>email</label><br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email" /><br /><br />

        <label>telefone</label><br />
        <input
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Digite seu telefone" /><br /><br />

        <button type="submit">Cadastrar</button>
      </form><br /><br />

      <div>
        <p>Dados do cadastro</p>
        <span>Nome:{user.nome}</span><br />
        <span>Email:{user.email}</span><br />
        <span>telefone:{user.telefone}</span>
      </div>
    </div>
  );
}

export default App;
