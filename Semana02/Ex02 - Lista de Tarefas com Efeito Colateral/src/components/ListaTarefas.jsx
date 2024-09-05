import { useEffect, useState } from "react";

function ListaTarefas({ tarefas, setTarefas }) {
    const [novaTarefa, setNovaTarefa] = useState('');

    useEffect(() => {
        const tarefasSalvas = localStorage.getItem("tarefas")

        if(tarefasSalvas) {
            setTarefas(JSON.parse(tarefasSalvas))
        }
    }, [setTarefas])

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            const novaTarefaObj = {
                id: tarefas.length + 1, // Simples ID sequencial
                descricao: novaTarefa,
            };

            const tarefasAtualizadas = [...tarefas, novaTarefaObj];

            setTarefas(tarefasAtualizadas);
            setNovaTarefa(''); // Limpa o input após adicionar

            localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
        }
    };

    const removerTarefa = (id) => {
        const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
        setTarefas(tarefasAtualizadas);

        localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
    };

    return (
        <div className="container-listatarefa">
            <input 
                type="text" 
                value={novaTarefa} 
                onChange={(e) => setNovaTarefa(e.target.value)} 
                placeholder="Digite uma nova tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>

            <ul className="content-ul">
                {tarefas.length > 0 ? (
                    tarefas.map(tarefa => (
                        <li className="content-li"   key={tarefa.id}>
                            
                            <div className="content-descricao">
                                {tarefa.descricao}
                            </div>
                            <div className="content-buttonDelete">
                                <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
                            </div>
                        </li>
                    ))
                ) : (
                    <span>Não existe tarefas cadastradas.</span>
                )}
            </ul>
        </div>
    );
}

export default ListaTarefas;
