import React, { Component } from 'react';

class ListaDeCategorias extends Component {
    
    _handleEventoInput(e) {
        if(e.key === 'Enter') {
            const valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria)
        }
    }
    
    render() { 
        return (
            <section>
                <ul>
                    {this.props.categorias.map((categoria, index) => {
                        return <li key={index}>{categoria}</li>
                    })}
                </ul>
                <input type="text" name="" id="" placeholder='Adicionar Categoria' onKeyUp={this._handleEventoInput.bind()}/>
            </section>
        ) 
    }
}
 
export default ListaDeCategorias;
