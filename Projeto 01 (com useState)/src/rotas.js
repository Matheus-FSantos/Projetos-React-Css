import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Paginas/Home/home.js'
import Cadastro from './Paginas/Cadastro/cadastro.js'
import Situacao from './Paginas/Situacao/situacao.js'
import Sobre from './Paginas/Sobre/sobre.js'
import Erro from './Paginas/Error/error.js'

import Header from './Componentes/Header/header.js'

function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/situacao' element={<Situacao/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;