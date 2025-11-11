import React, { useState } from 'react';
import CardConsole from './components/CardConsole';
import './App.css'; // ✅ garante que o estilo seja aplicado

function App() {
  // Estado inicial com os consoles
  const [catalogoDeConsoles, setCatalogoDeConsoles] = useState([
    {
      id: 1,
      nome: 'PlayStation 5',
      preco: '4.499,90',
      imagemUrl: 'https://m.media-amazon.com/images/I/51dfg52K-cL._UF1000,1000_QL80_.jpg'
    },
    {
      id: 2,
      nome: 'Xbox Series X',
      preco: '4.349,00',
      imagemUrl: 'https://m.media-amazon.com/images/I/71aBXvHYUpL._UF1000,1000_QL80_.jpg'
    },
    {
      id: 3,
      nome: 'Nintendo Switch OLED',
      preco: '2.199,50',
      imagemUrl: 'https://m.media-amazon.com/images/I/61nqNujSF2L.jpg'
    }
  ]);

  // Função para adicionar novo console
  const adicionarConsole = () => {
    const novoConsole = {
      id: catalogoDeConsoles.length + 1,
      nome: 'Novo Console',
      preco: '1.999,00',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/512/906/906343.png'
    };
    setCatalogoDeConsoles([...catalogoDeConsoles, novoConsole]);
  };

  return (
    <div className="container">
      <header>
        <h1>🎮 Game Store 🎮</h1>
        <p>Os melhores consoles do mercado estão aqui!</p>
      </header>

      <main className="vitrine">
        {catalogoDeConsoles.map(console => (
          <CardConsole
            key={console.id}
            nome={console.nome}
            preco={console.preco}
            imagemUrl={console.imagemUrl}
          />
        ))}
      </main>

      <div className="footer">
        <button className="btn-adicionar" onClick={adicionarConsole}>
          ➕ Adicionar novo console
        </button>
      </div>
    </div>
  );
}

export default App;
