// import React, { useState } from 'react';
// import styled from 'styled-components';
// import FormSelect from './FormSelect';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { Link } from 'react-router-dom';
// import {toast, ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// const Body = styled.div`
//   background-color: #101a11;
//   color: white;
//   width:100%;
//   height: 100vh;
  
// `;
// const Container = styled.div`
//     width: 80%;
//     height: auto;
//     margin: 80px 0px 0px 120px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const Formulario = styled.div`
//     width: 800px;
//     height: 500px;
//     background-color: #E3FEF7;
//     border-radius: 10px;
// `;

// const Titulo = styled.div`
//     font-size: 2em;
//     color: var(--corDeDetalhes);
//     text-align: center;
//     margin-top: 15px;
// `;

// const SubTitulo = styled.div`
//     font-size: 1em;
//     padding-top: 10px;
//     color: black;
//     text-align: center;
//     margin-top: 15px;
// `;

// const Botao = styled.div`
//     padding: 10px 20px;
//     border: none;
//     background-color: #209e3b;
//     color: white;
//     border-radius: 5px;
//     cursor: pointer;
//     width: 120px;
// `;

// const Grid = styled.div`
//     width: 90%;
//     height: 80%;
//     margin: 0px 0px 0px 45px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
// `;


// const GridItens = styled.div`
//     width: 60%;
//     height: 80%;
// `;

// function CadastroMetas () {
//     const [showMenu, setShowMenu] = useState(false);
//     const menuClick = () => {
//         setShowMenu(!showMenu);
//       };

//     return (
//         <Body>
//             <div className="bg">
//                 <header className="header bg_header">
//                 <button className="menu_button" onClick={menuClick}>☰</button>
//                 <div className="user_name">N. Usuario</div>
//                 <div className="app_name">PlaneJá</div>
//                 <div className="toggle">L/D</div>
//                 </header>
//                 {showMenu && (
//                 <div className="menu">
//                     <ul>
//                     <li>Planos</li>
//                     <li>Termos</li>
//                     <li>Sair</li>
//                     </ul>
//                 </div>
//                 )};
//             </div>
//             <Container>
//                 <Formulario>
//                     <Titulo>
//                         <h2>Cadastro de Metas</h2>
//                     </Titulo>
//                     <Grid>
//                         <Col>
//                             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                                 <Form.Label style={{color: 'black'}}>Descrição</Form.Label>
//                                 <Form.Control as="textarea" rows={12} />
//                             </Form.Group>
//                         </Col>
//                         <GridItens className='mt-5'>
//                             <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                                 <Col>
//                                     <SubTitulo className='mb-4'>Nome da Meta:</SubTitulo>
//                                 </Col>
//                                 <Col>
//                                     <Form.Control type="text" placeholder="" />
//                                 </Col>
//                             </Row>
//                             <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                                 <Col>
//                                     <SubTitulo className='mb-4'>Valor da meta:</SubTitulo>
//                                 </Col>
//                                 <Col>
//                                     <Form.Control type="text" placeholder="" />
//                                 </Col>
//                             </Row>
//                             <Col>
//                                 <FormSelect/>
//                             </Col>
//                             <Col className='mt-2' style={{display: 'flex', justifyContent: 'end', alignItems: 'end', width:'100%'}}>
//                                 <Link to="/" style={{textDecoration:'none'}}><Botao className='mt-5'>Cadastrar</Botao></Link>
//                                 <Link to="/usuario" style={{textDecoration:'none'}}><Botao style={{textAlign: 'center', marginLeft:'12px'}}>Inicio</Botao></Link>
//                             </Col>
//                         </GridItens>
//                     </Grid>
//                 </Formulario>
//             </Container>
//             <ToastContainer autoClose={3000} position='bottom-left'/>
//         </Body>
//     );
// }

// export default CadastroMetas;

//========================== VERSAO TESTE COM SUCESSO

import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Body = styled.div`
  background-color: #101a11;
  color: white;
  width:100%;
  height: 100vh;
  
`;
const Container = styled.div`
    width: 80%;
    height: auto;
    margin: 80px 0px 0px 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Formulario = styled.div`
    width: 800px;
    height: 500px;
    background-color: #E3FEF7;
    border-radius: 10px;
`;

const Titulo = styled.div`
    font-size: 2em;
    color: var(--corDeDetalhes);
    text-align: center;
    margin-top: 15px;
`;

const SubTitulo = styled.div`
    font-size: 1em;
    padding-top: 10px;
    color: black;
    text-align: center;
    margin-top: 15px;
`;

const Botao = styled.div`
    padding: 10px 20px;
    border: none;
    background-color: #209e3b;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    width: 120px;
`;

const Grid = styled.div`
    width: 90%;
    height: 80%;
    margin: 0px 0px 0px 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;


const GridItens = styled.div`
    width: 60%;
    height: 80%;
`;

function CadastroMetas () {
    const [showMenu, setShowMenu] = useState(false);
    const [goalName, setGoalName] = useState('');
    const [totalValue, setTotalValue] = useState('');
    const [monthlyValue, setMonthlyValue] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const menuClick = () => {
      setShowMenu(!showMenu);
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
        <Body>
            <div className="bg">
                <header className="header bg_header">
                <button className="menu_button" onClick={menuClick}>☰</button>
                <div className="user_name">N. Usuario</div>
                <div className="app_name">PlaneJá</div>
                <div className="toggle">L/D</div>
                </header>
                {showMenu && (
                <div className="menu">
                    <ul>
                    <li>Planos</li>
                    <li>Termos</li>
                    <li>Sair</li>
                    </ul>
                </div>
                )};
            </div>
            <Container>
                <Formulario>
                    <Titulo>
                        <h2>Cadastro de Metas</h2>
                    </Titulo>
                    <Grid>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{color: 'black'}}>Descrição</Form.Label>
                                <Form.Control as="textarea" rows={12} />
                            </Form.Group>
                        </Col>
                        <GridItens className='mt-5'>
                            <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Col>
                                    <SubTitulo className='mb-4'>Nome da Meta:</SubTitulo>
                                </Col>
                                <Col>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Obrigatório" 
                                    value={goalName} 
                                    onChange={(e) => setGoalName(e.target.value)} 
                                    required
                                    />
                                </Col>
                            </Row>
                            <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Col>
                                    <SubTitulo className='mb-4'>Valor da meta:</SubTitulo>
                                </Col>
                                <Col>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Obrigatório" 
                                    value={totalValue}
                                    onChange={(e) => setTotalValue(e.target.value)}
                                    required
                                    />
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col>
                              <SubTitulo className='mb-4'>Valor Mensal:</SubTitulo>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder=""
                                value={monthlyValue}
                                onChange={(e) => setMonthlyValue(e.target.value)}
                              />
                            </Col>
                          </Row>
                            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <Col>
                                <SubTitulo className='mb-4'>Data de Início:</SubTitulo>
                              </Col>
                              <Col>
                                <Form.Control
                                  type="date"
                                  placeholder=""
                                  value={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                                />
                              </Col>
                            </Row>
                            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col>
                              <SubTitulo className='mb-4'>Data de Término:</SubTitulo>
                            </Col>
                            <Col>
                              <Form.Control
                                type="date"
                                placeholder=""
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                              />
                            </Col>
                          </Row>
                            <Col className='mt-2' style={{display: 'flex', justifyContent: 'end', alignItems: 'end', width:'100%'}}>
                                <Botao className='mt-5' onClick={handleSubmit}>Cadastrar</Botao>
                                <Link to="/usuario" style={{textDecoration:'none'}}><Botao style={{textAlign: 'center', marginLeft:'12px'}}>Inicio</Botao></Link>
                            </Col>
                        </GridItens>
                    </Grid>
                </Formulario>
            </Container>
            <ToastContainer autoClose={3000} position='bottom-left'/>
        </Body>
    );
}

export default CadastroMetas;


// ========================== VERSAO FUNCIONAL

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import FormSelect from './FormSelect';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { Link } from 'react-router-dom';
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Body = styled.div`
//   background-color: #101a11;
//   color: white;
//   width: 100%;
//   height: 100vh;
// `;

// const Container = styled.div`
//   width: 80%;
//   height: auto;
//   margin: 80px 0px 0px 120px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Formulario = styled.div`
//   width: 800px;
//   height: 500px;
//   background-color: #E3FEF7;
//   border-radius: 10px;
// `;

// const Titulo = styled.div`
//   font-size: 2em;
//   color: var(--corDeDetalhes);
//   text-align: center;
//   margin-top: 15px;
// `;

// const SubTitulo = styled.div`
//   font-size: 1em;
//   padding-top: 10px;
//   color: black;
//   text-align: center;
//   margin-top: 15px;
// `;

// const Botao = styled.div`
//   padding: 10px 20px;
//   border: none;
//   background-color: #209e3b;
//   color: white;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 120px;
// `;

// const Grid = styled.div`
//   width: 90%;
//   height: 80%;
//   margin: 0px 0px 0px 45px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const GridItens = styled.div`
//   width: 60%;
//   height: 80%;
// `;

// function CadastroMetas() {
//   const [goalName, setGoalName] = useState('');
//   const [totalValue, setTotalValue] = useState('');
//   const [monthlyValue, setMonthlyValue] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleSubmit = async () => {
//     // Validar os campos necessários antes de enviar a requisição
//     if (!goalName || !totalValue) {
//       toast.error('Por favor, preencha todos os campos obrigatórios.');
//       return;
//     }

//     const payload = {
//       goalName,
//       totalValue,
//       monthlyValue,
//       startDate,
//       endDate,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/ideal-goal', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Erro ao cadastrar a meta.');
//       }

//       toast.success('Meta cadastrada com sucesso!');
//       // Limpar os campos do formulário após o sucesso
//       setGoalName('');
//       setTotalValue('');
//       setMonthlyValue('');
//       setStartDate('');
//       setEndDate('');
//     } catch (error) {
//       toast.error('Erro: ' + error.message);
//     }
//   };

//   return (
//     <Body>
//       <div className="bg">
//         <header className="header bg_header">
//           <button className="menu_button">☰</button>
//           <div className="user_name">N. Usuario</div>
//           <div className="app_name">PlaneJá</div>
//           <div className="toggle">L/D</div>
//         </header>
//       </div>
//       <Container>
//         <Formulario>
//           <Titulo>
//             <h2>Cadastro de Metas</h2>
//           </Titulo>
//           <Grid>
//             <Col>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label style={{ color: 'black' }}>Descrição</Form.Label>
//                 <Form.Control as="textarea" rows={12} />
//               </Form.Group>
//             </Col>
//             <GridItens className='mt-5'>
//               <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Col>
//                   <SubTitulo className='mb-4'>Nome da Meta:</SubTitulo>
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     type="text"
//                     placeholder=""
//                     value={goalName}
//                     onChange={(e) => setGoalName(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//               <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Col>
//                   <SubTitulo className='mb-4'>Valor da Meta:</SubTitulo>
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     type="text"
//                     placeholder=""
//                     value={totalValue}
//                     onChange={(e) => setTotalValue(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//               <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Col>
//                   <SubTitulo className='mb-4'>Valor Mensal:</SubTitulo>
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     type="text"
//                     placeholder=""
//                     value={monthlyValue}
//                     onChange={(e) => setMonthlyValue(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//               <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Col>
//                   <SubTitulo className='mb-4'>Data de Início:</SubTitulo>
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     type="date"
//                     placeholder=""
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//               <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Col>
//                   <SubTitulo className='mb-4'>Data de Término:</SubTitulo>
//                 </Col>
//                 <Col>
//                   <Form.Control
//                     type="date"
//                     placeholder=""
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//               <Col className='mt-2' style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', width: '100%' }}>
//                 <Botao className='mt-5' onClick={handleSubmit}>Cadastrar</Botao>
//                 <Link to="/usuario" style={{ textDecoration: 'none' }}><Botao style={{ textAlign: 'center', marginLeft: '12px' }}>Inicio</Botao></Link>
//               </Col>
//             </GridItens>
//           </Grid>
//         </Formulario>
//       </Container>
//       <ToastContainer autoClose={3000} position='bottom-left' />
//     </Body>
//   );
// }

// export default CadastroMetas;
