// src/App.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../PaginaFinanceiro/Header";
import Resume from "../PaginaFinanceiro/Resume";
import Form from "../PaginaFinanceiro/Form";
import './PaginaUsuario.css';
import styled from 'styled-components';
import CameraIcon from './img/camera-icon2.png';
import avatar1 from './img/avatar1.jpeg';
import avatar2 from './img/avatar2.jpeg';
import avatar3 from './img/avatar3.jpeg';
import avatar4 from './img/avatar4.jpeg';
import avatar5 from './img/avatar5.jpeg';
import avatar6 from './img/avatar6.jpeg';
import avatar7 from './img/avatar7.jpeg';
import avatar8 from './img/avatar8.jpeg';
import Grafico from '../PaginaFinanceiro/Grafico/Grafico';

const Body = styled.div`
  background-color: #101a11;
  color: white;
`;

const PaginaUsuario = () => {
  const userId = localStorage.getItem('userId');

  // Menu
  const [showMenu, setShowMenu] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  // Controle Financeiro
  const [showFinancialControl, setShowFinancialControl] = useState(false);
  // Informações do usuário nome e email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState('');

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [netTotal, setNetTotal] = useState(0);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const userData = await response.json();
          
          setName(userData.name);
          setEmail(userData.email);
        } else {
          console.error('Erro ao buscar informações do usuário');
        }
      } catch (error) {
        console.error('Erro ao buscar informações do usuário', error);
      }
    };
    fetchUserData();
  }, [userId]);

  // Lógicas

  const menuClick = () => {
    setShowMenu(!showMenu);
  };

  // Selecionar avatar, imagem do usuário 
  const getInitialImage = () => {
    const savedImage = localStorage.getItem('selectedImage');
    return savedImage || avatar1;
  };

  const [selectedImage, setSelectedImage] = useState(getInitialImage);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    localStorage.setItem('selectedImage', image);
  };

  const handlePhotoClick = () => {
    setShowImagePicker(!showImagePicker);
  };

  const ClickFinalControl = () => {
    setShowFinancialControl(!showFinancialControl);
  };

  const handleEditClick = () => {
    setTempName(name);
    setTempEmail(email);
    setIsEditing(true);
  };

  const validateName = (name) => {
    if (!name) {
      return <div>O nome não pode ser vazio.</div>;
    } else if (name.length < 3) {
      return <div>O nome deve ter pelo menos 3 letras.</div>;
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(name)) {
      return <div>O nome deve conter apenas letras.</div>;
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email) {
      return <div>O email não pode ser vazio.</div>;
    } else if (!/\S+@/.test(email)) {
      return <div>O email deve CONTER @.</div>;
    } else if (!email.endsWith('.com')) {
      return <div>O email deve terminar com '.com'.</div>;
    }
    return '';
  };

  const handleTempNameChange = (e) => {
    const newName = e.target.value;
    setTempName(newName);
    setNameError(validateName(newName));
  };

  const handleTempEmailChange = (e) => {
    const newEmail = e.target.value;
    setTempEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

  const handleSaveClick = () => {
    const nameValidationError = validateName(tempName);
    const emailValidationError = validateEmail(tempEmail);
    if (nameValidationError || emailValidationError) {
      setNameError(nameValidationError);
      setEmailError(emailValidationError);
    } else {
      setName(tempName);
      setEmail(tempEmail);
      setIsEditing(false);
      setNameError('');
      setEmailError('');
      // Adicione aqui a lógica para salvar os dados no servidor ou localStorage, se necessário
    }
  };

  // Controle Financeiro e Grafico
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    const netExpense = amountExpense.reduce((acc, cur) => acc + cur, 0);
    const netIncome = amountIncome.reduce((acc, cur) => acc + cur, 0);
    const nTotal = netIncome - netExpense;

    setTotalIncome(netIncome);
    setTotalExpense(netExpense);
    setNetTotal(nTotal);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = async (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));

    const financialData = {
      userId,
      description,
      income: transaction.expense ? 0 : Number(transaction.amount),
      expenses: transaction.expense ? Number(transaction.amount) : 0,
      total: netTotal
    };
  
    try {
      const response = await fetch('http://localhost:3000/financial-controll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(financialData),
      });
      console.log({'FINANCIAL CONTROLL RESPONSE: ': response})
  
      if (response.ok) {
        const result = await response.json();
        console.log({'FINANCIAL CONTROLL RESULT: ': result})
  
        setDescription('');
        setIncome('');
        setExpense('');
        setTotal('');
  
        console.log('Dados financeiros salvos com sucesso');
      } else {
        console.error('Erro ao salvar dados financeiros', await response.text());
      }
    } catch (error) {
      console.error('Erro ao salvar dados financeiros', error);
    }

  };

  return (
    <Body>
      <div className="container bg">
        <header className="header bg_header">
          <button className="menu_button" onClick={menuClick}>☰</button>
          <div className="user_name">{name}</div>
          <div className="app_name">PlaneJá</div>
        </header>
        {showMenu && (
          <div className="menu">
            <ul>
              {/* <li>Sair</li> */}
              <Link to='/'><li>Sair</li></Link>
            </ul>
          </div>
        )}
        <main className="main">
          <div className="photo">
            <div className="photo_container">
              <img src={selectedImage} alt="Profile" />
              <div className="overlay" onClick={handlePhotoClick}>
                <img src={CameraIcon} alt="Camera Icon" className="camera-icon" />
              </div>
            </div>
          </div>
          {showImagePicker && (
            <div className="image_picker">
              <div className="bg_picker">
                <img src={avatar1} alt="Option 1" onClick={() => handleImageSelect(avatar1)} />
                <img src={avatar2} alt="Option 2" onClick={() => handleImageSelect(avatar2)} />
                <img src={avatar3} alt="Option 3" onClick={() => handleImageSelect(avatar3)} />
                <img src={avatar4} alt="Option 4" onClick={() => handleImageSelect(avatar4)} />
                <img src={avatar5} alt="Option 5" onClick={() => handleImageSelect(avatar5)} />
                <img src={avatar6} alt="Option 6" onClick={() => handleImageSelect(avatar6)} />
                <img src={avatar7} alt="Option 7" onClick={() => handleImageSelect(avatar7)} />
                <img src={avatar8} alt="Option 8" onClick={() => handleImageSelect(avatar8)} />
              </div>
            </div>
          )}
          <div className="info">
            {isEditing ? (
              <>
                <p>
                  <b>Nome:</b>
                  <input className='nome' value={tempName} onChange={handleTempNameChange} />
                  {nameError && <span>{nameError}</span>}
                </p>
                <p>
                  <b>Email:</b>
                  <input className='mail' value={tempEmail} onChange={handleTempEmailChange} />
                  {emailError && <span>{emailError}</span>}
                </p>
                <button className='save' onClick={handleSaveClick}>Salvar</button>
              </>
            ) : (
              <>
                <p>
                  <b>Nome:</b> {name} <span onClick={handleEditClick} className='edit_info'>✏️</span>
                </p>
                <p>
                  <b>Email:</b> {email} <span onClick={handleEditClick} className='edit_info'>✏️</span>
                </p>
              </>
            )}
          </div>
          <div className={`financial_control ${showFinancialControl ? 'expanded' : ''}`}>
            <div className="financial_control_title" onClick={ClickFinalControl}>Controle financeiro</div>
            {showFinancialControl && (
              <div className='financial_control_space'>
                <Header />
                <Resume income={income} expense={expense} total={total} />
                <Form
                  handleAdd={handleAdd}
                  transactionsList={transactionsList}
                  setTransactionsList={setTransactionsList}
                />
              </div>
            )}
          </div>
          <div className="DataVisual">
            <div className="graph_title">
              <h2>Gráfico do controle financeiro</h2>
            </div>
            <div className="graph">
              {transactionsList.length > 0 ? (
                <Grafico total={netTotal} income={totalIncome} expense={totalExpense} />
              ) : (
                <p>Sem dados para exibir no gráfico</p>
              )}
            </div>
          </div>
          <div className="form">
            <div className="links">
              <div className="espaco">
                <Link to='/criarmetas' className="create_goals" >Criar Metas</Link>
                <Link to='/metas' className="goal_control" >Controle de Metas</Link>
              </div>
            </div>
          </div>
        </main>
      </div >
    </Body >
  );
}

export default PaginaUsuario;
