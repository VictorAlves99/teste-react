import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Imagens from './Imagens.js';
import Menu from './Menu.js';
import Cabecalho from './Cabecalho.js';
import poderoso from './logo.jpg';
import norris from './norris.jpg';
import josias from './josias.jpg';
import irineu from './irineu.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho imagem={josias}/>
        <Menu/>
        <div>
          <div className='div1'>
            <Imagens imagem={poderoso} texto='Poderoso Castiga'/>
            <Imagens imagem={norris} texto='Chuck Norris'/>
            <Imagens imagem={irineu} texto='Irineu'/>
          </div>
        </div>
        <div>
          <div className='div2'>
            <Imagens imagem={poderoso} texto='Poderoso Castiga'/>
            <Imagens imagem={norris} texto='Chuck Norris'/>
            <Imagens imagem={irineu} texto='Irineu'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
