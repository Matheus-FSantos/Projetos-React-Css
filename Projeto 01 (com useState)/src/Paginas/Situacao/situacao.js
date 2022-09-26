import {useState} from 'react';
import './situacao.css';

function Situacao(){
    const nomeCliente = 'Joao Pedro';
    const [situacao, setSituacao] = useState('PRIVADO');

    return(
        <div class='conteinerPrincipalSituacao'>
            <div>
                <h1>Use State</h1>
            </div>
            <div>
                <form>
                <p>O Sr. {nomeCliente} é classificado como <strong>{situacao}</strong></p>
                    <button type='button' onClick={() => setSituacao('BRONZE')}>Cliente Bronze</button>
                    <br/><br/>
                    <button type='button' onClick={() => setSituacao('PLATINA')}>Cliente Platina</button>
                    <br/><br/>
                    <button type='button' onClick={() => setSituacao('PRIVADO')}>Reseta Cliente</button>
                </form>
            </div>
        </div>
    );
}

export default Situacao;