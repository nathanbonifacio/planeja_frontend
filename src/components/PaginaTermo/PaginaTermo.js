import React from 'react';
import './PaginaTermo.css';

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <button className="back-button">⟵</button>
        <nav>
          <ul>
            <li><a href="l1">L1</a></li>
            <li><a href="l2">L2</a></li>
            <li><a href="termo">Termos</a></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">

        <section id="l1">
          <h1>L1</h1>
          <p>Texto</p>
        </section>

        <section id="l2">
          <h1>L2</h1>
          <p>Texto</p>
        </section>

        <section id="termo">
          <h1>Termos</h1>
          <p>Texto</p>
        </section>
      </div>
    </div>
  );
}

export default App;
