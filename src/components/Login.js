import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Email e/ou senha incorretos.');
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        const userId = result.id;
        
        localStorage.setItem('userId', userId);

        setEmail('');
        setPassword('');
        navigate(`/usuario/${userId}`);
      } else {
        toast.error('Email e/ou senha incorretos.');
      }
    } catch (error) {
      console.error(error);
      alert('Email e/ou senha incorretos.');
    }
  };

  return (
    <div className="login-body">
      <div className="box">
        <div className="login-box">
          <h2 className='title'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <input
                type="email"
                id='email'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                id='password'
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forgot-pass">
              <Link to="/">Esqueceu sua senha?</Link>
            </div>

            <button type="submit" className="btn">Login</button>

            <div className="signup-link">
              <Link to="/cadastro">Cadastre-se</Link>
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

export default Login;
