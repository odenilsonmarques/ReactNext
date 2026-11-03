// Usamos a desestruturação para receber a propriedade aluno
// O React passa as propriedades para o componente por meio de um objeto chamado props. 
// A desestruturação permite acessar diretamente a propriedade aluno, sem precisar escrever props.aluno.
function Nome({ aluno }) {
    return (
        <p>Bem-vindo: {aluno}</p>
    );
}

export default Nome;