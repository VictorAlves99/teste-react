import React, { Component } from 'react';
import './Imagens.css';

class Imagens extends Component{

    render(){
        return ( 
            <header className="imagens">
                <img className='img' src={this.props.imagem}/>
                <h1 className='text'>{this.props.texto}</h1>
            </header>
        );
    }
}

export default Imagens;