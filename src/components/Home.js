import React from 'react';
import Carrossel from './Carousel';
import Sobre from './Sobre';
import Servicos from './Servicos';
import Membros from './Membros';
import NavBar from './NavBar';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <header>
        <NavBar />
        <Carrossel />
      </header>
      <main>
        <Sobre />
        <Servicos />
        <Membros />
      </main>
      <footer id='footer'>
        <Footer />
      </footer>

    </div>
  );
};

export default Home;