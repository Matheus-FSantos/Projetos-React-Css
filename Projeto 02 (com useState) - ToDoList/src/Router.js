import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ToDo from './ToDoList/todolist.js';

export default function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ToDo/>}/>
            </Routes>
        </BrowserRouter>
    );
}