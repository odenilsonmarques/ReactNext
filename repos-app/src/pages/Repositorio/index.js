import {useState} from 'react'; 

function Repositorio() {
    //Guarda o texto que o usuário digita no input
    const [novoRepo, setNovoRepo] = useState('');

    function handleInputChange(event) {
        setNovoRepo(event.target.value);
    }

    return(
        <div className="container">
            <h1>Meus Repositórios</h1>
            <p>Adicione repositórios no formato <strong>usuario/repositorio</strong></p>

            <form>
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
        </div>
    );
}

export default Repositorio;