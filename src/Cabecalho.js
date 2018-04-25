import React, { Component } from 'react';
import './Cabecalho.css';

class Cabecalho extends Component{

    render(){
        return ( 
            <header className="App-header">
                <img src={this.props.imagem} className="App-logo" alt="logo" />
                <h1 className="App-title">Golden Memes</h1>
            </header>
        );
    }
}

export default Cabecalho;
       