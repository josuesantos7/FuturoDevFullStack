import { useState } from "react";

function ListaTarefas({ tarefas, setTarefas }) {
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            const novaTarefaObj = {
                id: tarefas.length + 1, // Simples ID sequencial
                descricao: novaTarefa,
            };
            // Atualiza o estado das tarefas
            setTarefas([...tarefas, novaTarefaObj]);
            setNovaTarefa(''); // Limpa o input após adicionar
        }
    };

    const removerTarefa = (id) => {
        const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
        setTarefas(tarefasAtualizadas);
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

            <ul>
                {tarefas.length > 0 ? (
                    tarefas.map(tarefa => (
                        <li key={tarefa.id}>{tarefa.descricao}
                        <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
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
