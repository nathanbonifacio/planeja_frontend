// RegisterComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './LoginRegister.css';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem.');
      return;
    }

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Cadastro realizado com sucesso!');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        toast.error('Falha ao cadastrar usuário.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Falha ao cadastrar usuário.');
    }
  };

  return (
    <div className="login-body">
      <div className="box">
        <div className="login-box">
          <h2 className='title'>Cadastro</h2>
          <form onSubmit={handleRegister}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">Cadastrar</button>
            <div className="signup-link">
              <Link to="/login">Faça Login</Link>
              <br />
              <Link to="/" className="ms-2">Home</Link>
            </div>
          </form>
        </div>
        {Array.from({ length: 50 }, (_, i) => (
          <span key={i} style={{ '--i': i }}></span>
        ))}
      </div>
      <ToastContainer autoClose={3000} position='bottom-left'/>
    </div>
  );
};

export default Cadastro;
