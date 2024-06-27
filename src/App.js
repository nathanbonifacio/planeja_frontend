import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro'


import { AppProvider } from './context/AppContext';
import PaginaMetas from './components/PaginaMeta/PaginaMetas/PaginaMetas';
import PaginaUsuario from './components/PaginaUsuario/PaginaUsuario';
import Financeiro from './components/Financeiro';
import PaginaCadastroMetas from './components/PaginaCadastroMetas/PaginaCadastroMetas/CadastroMetas';



function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/usuario/:id" element={<PaginaUsuario />} />
                <Route path="/metas" element={<PaginaMetas />} />
                <Route path="/financeiro" element={<Financeiro />} />
                <Route path="/criarmetas" element={<PaginaCadastroMetas />} />
              </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
