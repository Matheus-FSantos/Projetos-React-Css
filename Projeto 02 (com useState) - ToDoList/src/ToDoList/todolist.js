import { useState } from 'react';
import './todolist.css';

export default function ToDo(){
    const[tarefa, setTarefa] = useState('');
    const[array, setArray] = useState([]); //Informando com '[]' que é um array



    function registrarTarefas(dados){
        dados.preventDefault();

        setArray([...array, tarefa]);
        setTarefa('');
    }

    function limparTarefas(){
        setArray([]);
    }

    return(
        <div class='principal'>
            <div class='conteinerPrincipal'>
                <h1 class='tituloConteinerPrincipal'>To<span class='preto'>Do</span> List</h1>
                <div>
                    <form class='formularioConteinerPrincipal' onSubmit={registrarTarefas}>
                        <input class='inputConteinerPrincipal' placeholder='Informe uma tafera...' required value={tarefa} onChange={(evento) => setTarefa(evento.target.value)}/>
                        <button class='botaoAddConteinerPrincipal' type='submit'>ADD</button>
                        <button class='botaoDelConteinerPrincipal' type='button' onClick={limparTarefas}>DEL</button>
                    </form>
                </div>

                <div class='conteinerTarefas'>
                    <ul class='listaTarefas'>
                        {array.map(tarefas => (<li class='tarefas' key={tarefas}>{tarefas}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    );
}