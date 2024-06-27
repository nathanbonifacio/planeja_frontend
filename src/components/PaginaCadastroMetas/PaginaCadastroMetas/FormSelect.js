import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SelectBasicExample() {
  const [inputType1, setInputType1] = useState('text');
  const [inputType2, setInputType2] = useState('text');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  //const [financialControllId, setFinancialControllId] = useState('');
  const [goalName, setGoalName] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [monthlyValue, setMonthlyValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSelectChange1 = async (event) => {
    const value = event.target.value;
    setSelectedOption1(value);
    updateInputType1(value);
  };

  const handleSelectChange2 = async (event) => {
    const value = event.target.value;
    setSelectedOption2(value);
    updateInputType2(value);
  };

  const updateInputType1 = (value) => {
    let newType;

    switch(value) {
      case '1':
        newType = 'date';
        break;
      case '2':
        newType = 'number';
        break;
      case '3':
        newType = 'text';
        break;
      default:
        newType = 'text';
    }

    setInputType1(newType);
  };

  const updateInputType2 = (value) => {
    let newType;

    switch(value) {
      case '1':
        newType = 'date';
        break;
      case '2':
        newType = 'number';
        break;
      case '3':
        newType = 'text';
        break;
      default:
        newType = 'text';
    }

    setInputType2(newType);
  };

  const renderOptions = (excludeOption) => {
    const options = [
      { value: '1', label: 'Tempo' },
      //{ value: '2', label: 'Valor Total' },
      { value: '3', label: 'Valor Mensal' }
    ];

    return options
      .filter(option => option.value !== excludeOption)
      .map(option => <option key={option.value} value={option.value}>{option.label}</option>);
  };

    const handleSubmit = async () => {
    // Validar os campos necessários antes de enviar a requisição
    if (!goalName || !totalValue) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const payload = {
      goalName,
      totalValue,
      monthlyValue,
      startDate,
      endDate,
    };

    try {
      const response = await fetch('http://localhost:3000/ideal-goal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar a meta.');
      }

      toast.success('Meta cadastrada com sucesso!');
      // Limpar os campos do formulário após o sucesso
      setGoalName('');
      setTotalValue('');
      setMonthlyValue('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      toast.error('Erro: ' + error.message);
    }
  };

  return (
    <Container className='mt-4'>
      <Row>
        <Col>
          <Form.Control type={inputType1} placeholder="Digite Aqui"/>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example" onChange={handleSelectChange1} value={selectedOption1}>
            <option value="">Selecione para cadastrar</option>
            {renderOptions(selectedOption2)}
          </Form.Select>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Form.Control type={inputType2} placeholder="Digite Aqui"/>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example" onChange={handleSelectChange2} value={selectedOption2}>
            <option value="">Selecione para cadastrar</option>
            {renderOptions(selectedOption1)}
          </Form.Select>
        </Col>
      </Row>
      {/* <Row className='mt-4'>
        <Col>
          <Button variant="primary" onClick={handleSubmit}>Cadastrar Meta</Button>
        </Col>
      </Row> */}
    </Container>
  );
}

export default SelectBasicExample;