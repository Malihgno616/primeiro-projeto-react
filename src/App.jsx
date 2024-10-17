import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/App.css";

// Componente em Classe é uma classe que herda a classe componente do React, e retorna o HTML dentro do método render.

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return <Navbar />;
  }
}

export default App;
