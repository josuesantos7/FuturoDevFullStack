import { useState } from 'react';
import ListaTarefas from "./components/ListaTarefas";
import "./App.css"

function App() {
  // Estado inicial vazio para as tarefas
  const [tarefas, setTarefas] = useState([]);

  return (
    <div className='main'>
      <h1 className='titulo-main'>Minhas tarefas</h1>
      <div className='container-tarefa'>
        {/* Passa as tarefas e a função de atualização para o componente ListaTarefas */}
        <ListaTarefas tarefas={tarefas} setTarefas={setTarefas} />
      </div>
    </div>
  );
}

export default App;





