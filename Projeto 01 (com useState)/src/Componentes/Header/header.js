import {Link} from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <div>
            <header>
                <h1 class="texto_cabecalho">
                    Sistemx
                </h1>
                <nav>
                    <div>
                        <Link class="link_cabecalho" to="/">Home</Link>
                        <Link class="link_cabecalho" to="/cadastro">Cadastro</Link>
                        <Link class="link_cabecalho" to="/situacao">Situacao</Link>
                        <Link class="link_cabecalho" to="/sobre">Sobre Nos</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;