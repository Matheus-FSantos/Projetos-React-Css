/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './contador.css';


class App extends Component {

  constructor(props){
    super(props); //Para poder acessar tydo de props
    this.state = {
      nome: 'Matheus',
      contador: 0
    };
    this.adicionar = this.adicionar.bind(this);
    this.subtrair = this.subtrair.bind(this);
    this.resetar = this.resetar.bind(this);
  }

  subtrair(){
    let state = this.state;
    state.contador = state.contador - 1;

    this.setState(
      {contador: state.contador}
    );
  }

  adicionar(){
    let state = this.state;
    state.contador = state.contador + 1;


    this.setState(
      {contador: state.contador}
    );
  }

  resetar(){
    let state = this.state;
    state.contador = 0;

    this.setState(
      {contador: state.contador}
    );
  }

  render(){
    return(
      <div class='principal'>
        <h1 class='titulo'>Contador</h1>
        
        <h2 class='numeros'>{this.state.contador}</h2>
        
        <button class='botao' onClick={this.adicionar}>Clique aqui para incrementar</button>
        
        
        <button class='botao' onClick={this.subtrair}>Clique aqui para decrementar</button>
        

        <button class='botao' onClick={this.resetar}>Clique aqui para resetar</button>
      </div>
    );
  }
}

export default App;