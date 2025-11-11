
import React from 'react';


function CardConsole(props) {
  return (
    <div className="card">
      <img src={props.imagemUrl} alt={props.nome} />
      <h3>{props.nome}</h3>
      <p className="preco">R$ {props.preco}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
}

export default CardConsole;