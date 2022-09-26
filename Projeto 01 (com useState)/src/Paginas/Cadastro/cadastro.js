import {useState} from 'react';
import './cadastro.css';

function Cadastro(){
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [dadosUsuario, setDados] = useState(
        {nomeDados:'PRIVADO', emailDados:'PRIVADO'}
    );

    function resgistrarUsuario(dados){
        dados.preventDefault();

        
        setDados(
            {nomeDados:nome, emailDados:email}
        );
        setNome('');
        setEmail('');
        
    }

    return(
        <div class='conteinerPrincipal'>
            <div>
                <h1>Cadastre-se</h1>
                <form onSubmit={resgistrarUsuario}>
                    <div class='conteinerSecundario'>
                        <label>Nome:</label>
                        <br/>
                        <input class='inputTextos' type='text' placeholder='Informe seu nome' value={nome} onChange={(evento) => setNome(evento.target.value)}></input>
                        <br/><br/>

                        <label>Email:</label>
                        <br/>
                        <input class='inputTextos' type='email' placeholder='Informe seu email' value={email} onChange={(evento) => setEmail(evento.target.value)}></input>
                        <br/><br/>

                        <div align='center'>
                            <button class='botaoCadastro' type='submit'>Registrar</button>
                        </div>
                    </div>
                </form>
            </div>

            <br/>
            <hr/>

            <div align='center'>
                <br/>
                <span>Bem vindo Sr. <strong>{dadosUsuario.nomeDados}</strong>, o seu email é <strong>{dadosUsuario.emailDados}</strong></span>
            </div>
        </div>
    );
}

export default Cadastro;