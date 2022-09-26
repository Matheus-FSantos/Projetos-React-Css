import './sobre.css';

function Sobre(){
    return(
        <div class='conteinerPrincipalSobre'>
            <div>
                <h1>Sobre Nos</h1>
            </div>
            <hr/>
            <div>
                <p>ADO02 da máteria Programação WEB do curso Análise e desenvolvimento de Sistemas do campos SENAC - St Amaro</p>
                <p>Atividade desenvolvida para estudar sobre JSX e o uso do useState em aplicações web</p>
                <hr/>
                <h3 align="center">Créditos:</h3>
                <p>Alunos:</p>
                <ul class='lista'>
                    <li class='lista_nomes'><a href="https://github.com/Matheus-FSantos" target="_blank">Matheus Ferreira Santos</a></li>
                    <li class='lista_nomes'><a  href="https://github.com/LucasRyuMuraoka" target="_blank">Lucas Ryu Muraoka</a></li>
                </ul>
                <p>Professor:</p>
                <ul class='lista'>
                    <li class='lista_nomes'><a href="https://github.com/ProfCarlosVerissimo" target="_blank">Carlos Henrique Veríssimo Pereira</a></li>
                </ul>
                <div align="center">
                    <img alt="senac-sp" height="auto" width="85" src="https://seeklogo.com/images/S/Senac-logo-7627EC15FE-seeklogo.com.png"/>
                </div>
            </div>
        </div>
    );
}

export default Sobre;